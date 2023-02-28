<template>
  <loading v-if = "!showHome" />

  <div v-else = "showHome" class="h-screen overflow-hidden">
    <div class="bg-black ">
      <nav class="
              container
              px-6
              py-8
              mx-auto
              md:flex md:justify-between md:items-center
            ">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <!-- TODO: ADD LOGO -->
            <img src="@/assets/icons/home.png" class="h-8 mr-2">
            <!-- <h1 class="text-white font-bold text-lg">Zenox</h1> -->
          </div>

          <!-- Mobile menu button -->
          <div @click="toggleNav" class="flex md:hidden">
            <button type="button" class="
                    text-gray-100
                    hover:text-gray-400
                    focus:outline-none focus:text-gray-400
                  ">
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                </path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul :class="showMenu ? 'flex' : 'hidden'" class="
                flex-col
                mt-8
                space-y-4
                md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0
              ">
          <li @click="$router.push('/login')"
            class="bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border-2 border-white hover:border-transparent rounded">
            Login</li>
          <li @click="$router.push('/register')"
            class="bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border-2 border-white hover:border-transparent rounded ">Register</li>
        </ul>
      </nav>
    </div>

    <body class="gradient-1 min-h-full">
      <div class="w-full text-center pt-16 gradient-2">
        <div class="name pt-16   font-bold text-6xl lg:text-8xl ">ZENOX</div>
        <div class="text-2xl lg:text-2xl font-semibold pt-8"> MODERN SOCIAL MEDIA</div>

      </div>


    </body>

  </div>
</template>

<script>
import { ref } from 'vue';
import loading from "@/components/loading.vue";


import axios from "axios";

export default {
  components: {
    loading
  },

  data(){
    return{
      showHome: false
    }
  },
  setup() {
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, toggleNav };
  },

 async mounted() {
    axios.get('/checklogin')
      .then((response) => {
        if (response.status == 200) {
          this.$router.push('/profile/?user='+response.data)
        }
      })
      .catch((error) => {
        this.showHome = true
      });

  }
}
</script>

<style>
.gradient-1 {
  background: rgb(241, 241, 241);
  background: linear-gradient(0deg, rgba(241, 241, 241, 1) 27%, rgba(0, 0, 0, 1) 100%);

}
.gradient-2 {
  font-size: 72px;
  background: -webkit-linear-gradient(90deg, rgba(241, 241, 241, 1) 50%, rgba(0, 0, 0, 1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>

