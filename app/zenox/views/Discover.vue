<template>

    <div class="container-fluid flex flex-row items-center text-white">
      <div class=" flex flex-col w-full md:justify-center md:flex-row h-screen flex-1 overflow-scroll">
        <div class="profile flex md:w-[600px] flex-col items-center">
          <div class="flex flex-col flex-1 mx-4 md:mx-16">
            <h2 class="text-lg font-semibold mb-4">
              Discover posts from other users
            </h2>
            <div class="flex items-center mb-4">
              <label for="search" class="mr-2">Filter by text:</label>
              <input
                type="text"
                id="search"
                label="Search"
                v-model="search"
                class="border border-gray-300 rounded-lg p-2 w-64"
                placeholder="Enter search text"
                data-toggle="tooltip"
                title="To filter by username use '@<username>'"
              />
            </div>
            <messages-List class = "border-t-[1px] border-white" :messages="messages" />
          </div>
        </div>
      </div>
    </div>
  </template>

<script>

import MessageBox from "@/zenox/components/messageBox.vue";
import messagesList from "@/zenox/components/messagesList.vue";

import axios from "axios";

export default {
  components: {
    MessageBox,
    messagesList,
  },
  data() {
    return {
      messages: [],
      filterContent: "",
      filterUsername: "",
      search: "",
      awaitingSearch: false,
    };
  },
  mounted() {
    axios.post("/messages/discover", {}).then((response) => {
      this.messages = response.data;
    });
  },
  watch: {
    search: function (val) {
      if (!this.awaitingSearch) {
        setTimeout(() => {
          this.filter({ query: this.search });
          this.awaitingSearch = false;
        }, 1500); // 1,5 sec delay
      }
      this.awaitingSearch = true;
    },
  },
  methods: {
    filter(data) {
      console.log();

      const str = data.query;
      const regex = /(@\w+)/; // matches any word character (\w) after the @ symbol
      const match = str.match(regex);
      var username = match ? match[0].substring(1) : "";
      const message = match ? str.replace(match[0], "").trim() : str.trim();
      console.log("Username:", username); // "bob"
      console.log("Message:", message); // "hello I am here"

      axios.post("/messages/discover", {
        username,
        filter: message
      }).then((response) => {
        this.messages = response.data;
    });
    },
  },
};
</script>
