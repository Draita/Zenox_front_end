<template>
  <div class="flex justify-center items-center">
    <div class="w-full max-w-md">
      <form @submit.prevent="sendMessage" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="message">
            Message
          </label>
          <textarea v-model="message" id="message" name="message"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="4"></textarea>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="file">
            File
          </label>
          <input type="file" id="file" name="file" @change="onFileChange" accept="image/*, video/*"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      message: '',
      file: null,
    }
  },
  methods: {
    sendMessage() {
      const formData = new FormData();

      formData.append('content', this.message);
      formData.append('location', 'feed');
      formData.append("file", this.file)



      axios.post('/messages', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((response) => {
        this.$emit('messageSend');


      }
      ).catch((error) => {
          console.error(error);
        });
      this.message = '';
      this.file = null;
    },
    onFileChange(event) {
      this.file = event.target.files[0];
    },
  }
}
</script>
