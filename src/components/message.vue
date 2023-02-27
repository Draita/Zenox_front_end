<template>
  <div v-show="show" class="bg-white rounded-lg shadow-lg mb-4 relative" @mouseover="showDeleteButton = true"
    @mouseleave="showDeleteButton = false">
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

    <div @click="this.visitProfile(aMessage.user.username)" class="px-4 py-2  w-fit  flex items-center">
      <img class="w-16 h-16 rounded-full object-cover mb-4 mr-4"
        :src="this.url + '/profile/profile_picture/' + aMessage.user.username"
        alt="Profile picture of {{ aMessage.user.username }}" />
      <div>
        <p class="text-gray-800 text-base font-bold">{{ aMessage.user.username }}</p>
        <p class="text-gray-500 text-sm">{{ getTimeElapsed(aMessage.timestamp) }}</p>
      </div>
    </div>
    <div class="px-4">
      <img v-if="message.media" class="w-full rounded-lg shadow-lg mb-4" :src="this.apiUrl + '/media/' + message.media"
        alt="Media attached to the message" />
      <p class="text-gray-800 text-base">{{ aMessage.content }}</p>

      <div class="bottom grid  grid-cols-2 gap-4 mt-4">
        <div class="flex items-center ">
          <button class="flex items-center text-gray-500 hover:text-red-500 mr-4" @click="toggleLike">
            <svg :class="{ 'text-red-500': liked, 'text-black': !liked }" xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z">
              </path>
            </svg>
            <span :class="{ 'text-red-500': liked, 'text-black': !liked }" class="ml-2">{{ likeCount }}</span>
          </button>
        </div>
        <div class="flex items-center ">
          <button class="flex items-center text-gray-500 hover:text-red-500 mr-4" @click="replyToMessage">
            <svg :class="{ 'text-blue-400': replied, 'text-black': !replied }" xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path clip-rule="evenodd" fill-rule="evenodd" d="M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902 1.168.188 2.352.327 3.55.414.28.02.521.18.642.413l1.713 3.293a.75.75 0 001.33 0l1.713-3.293a.783.783 0 01.642-.413 41.102 41.102 0 003.55-.414c1.437-.231 2.43-1.49 2.43-2.902V5.426c0-1.413-.993-2.67-2.43-2.902A41.289 41.289 0 0010 2zM6.75 6a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 2.5a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5z"></path>
            </svg>
            <span :class="{ 'text-blue-400': replied, 'text-black': !replied }" class="ml-2">{{ messageCount }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>


</template>


<script>
import config from "@/config";
import axios from "axios";


export default {
  props: {
    message: {
      type: Object,
      required: true
    },
    url: {
      type: String,
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
      apiUrl: this.url,
      liked: false,
      likeCount: this.message.likes.length,
      messageCount: 3,
      nameOfUser: this.username,
      showDeleteButton: false,
      show: true,

      isModalVisible: false,
    };
  },
  mounted() {

    //check if the user liked the post itself
    try {
      if (this.message.likes[0].username == this.nameOfUser) {
        this.liked = true;
      }
    } catch (error) {
    }

    //set like to server input
    try {
      this.liked = this.message.liked
    } catch {
      this.liked = false;
    }





  },
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
    async toggleLike() {
      try {
        const response = await axios.post(`/messages/${this.message._id}/like`);
        this.liked = response.data.liked;
        this.likeCount = response.data.likes;
      } catch (error) {
        console.log(error);
      }
    },
    deleteMessage() {


      axios.delete('/messages/' + this.aMessage._id)
        .then(response => {
          this.show = false;
        })


    },
    visitProfile(name) {
      if (this.allowVistingProfile) { this.$router.push('profile/?user=' + name) }


    },
    replyToMessage(){
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