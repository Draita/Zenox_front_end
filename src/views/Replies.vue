<template>

  <!-- TODO: add that people can remove their own comments -->
  <div class="container-fluid flex flex-row items-center">
    <main-sidebar />

    <div class="flex flex-col md:flex-row h-screen flex-1 overflow-scroll">
      <div class="profile min-w-full flex flex-col items-center">
        <div class="flex flex-row items-center justify-between w-full px-4 py-2 bg-gray-100">
          <button @click="$router.go(-1)" class="rounded-full hover:bg-gray-200 px-2 py-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-8 h-8 fill-current">
              <path clip-rule="evenodd" fill-rule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"></path>

            </svg>
          </button>
          <h2 class="text-lg font-semibold mb-4">Replies</h2>
        </div>
        <!-- TODO: disable in back-end so you can't reply -->
        <message-box @messageSend="sendReply" class="md:mx-16 w-[300px] md:w-[400px] lg:w-[600px]" :header="this.messageBoxHeader"></message-box>
        <div class="flex flex-col flex-1 mx-4 md:mx-16 w-[320px] md:w-[400px] lg:w-[600px] pt-8">
          <messages-list  :allowReplying=false :messages="messages"></messages-list>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import MainSidebar from "@/components/mainSidebar.vue";
import MessageBox from "@/components/messageBox.vue";
import messagesList from "@/components/messagesList.vue";

import axios from "axios";




export default {
  components: {
    MainSidebar,
    MessageBox,
    messagesList
  },
  data() {
    return {
      messages: [],
      messageId: this.$route.query.message

    };
  },
  methods: {
    sendReply(e) {
      // Do something with the reply here

      console.log(e);
      const url = '/messages/' + this.messageId + '/reply'
      axios.post(url, e, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((response) => {
        //TODO: impliment later that data is returned from endpoint and added to the this.messages
        // this.messages.unshift(response.data)
        this.updateMessages();
      }
      ).catch((error) => {
        console.error(error);
      });


      console.log(this.message._id);
      this.$emit("close");
    },
    updateMessages(){
      const message = this.$route.query.message
    axios
      .get('/messages/replies/' + message)
      .then((response) => {
        this.messages = response.data;
      })
      .catch((error) => {
        console.log(error);
      });

    }
  },
  created() {
    this.updateMessages();


  },
}
</script>