<template>
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center" v-show="isModalVisible">
    <div class="bg-white p-8 rounded-md shadow-lg">
      <h3 class="text-lg font-semibold mb-4">Upload Profile Picture</h3>
      <div class="file-upload mb-4">
        <input type="file" @change="onFileChange" />
      </div>
      <button @click="onUploadFile" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" :disabled="!this.selectedFile">Upload file</button>
      <button @click="this.$emit('close')" class="ml-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Cancel</button>
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
      selectedFile: "",
      isModalVisible: true
    };
  },
  methods: {
    onFileChange(e) {
      const selectedFile = e.target.files[0]; // accessing file
      this.selectedFile = selectedFile;
    },
    onUploadFile() {
      const formData = new FormData();
      formData.append("file", this.selectedFile);  // appending file

      // sending file to the backend
      axios
        .post("/profile/upload_profile_picture", formData, {})
        .then(res => {
          console.log(res);
          this.$emit('profilePictureChanged');
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
    }
  }
};
</script>