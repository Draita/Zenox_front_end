<script>
import axios from "axios";

export default {
  name: "EmailPage",
  data() {
    return {
      email: "",
      loading: false
    };
  },

  created() {
    this.getUserEmail();
  },

  methods: {
    async getUserEmail() {
      try {
        const response = await axios.get('http://localhost:3000/user/email');
        this.email = response.data;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<template>
  <div>
    <h1>Your email is: {{ email }}</h1>
  </div>
</template>