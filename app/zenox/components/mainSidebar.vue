<template>
  <aside
    class="fixed top-0 left-0 h-screen sidebar bg-white w-[28px] md:w-[120px] flex flex-col  items-center md:items-start text-[10px] ">



    <img @click="$router.push('/')" class=" w-[28px] mt-[4px] pl-[2px] md:pl-[5px]  pb-[19px]  align-middle" src="@/assets/icons/star.svg">

    <a @click="$router.push('/feed')" class="bg-white hover:bg-black hover:text-white flex items-center text-base font-normal text-gray-900
                         w-full pl-[2px] md:pl-[5px] pt-[19px] pb-[19px]">
      <img class="w-[24px]  align-middle" src="@/assets/icons/home.svg">

      <span class="ml-3 text">HOME</span>
    </a>

    <a @click="$router.push('/discover')" class="bg-white hover:bg-black hover:text-white flex items-center text-base font-normal text-gray-900
                     w-full pl-[2px] md:pl-[5px] pt-[19px] pb-[19px] ">
      <img class="w-[24px]  align-middle " src="@/assets/icons/discover.svg">

      <span class="ml-3 text">DISCOVER</span>
    </a>
    <!-- TODO: ADD MESSAGER -->
    <!-- <a @click="$router.push('/message')" class="bg-white hover:bg-black hover:text-white flex items-center text-base font-normal text-gray-900
                     w-full  pl-[2px] md:pl-[5px] pt-[19px] pb-[19px]">
      <img class="w-[24px]  align-middle" src="@/assets/icons/message.svg">

      <span class="ml-3 text">MESSAGE</span>
    </a> -->

    <a @click="profilePage" class="bg-white hover:bg-black hover:text-white flex items-center text-base font-normal text-gray-900
                     w-full pl-[2px] md:pl-[5px] pt-[19px] pb-[19px]">
      <img class="w-[24px]  align-middle" src="@/assets/icons/profile.svg">

      <span class="ml-3 text">PROFILE</span>
    </a>

    <a @click="logout" class=" fixed bottom-0 w-[28px] items-center md:items-start md:w-[120px]   bg-white hover:bg-black hover:text-white flex  text-base font-normal text-gray-900
                      pl-[2px] md:pl-[5px] pt-[19px] pb-[19px]">
      <img class="w-[24px]  align-middle" src="@/assets/icons/logout.svg">

      <span class="ml-3 text">LOGOUT</span>
    </a>


  </aside>
</template>

<script>
import axios from "axios";

export default {
  name: "Sidebar",
  methods: {
    profilePage() {

      axios.get('/checklogin')
        .then((response) => {

          if (response.status == 200) {
            this.$router.push('/profile?user=' + response.data).then(() => {
              console.log('Updated route', this.$route)
              this.$emit('refreshProfile')
            })



          }
        })
    },
    logout() {
      // document.cookie = token + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      // this.$cookie.set('demomy', 'Welcome ro Pakainfo.com', 1);


      axios.get('/logout').then((response) => {
        console.log(response)
        this.$router.push('/')
      });
    },


  }
};
</script>

<style>
@media only screen and (max-width: 767px) {
  .text {
    display: none;
  }
}

.text {
  font-size: 12px;
}

.menu-item {
  padding-bottom: 5px;
  padding-top: 5px;
}
</style>