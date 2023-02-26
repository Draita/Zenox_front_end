<template>

  <div class="flex flex-col md:flex-row h-screen">
    <!-- Sidebar Component -->
    <main-sidebar />

    <!-- Main Content -->
    <div class="flex flex-col flex-1 h-full">
      <!-- Text Box -->
      <div class="bg-white border rounded-lg p-4 mx-4 my-8 md:mx-16 md:my-16">
        <h2 class="text-lg font-semibold mb-2">Write a message:</h2>
        <message-box />
      </div>

      <!-- Example Messages -->
      <div class="flex flex-col flex-1 mx-4 md:mx-16">
        <h2 class="text-lg font-semibold mb-4">Example Messages</h2>
        <div v-for="message in exampleMessages" :key="message.id" class="bg-white rounded-lg shadow-lg mb-4">
          <div class="px-4 py-2">
            <p class="text-gray-800 text-base">{{ message.content }}</p>
            <p class="text-gray-500 text-sm mt-2">{{ message.username }} - {{ message.timestamp }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainSidebar from '@/components/mainSidebar.vue';
import MessageBox from '@/components/messageBox.vue';

export default {
  components: {
    MainSidebar,
    MessageBox
  },
  data() {
    return {
      exampleMessages: [
        {
          id: 1,
          username: 'John',
          content: 'Hey, how are you?',
          timestamp: '10:30 AM'
        },
        {
          id: 2,
          username: 'Jane',
          content: 'I\'m doing great, thanks for asking! How about you?',
          timestamp: '10:45 AM'
        }
      ]
    };
  }
};
</script>

<style scoped>
/* Add your Tailwind styles here */
@media(min-width: 768px) {
  .flex-row {
    flex-direction: row;
  }
  .flex-col {
    flex-direction: column;
  }
}
</style>
