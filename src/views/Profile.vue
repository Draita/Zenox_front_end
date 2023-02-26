<template>
  <div class="container-fluid flex  lex-row items-start  ">
    <main-sidebar class="w-10 md:w-32 lg:w-fit"></main-sidebar>

    <div class="w-full  h-screen pl-3 md:pl-24 lg:pl-64 overflow-scroll">
      <div class="profile h-full w-[640px]">
        <div class="h-2/5 ">
          <div class="banner h-2/5 "></div>
          <div class="grid   h-10 w-full items-stretch">
            <div class="">
              <div class="image -mt-16 pl-4">
                <img class="w-32 h-32 rounded-full object-cover mb-4" :src="user.profilePicture" :alt="user.username" />
              </div>
              <div class="pl-5 text-3xl font-medium mb-2 ">{{ user.username }}</div>
              <p class="text-sm text-gray-500 mb-4">{{ user.description }}</p>

            </div>

            <!-- TODO: fix edit button so that it is higher. -->
            <div class="place-self-end">
              <button v-if="editable" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                @click="showModal">Edit Profile</button>

              <div v-else class="div">
                <button v-if="isFollowing" @click="unfollow"
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Unfollow</button>
                <button v-else @click="follow"
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Follow</button>
              </div>
            </div>
          </div>
        </div>
        <message-box  v-show="editable" @messageSend="this.getMessages(this.user.username)" class="w-full" />
        <div class="flex flex-col flex-1 mx-4 md:mx-16">
          <h2 class="text-lg font-semibold mb-4">Posts</h2>
          <messages-list :editable = "editable" :messages="messages">
          </messages-list>
        </div>

      </div>

    </div>
    <change-profile v-if="isModalVisible" @close="hideModal()" @profileUpdated="updateProfile(user.username)" />

  </div>
</template>





<script>
import axios from "axios";
import config from "@/config";
import ChangeProfile from "@/components/ChangeProfile.vue"
import MessageBox from '@/components/MessageBox.vue';
import MainSidebar from "@/components/mainSidebar.vue";
import messagesList from "@/components/messagesList.vue";
import message from "@/components/message.vue";





export default {
  components: {
    ChangeProfile,
    MessageBox,
    MainSidebar,
    messagesList,
    message

  },
  data() {
    return {
      editable: false,
      isFollowing: false,
      messages: [],
      user: {
        username: "",
        description: "",
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

    //retrieve profile picture
    this.setProfilePicture(name)
    this.checkFollow(name);
    this.getMessages(name);
    this.updateProfile(name)

  },
  methods: {
    showModal() {
      this.isModalVisible = true;

    },
    hideModal() {
      this.isModalVisible = false;
    },

    updateProfile(name) {
      axios.get('/profile/get/' + name).then((response) => {
      const profileData = response.data;
      this.user.username = name;
      this.user.description = profileData.description;

      this.isCurrentUserLoggedInUser()
    });

      this.setProfilePicture(name)
    },

    setProfilePicture(username) {
      const today = new Date();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      this.user.profilePicture = config.apiUrl + '/profile/profile_picture/' + username + "?t=" + time;

    },
    follow() {
      axios.get('/follow/go/' + this.user.username).then((response) => {
        this.checkFollow(this.user.username)
      })
    },

    unfollow() {
      axios.get('/follow/un/' + this.user.username).then((response) => {
        this.checkFollow(this.user.username)
      })

    },
    checkFollow(name) {
      axios.get('/follow/isfollowing/' + name).then((response) => {
        this.isFollowing = response.data.isFollowing
      });

    },
    getMessages(name) {
      axios
        .get('/messages/profile/' + name)
        .then((response) => {
          this.messages = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
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


