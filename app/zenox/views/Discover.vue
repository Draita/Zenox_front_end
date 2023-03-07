<template>
  <div class="container-fluid  text-white">
    <div class=" flex flex-col w-full md:justify-center md:flex-row  ">
      <div class="profile flex width-formatting flex-col items-center">
        <div class="flex flex-col flex-1 ">
          <h2 class="text-lg font-semibold mb-4 pl-[20px]">
            Discover posts from other users
          </h2>
          <div class="flex items-center ">
            <input type="text" id="search" label="Search" v-model="search"
              class="border-white border-[0px] text-[12px]   background-text-box bg-black   rounded-none placeholder-white
            no-outline focus:ring-0 focus:border-transparent
            w-full inner-border-[1px] " placeholder="filter by text or and filter or/and by @<username> "
              data-toggle="tooltip" title="To filter by username use '@<username>'" />

          </div>
          <messages-List class="border-t-[1px] mt-[-1px] border-white" :messages="messages" />
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
    document.documentElement.style.overflow = 'auto'

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


      const str = data.query;
      const regex = /(@\w+)/; // matches any word character (\w) after the @ symbol
      const match = str.match(regex);
      var username = match ? match[0].substring(1) : "";
      const message = match ? str.replace(match[0], "").trim() : str.trim();


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
