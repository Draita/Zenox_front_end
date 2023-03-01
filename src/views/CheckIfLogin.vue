<template>
  <loading v-if="!showHome" />

  <div v-else class="container-fluid select-none font-inter flex  overflow-hidden	">
    <div class="h-screen bg-black w-full text-center font-medium ">

      <div class="w-full bg-white h-8 pt-1 lg:h-12 lg:p-2 lg:text-xl text-sm font-semibold text-center">
        <div class="flex justify-center items-center content-center">
          <img class="lg:w-[28px] w-5 align-middle	" src="@/assets/icons/star.svg">
          <p>Register now and become a member of ZENOX</p>
        </div>

      </div>

      <!-- SIGNIN -->
      <div class="w-full grid place-items-end p-5  ">
        <div class="group" >
          <button  @mouseover="this.hover = true" @mouseleave="this.hover = false"
          class="lg:mr-[50px] lg:mt-[10px] bg-[#8793FF] lg:h-9 lg:w-[95px] border-0 transition  ease-in-out
                       group-hover:bg-white group-hover:text-black h-8 w-20 text-[14px] lg:text-[20px] text-white rounded-full">
            SIGN IN</button>

          <!-- MODAL -->
          <div v-show="this.hover"
          class="modal select-none absolute md:visible right-3 lg:right-10 top-[90px] lg:top-[110px]"
          @mouseover="this.hover = true" @mouseleave="this.hover = false">
            <div class="triangle-up ml-[190px]   lg:ml-[150px] group-hover:visible "></div>
            <div class="w-[250px] h-[200px] modal-gradient  border-white border-[3px]">
              <div class="h-1/2 flex items-center justify-center">
                <div @click="$router.push('/register')" class="border-black border-[1px]  h-[40px] text-center pt-2 pb-2 w-[240px] text-black
                          hover:text-white hover:bg-black transition">
                  CREATE MY ZENOX ACCOUNT</div>
              </div>
              <div @click="$router.push('/login')" class="h-1/2 flex items-center justify-center">
                <div class="border-white border-[1px] text-white h-[40px] text-center pt-2 pb-2 w-[240px]
                          hover:text-black hover:bg-white transition">
                  LOGIN</div>
              </div>

            </div>
          </div>

        </div>

      </div>
      <div class="lg:pr-[600px]">
        <div
          class="logo w-full flex h-[166px] lg:h-[230px] justify-center items-center bg-white rounded-tr-full rounded-br-full mt-[83px] ">
          <p class="text-[70px] lg:text-[120px] pr-12">ZENOX</p>
        </div>
      </div>

      <p
        class="w-10 mt-[90px] text-[55px] lg:text-[80px] lg:leading-[100px] leading-[60px] font-bold text-white items-start text-start pl-3">
        Alternative <br>
        Social<br>
        Media<br>
      </p>

      <div class="absolute bottom-0 right-0 whitespace-pre-wrap ">
        <div
          class="bg-white rounded-tl-[70px] lg:rounded-tl-[90px] w-[220px] lg:w-[300px]  h-[150px] lg:h-[200px] flex justify-center items-center font-semibold    ">
          <p class="text-black w-[200px] lg:text-[15px] text-[12px] pt-5">
            the social media app that helps you connect with like-minded individuals and discover new ways to
            cultivate mindfulness, wellness, and happiness in your life.
          </p>
        </div>

      </div>

    </div>

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

  data() {
    return {
      showHome: false,
      hover: false
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
          this.$router.push('/profile/?user=' + response.data)
        }
      })
      .catch((error) => {
        this.showHome = true
      });

  }
}
</script>


<style>
.modal-gradient {
  background: rgb(255, 255, 255);
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 50%, rgba(22, 22, 22, 1) 50%);
}

.triangle-up {
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 25px solid white;
}
</style>
