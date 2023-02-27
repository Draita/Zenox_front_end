<template>
    <div class="z-10 first-letter:fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
        <message-box :header="this.messageBoxHeader" ></message-box>
    </div>
  </template>

  <script>
import messageBox from '@/components/messageBox.vue';



  export default {
    components: {
        messageBox,
    },
    props: {
      message: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        reply: "",
        messageBoxHeader: "Reply to message"
      };
    },
    methods: {
      sendReply() {
        // Do something with the reply here
        console.log(this.reply);
        this.$emit("close");
      },
    },
  };
  </script>

