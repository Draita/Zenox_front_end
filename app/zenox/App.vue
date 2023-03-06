<script setup >
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup



</script>

<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet">
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <!-- <Homepage></Homepage> -->

  <MainSidebar class="z-30"></MainSidebar>

  <div class="pl-[27px] md:pl-[120px]">
    <div class="w-full bg-white h-[30px] text-[12px] pt-1  text-sm font-semibold text-start">
      <div class="flex justify-start items-start content-start">
        <p class="absolute left-7 md:left-[125px] ">WELCOME TO ZENOX</p>
      </div>
    </div>
    <RouterView></RouterView>


  </div>
</template>

<script>
import MainSidebar from "@/zenox/components/mainSidebar.vue";

export default {
  components: {
    MainSidebar
  },
}

</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;


.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
