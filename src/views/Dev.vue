<template>
    <div class="bg-white rounded-lg shadow-lg mb-4">
      <div @click = "$router.push('profile/?user='+message.user.username)" class="px-4 py-2 flex items-center">
        <img class="w-16 h-16 rounded-full object-cover mb-4 mr-4"
             :src="this.url + '/profile/profile_picture/' + message.user.username"
             alt="Profile picture of {{ message.user.username }}" />
        <div>
          <p class="text-gray-800 text-base font-bold">{{ message.user.username }}</p>
          <p class="text-gray-500 text-sm">{{ getTimeElapsed(message.timestamp) }}</p>
        </div>
      </div>
      <div class="px-4">
        <img v-if="message.media" class="w-full rounded-lg shadow-lg mb-4"
             :src="this.url + '/media/' + message.media"
             alt="Media attached to the message" />
        <p class="text-gray-800 text-base">{{ message.content }}</p>
      </div>
    </div>
  </template>

  <script>
  import config from "@/config";

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
    },
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