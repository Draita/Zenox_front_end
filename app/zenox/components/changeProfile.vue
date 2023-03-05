<!-- <template>
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center z-40 overflow-clip items-center" v-show="isModalVisible">
    <div class="bg-white p-8 rounded-md shadow-lg">
      <h3 class="text-lg font-semibold mb-4">Update Profile</h3>
      <form @submit.prevent="onSubmit">
        <div class="mb-4">
          <label class="block font-semibold mb-2" for="description">Description:</label>
          <textarea v-model="description" class="form-textarea block w-full" rows="3" id="description"></textarea>
        </div>
        <div class="file-upload mb-4">
          <label class="block font-semibold mb-2" for="profile-picture">Profile Picture:</label>
          <input type="file" id="profile-picture" @change="onFileChange" />
        </div>
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" :disabled="!canSubmit">Save</button>
        <button @click="this.$emit('close')" class="ml-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Cancel</button>
      </form>
    </div>
  </div>
</template> -->

<template>
  <div class="pl-[24px] z-20 fixed inset-0 bg-black  overflow-clip items-center text-white ">
    <div class="header flex pl-[17px] text-[24px] pt-[2px]">
      <img @click="this.$emit('close')" src="@/assets/icons/arrow-back.svg">
      <p>EDIT PROFILE </p>
      <p @click="this.save"
        class="h-[26px] w-[92px] bg-white text-black  text-[16px] text-center fixed right-[10px] top-[7px]">SAVE</p>
    </div>
    <div class="h-[146px] w-[510px] ">
      <input type="file" id='uploadBanner' class="rounded-full" name="img" accept="image/png, image/gif, image/jpeg"
        @change="this.onFileChangeBanner" style=" visibility: hidden; width: 1px; height: 1px" />
      <!-- TODO REMOVE NEGATIVE MARGIN -->
      <a href="" onclick="document.getElementById('uploadBanner').click(); return false"><img id="blah"
          :src="this.user.banner" alt="your image" class="object-cover mt-[-20px] h-[146px] w-[510px]" /></a>
    </div>

    <div class="profile-picture flex  justify-center w-full mt-[-70px] ">
      <input type="file" id='upload' class="rounded-full" accept="image/png, image/gif, image/jpeg" name="img"
        @change="this.onFileChangeProfilePicture" style=" visibility: hidden; width: 1px; height: 1px" />

      <a href="" onclick="document.getElementById('upload').click(); return false"><img id="blah"
          :src="this.user.profilePicture" alt="your image" class="rounded-full border-[4px] object-cover"
          style="width: 133px; height: 133px;" /></a>


    </div>



    <form class="inputs pl-[44px] pr-[57px] flex flex-col space-y-[29px] ">

      <div class="username  mt-[10px]">
        <p class="font-bold text-[20px]">USERNAME</p>
        <input v-model="this.newProfile.username" @click="resetFields" type="email" id="email" class="border-white border-[0px] text-[12px]   background-text-box bg-black   rounded-none placeholder-white
                                                                                             no-outline focus:ring-0 focus:border-transparent
                                                                                            w-full inner-border-[1px]"
          :placeholder="this.user.username" required>

      </div>
      <div class="bio">
        <p class="font-bold text-[20px]">DESCRIPTION</p>
        <textarea v-model="this.newProfile.description" id="description" name="description" class="h-[94px] w-full resize-none  border-[0px] mr-[-1px] font-light text-[12px] background-text-box
                                      no-outline focus:ring-0 focus:border-transparent
                                      border-white  inner-border-[1px]" rows="4"
          :placeholder="this.user.description"></textarea>
      </div>


    </form>




  </div>
</template>

<script>
import axios from "axios";
import config from "@/config";
import { ref } from 'vue'


export default {
  props: {
    user: {
      required: true,
      type: Object,
    }
  },
  data() {
    return {
      isModalVisible: true,

      newProfile: {
        fileBanner: "",

        fileProfilePicture: "",
        description: "",
        username: "",

      }

    };
  },
  created() {
    document.documentElement.style.overflow = 'hidden'
  },
  methods: {

    onFileChangeProfilePicture(e) {
      try {
        const selectedFile = e.target.files[0]
        this.newProfile.fileProfilePicture = selectedFile

        const file = e.target.files[0];
        this.user.profilePicture = URL.createObjectURL(file);

      } catch {
        console.log("invalid FILE")
      }

    },

    onFileChangeBanner(e) {
      try {
        const selectedFile = e.target.files[0]
        this.newProfile.fileBanner = selectedFile;

        const file = e.target.files[0];
        this.user.selectedBanner = URL.createObjectURL(file);

      } catch {
        console.log("invalid FILE")
      }

    },

    onFileChange(e) {
      const selectedFile = e.target.files[0]; // accessing file
      this.selectedFile = selectedFile;
    },
    onSubmit() {
      const formData = new FormData();
      formData.append("file", this.selectedFile);  // appending file
      formData.append("description", this.description); // appending description

      // sending data to the backend
      axios
        .post("/profile/update_profile", formData, {})
        .then(res => {
          console.log(res);
          this.$emit('profileUpdated');
          this.$emit('close');

        })
        .catch(err => {
          console.log(err);
        });

      // hide the modal
      this.hideModal();
    },
    save() {
      console.log("SAVE")

      const formData = new FormData();

      if (this.newProfile.username) {
        formData.append("username", this.newProfile.username);
      }
      if (this.newProfile.description) {
        formData.append("description", this.newProfile.description);
      }
      if (this.newProfile.fileBanner) {
        formData.append("fileBanner", this.newProfile.fileBanner);
      }
      if (this.newProfile.fileProfilePicture) {
        formData.append("fileProfilePicture", this.newProfile.fileProfilePicture);
      }
      console.log(formData)

      axios
        .post("/profile/update_profile", formData, {})
        .then(res => {
          console.log(res);

          // TODO: FIX THAT THE USER IS INSTEAD NAVIGATED TO THEIR OWN PROFILE
          // BUG IS CURRENTLY THAT THE PROFILE doesn't understahd that the param in the browser weren';t
          if (this.newProfile.username){
            this.$router.push('/')
          }
          this.$emit('profileUpdated');


          this.$emit('close');
          this.hideModal();

        })
        .catch(err => {
          console.log(err);
        });






    },
    showModal() {
      this.isModalVisible = true;
    },
    hideModal() {
      // this.isModalVisible = false;
      this.selectedFile = null; // reset selected file when modal is closed
      this.description = ""; // reset description when modal is closed
    }
  },
  computed: {
    canSubmit() {
      return this.description || this.selectedFile;
    }
  },

};
</script>
