<template>
  <div class=" pl-[24px] z-20 fixed inset-0 bg-black  overflow-clip items-center text-white flex justify-center ">
    <div class=" width-formatting h-screen relative">
      <div class="header flex pl-[17px] text-[24px] pt-[2px] cursor-pointer ">
        <img class="hover:opacity-70" @click="this.$emit('close')" src="@/assets/icons/arrow-back.svg">
        <p>EDIT PROFILE </p>
        <button @click="this.save"
          class="h-[26px] w-[92px] absolute bg-white text-black  text-[16px] text-center  right-[10px] top-[7px] hover:bg-black hover:text-white hover:inner-border-[1px] hover:inner-border-white">SAVE</button>
      </div>
      <div class="h-[146px] w-[510px] z-0  relative hover:opacity-50 select-none">

        <input type="file" id='uploadBanner' class="rounded-full " name="img" accept="image/png, image/gif, image/jpeg"
          @change="this.onFileChangeBanner" style=" visibility: hidden; width: 1px; height: 1px" />
        <!-- TODO REMOVE NEGATIVE MARGIN -->
        <a href="" onclick="document.getElementById('uploadBanner').click(); return false"><img id="blah"
            :src="this.user.banner" alt="your image" class=" object-cover mt-[-20px] h-[146px] w-[510px]" /></a>
      </div>

      <div class="profile-picture flex  justify-center w-full z-30 relative select-none ">
        <div class="hover bg-gray-500  w-[133px] h-[133px] mt-[-70px] rounded-full">
          <input type="file" id='upload' class="rounded-full" accept="image/png, image/gif, image/jpeg" name="img"
            @change="this.onFileChangeProfilePicture" style=" visibility: hidden; width: 1px; height: 1px" />

          <a href="" onclick="document.getElementById('upload').click(); return false"><img id="blah"
              :src="this.user.profilePicture" alt="your image" class="rounded-full border-[4px] object-cover mt-[-25px] hover:opacity-70"
              style="width: 133px; height: 133px;" /></a>
        </div>



      </div>



      <form class="inputs pl-[44px] pr-[57px] flex flex-col space-y-[29px] ">

        <div class="username  mt-[10px]">
          <p class="font-bold text-[20px]">USERNAME</p>
          <input v-model="this.newProfile.username" @click="this.usernameWrong = false" type="email" id="email" class="border-white border-[0px] text-[12px]   background-text-box bg-black   rounded-none placeholder-white
              no-outline focus:ring-0 focus:border-transparent
              w-full inner-border-[1px] " :placeholder="this.user.username"
            :class="{ 'inner-border-red-800': usernameWrong }">

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
      usernameWrong: false,

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
        this.user.banner = URL.createObjectURL(file);


      } catch {
        console.log("invalid FILE")
      }

    },

    onFileChange(e) {
      const selectedFile = e.target.files[0]; // accessing file
      this.selectedFile = selectedFile;
    },
    async save() {
      console.log("SAVE")


      const formData = new FormData();
      var allowPost = true;
      if (this.newProfile.username) {
        formData.append("username", this.newProfile.username);

        if (!(this.newProfile.username == this.user.username)) {
          var exists = await axios.post("/check-username", {
            username: this.newProfile.username
          }).then((response) => {

            return response.data.exists;

          }).catch(function (error) {
            return false

          });


        }

        if (exists) {
          allowPost = false
          this.usernameWrong = true

        }
        console.log(exists)

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


      if (allowPost) {
        axios
          .post("/profile/update_profile", formData, {})
          .then(res => {
            console.log(res);

            // TODO: FIX THAT THE USER IS INSTEAD NAVIGATED TO THEIR OWN PROFILE
            // BUG IS CURRENTLY THAT THE PROFILE doesn't understahd that the param in the browser weren';t
            this.$router.push('/zenox/feed/')

          })
          .catch(err => {
            console.log(err);
          });

      }


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
