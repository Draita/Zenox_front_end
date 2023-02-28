<template>
       <div class="bottom grid  grid-cols-2 gap-4 mt-4">
          <div class="flex items-center ">
            <button  :class="{ 'text-red-500': liked, 'text-black': !liked }" class="flex items-center text-gray-500 hover:text-red-300 mr-4" @click="toggleLike">
              <svg xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z">
                </path>
              </svg>
              <span  class="ml-2">{{ likeCount }}</span>
            </button>
          </div>
          <div v-show  = this.allowReplying class="flex items-center ">
            <button class="flex items-center text-gray-500 hover:text-blue-400 mr-4" @click="this.$emit('reply')">
              <svg xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path clip-rule="evenodd" fill-rule="evenodd" d="M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902 1.168.188 2.352.327 3.55.414.28.02.521.18.642.413l1.713 3.293a.75.75 0 001.33 0l1.713-3.293a.783.783 0 01.642-.413 41.102 41.102 0 003.55-.414c1.437-.231 2.43-1.49 2.43-2.902V5.426c0-1.413-.993-2.67-2.43-2.902A41.289 41.289 0 0010 2zM6.75 6a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 2.5a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5z"></path>
              </svg>
              <span class="ml-2 ">{{ messageCount }}</span>
            </button>
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
            required: true,

        },
        allowReplying: {
          type:Boolean,
        }

    },
    data() {
        return {
            liked: false,
            likeCount: this.message.likes.length,
            messageCount: 3,
            replied: true,
        }
    },
    created() {
        //set like to compon input
        try {
            this.liked = this.message.liked
        } catch {
            this.liked = false;
        }
        this.messageCount = this.message.replies.length
    },
    methods:{
        async toggleLike() {
        try {
          const response = await axios.post(`/messages/${this.message._id}/like`);
          this.liked = response.data.liked;
          this.likeCount = response.data.likes;
        } catch (error) {
          console.log(error);
        }
      },
    }
}


</script>