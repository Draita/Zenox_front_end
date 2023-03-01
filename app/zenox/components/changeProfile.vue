<template>
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center" v-show="isModalVisible">
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
</template>

<script>
import axios from "axios";
import config from "@/config";
import { ref } from 'vue'


export default {
  data() {
    return {
      description: "",
      selectedFile: "",
      isModalVisible: true
    };
  },
  methods: {
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
  }
};
</script>