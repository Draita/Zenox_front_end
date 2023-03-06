<template>
  <!-- TODO: add that people can remove their own comments -->
  <div class="container-fluid h-full w-full items-center font-medium">


    <div class="flex flex-col content-center items-center justify-center w-full ">


      <div class="flex items-center justify-between w-full px-4 bg-gray-100  ">
        <button @click="$router.go(-1)" class="rounded-full hover:bg-gray-200 px-2 py-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-8 h-8 fill-current">
            <path clip-rule="evenodd" fill-rule="evenodd"
              d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z">
            </path>

          </svg>
        </button>
        <h2 class="text-lg font-semibold mb-4">Replies</h2>
      </div>
      <div class="width-formatting">
        <message-profile  v-if="!loading" :hideBottom=true
          :message=this.message></message-profile>

      </div>

      <message-box @messageSend="sendReply" class="width-formatting " :header="this.messageBoxHeader"></message-box>

      <!-- TODO: disable in back-end so you can't reply again-->

      <messages-list class="width-formatting" :allowReplying=false :messages=this.replies></messages-list>







    </div>
  </div>
</template>


<style></style>

<script>
import MainSidebar from "@/zenox/components/mainSidebar.vue";
import MessageBox from "@/zenox/components/messageBox.vue";
import messagesList from "@/zenox/components/messagesList.vue";
import messageProfile from "@/zenox/components/messageProfile.vue";


import axios from "axios";




export default {
  components: {
    MainSidebar,
    MessageBox,
    messagesList,
    messageProfile,
  },
  data() {
    return {
      replies: [],
      messageId: this.$route.query.message,
      message: undefined,
      loading: true,

    };
  },
  methods: {
    sendReply(e) {
      // Do something with the reply here

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

    updateMessages() {
      const message = this.$route.query.message
      axios
        .get('/messages/replies/' + message)
        .then((response) => {
          console.log(response.data.replies)
          this.message = response.data
          console.log(this.message.likes)
          this.loading = false;

          this.replies = response.data.replies;
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