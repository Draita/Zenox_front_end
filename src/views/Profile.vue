<template>
  <div class="container-fluid  flex  flex-row items-center  ">
    <main-sidebar/>

    <div class="profile  w-full  flex flex-col items-center  ">
      <div class="max-w-xl text-center">
      <img class="w-32 h-32 rounded-full object-cover mb-4" :src="user.profilePicture" :alt="user.username" />
      <h1 class="text-3xl font-bold mb-2">{{ user.username }}</h1>
      <p class="text-sm text-gray-500 mb-4">{{ user.description }}</p>
    </div>

    <div class="w-full max-w-2xl">
      <h2 class="text-xl font-bold mb-4">Example Messages</h2>
      <div v-for="message in user.messages" :key="message.id" class="bg-white rounded-lg shadow-lg mb-4">
        <div class="px-4 py-2">
          <p class="text-gray-800 text-base">{{ message.content }}</p>
          <p class="text-gray-500 text-sm mt-2">{{ message.timestamp }}</p>
        </div>
      </div>
    </div>

    <message-box class="w-full max-w-2xl"></message-box>

    <change-profile v-if="isModalVisible" @close="hideModal()" @profilePictureChanged="updateProfile(user.username)" />
    </div>

  </div>
</template>





<script>
import axios from "axios";
import config from "@/config";
import ChangeProfile from "@/components/ChangeProfile.vue"
import MessageBox from '@/components/MessageBox.vue';
import MainSidebar from "@/components/mainSidebar.vue";



export default {
  components: {
    ChangeProfile,
    MessageBox,
    MainSidebar
  },
  data() {
    return {
      editable: false,
      user: {
        username: "",
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
      isModalVisible: false,
    };
  },
  mounted() {

    const name = this.$route.query.user;
    axios.get('/profile/get/' + name).then((response) => {
      const profileData = response.data;
      this.user.username = name;
      this.user.description = profileData.description;

      this.isCurrentUserLoggedInUser()
    });
    //retrieve profile picture
    this.setProfilePicture(name)


  },
  methods: {
    showModal() {
      this.isModalVisible = true;

    },
    hideModal() {
      this.isModalVisible = false;
    },

    updateProfile(name) {

      this.setProfilePicture(name)
    },

    setProfilePicture(username) {
      const today = new Date();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      this.user.profilePicture = config.apiUrl + '/profile/profile_picture/' + username + "?t=" + time;

    },

    isCurrentUserLoggedInUser() {
      axios.get('checklogin').then(res => {
        if (res.data == this.user.username) {
          this.editable = true

        }
      });

    }
  },
};
</script>


