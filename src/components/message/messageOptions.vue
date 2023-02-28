<template>
       <div v-show="editable" @click="deleteMessage">
      <button v-show="showDeleteButton"
        class="absolute top-0 right-0 m-2 text-gray-500 hover:text-red-500 focus:outline-none" @click="deleteMessage">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
          <path clip-rule="evenodd" fill-rule="evenodd"
            d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z">
          </path>
        </svg>
      </button>
    </div>

</template>

<script>
import config from "@/config";
import axios from "axios";
import messageBottom from "@/components/message/messageBottom.vue";





export default {
  components: {
    messageBottom
  },
  props: {
    message: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      aMessage: this.message,
      showDeleteButton: true,
      show: true,
      profilePicture: "",
      media: "",

      isModalVisible: false,
    };
  },
  created(){
    this.profilePicture = config.apiUrl + '/profile/profile_picture/' + this.message.user.username
    this.media = config.apiUrl + '/media/' + this.message.media
  },

    //check if the user liked the post itself






  methods: {
    deleteMessage() {

      axios.delete('/messages/' + this.aMessage._id)
        .then(response => {
            this.$emit('hide')
        })


    }
  }
};
</script>