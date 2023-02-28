<template>
  <div @click="this.visitProfile(aMessage.user.username)" class="px-4 py-2  w-fit  flex items-center">
    <img class="w-16 h-16 rounded-full object-cover mb-4 mr-4 hover:opacity-50" :src="this.profilePicture"
      alt="Profile picture of {{ aMessage.user.username }}" />
    <div>
      <p class="text-gray-800 text-base font-bold">{{ this.message.user.username }}</p>
      <p class="text-gray-500 text-sm">{{ getTimeElapsed(aMessage.timestamp) }}</p>
    </div>
  </div>
  <div class="px-4">
    <img v-if="message.media" class="w-full rounded-lg mb-4" :src="this.media" alt="Media attached to the message" />
    <p class="text-gray-800 text-base break-all">{{ aMessage.content }}</p>


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
    username: {
      type: String,
      required: true
    },
    editable: {
      type: Boolean,
      required: true
    },
    allowVistingProfile: {
      type: Boolean,
      required: true
    },
    replied: {
      type: Boolean,
      default: true,
    }
  },
  data() {
    return {
      aMessage: this.message,
      apiUrl: 'https://zenox-back-end.azurewebsites.net',
      messageCount: 3,
      nameOfUser: this.username,
      showDeleteButton: true,
      show: true,
      profilePicture: "",
      media: "",

      isModalVisible: false,
    };
  },
  created() {
    try {
      this.profilePicture = config.apiUrl + '/profile/profile_picture/' + this.message.user.username
      this.media = config.apiUrl + '/media/' + this.message.media

    }catch{

    }



  },

  //check if the user liked the post itself






  methods: {
    getTimeElapsed(timestamp) {
      const now = new Date();
      const posted = new Date(timestamp);
      const elapsed = now.getTime() - posted.getTime();

      const minutes = Math.floor(elapsed / 60000);
      if (minutes < 60) {
        return `${minutes} minutes ago`;
      }

      const hours = Math.floor(minutes / 60);
      if (hours < 24) {
        return `${hours} hours ago`;
      }

      const days = Math.floor(hours / 24);
      return `${days} days ago`;
    },

    deleteMessage() {

      axios.delete('/messages/' + this.aMessage._id)
        .then(response => {
          this.show = false;
        })


    },
    visitProfile(name) {
      if (this.allowVistingProfile) { this.$router.push('/profile/?user=' + name) }
    },
    replyToMessage() {
      this.$emit('reply', this.aMessage.user._id);

    }
  }
};
</script>
<style>
/* Optional: customize the styling to your liking */
img {
  max-height: 400px;
  object-fit: contain;
}

.bg-white {
  background-color: #f2f2f2;
}
</style>