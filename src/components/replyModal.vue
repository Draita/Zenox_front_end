<template>
  <div class="z-20 inset-0 fixed shadow bg-gray-700 bg-opacity-50 flex items-center justify-center">

    <div class="bg-white p-5 rounded-xl relative">

      <div class="absolute top-0 right-0 mt-2 mr-2 cursor-pointer" @click="this.$emit('closeReplyModal')">
        <svg class="h-6 w-6 text-gray-700 hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z">
          </path>
        </svg>
      </div>
      <!-- <message-content   v-if = "test" :editable="true" :allowVistingProfile="false" :message="this.message"></message-content> -->

      <message-box @messageSend="sendReply" class="" :header="this.messageBoxHeader"></message-box>

    </div>
  </div>
</template>

<script>
import messageBox from '@/components/messageBox.vue';
import axios from "axios";




export default {
  components: {
    messageBox,

  },
  props: {
    message: {
      type: Object,
      required: false,
    },

  },
  updated() {
    this.test = true;
  },
  data() {
    return {
      reply: "",
      messageBoxHeader: "Reply to message",
      test: false
    };
  },
  methods: {
    sendReply(e) {
      // Do something with the reply here

      console.log(e);
      const url = '/messages/'+this.message._id+'/reply'
      axios.post(url, e, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((response) => {
        //TODO: impliment later that data is returned from endpoint and added to the this.messages
        // this.messages.unshift(response.data)
        console.log(response)
      }
      ).catch((error) => {
        console.error(error);
      });


      console.log(this.message._id);
      this.$emit("close");
    },
  },
};
</script>

