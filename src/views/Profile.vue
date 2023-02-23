<template>
    <div class="flex flex-col items-center pt-10">
      <!-- User Profile Picture -->
      <img class="w-32 h-32 rounded-full object-cover mb-4" :src="user.profilePicture" :alt="user.username" />

      <!-- User Profile Info -->
      <div class="max-w-xl text-center">
        <h1 class="text-3xl font-bold mb-2">{{ user.username }}</h1>
        <p class="text-sm text-gray-500 mb-4">{{ user.description }}</p>
      </div>

      <!-- Example Messages -->
      <div class="w-full max-w-2xl">
        <h2 class="text-xl font-bold mb-4">Example Messages</h2>
        <div v-for="message in user.messages" :key="message.id" class="bg-white rounded-lg shadow-lg mb-4">
          <div class="px-4 py-2">
            <p class="text-gray-800 text-base">{{ message.content }}</p>
            <p class="text-gray-500 text-sm mt-2">{{ message.timestamp }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        user: {
          username: "John Doe",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          profilePicture: "https://via.placeholder.com/150",
          messages: [
            {
              id: 1,
              content: "Example message 1",
              timestamp: "2022-02-10 10:00:00",
            },
            {
              id: 2,
              content: "Example message 2",
              timestamp: "2022-02-09 14:30:00",
            },
          ],
        },
      };
    },
  };
  </script>