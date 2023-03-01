<template>


  <div  class="container-fluid select-none font-inter flex overflow-hidden	">
    <div class="absolute inset-0 bg-black w-full text-center font-medium ">
      <topBar />

      <!-- SIGNIN -->
      <div class="w-full grid place-items-end p-5  ">
        <div class="group">
          <button @click="topButtonClick"
            class="z-50 lg:mr-[50px] lg:mt-[10px] bg-white text-black lg:h-9 lg:w-[95px] border-0 transition  ease-in-out
                             group-hover:bg-black group-hover:text-white h-8 w-20 text-[14px] lg:text-[20px] text-white rounded-full"
                             :class="{ 'text-red': this.showHome }">
            {{this.buttonText}}   </button>

          <!-- MODAL -->
          <!-- <div v-show="this.hover"
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
          </div> -->

        </div>

      </div>
      <Transition  :duration="1500" name="nested" appear>
        <div v-if="this.showHome">
          <home-content/>
        </div>

        <div v-else>
          <registerContent></registerContent>

        </div>

      </Transition>
    </div>



  </div>
</template>



<script>
import loading from "@/components/loading.vue";
import homeContent from "@/landingPage/components/homeContent.vue"

import topBar from "@/landingPage/components/topBar.vue"
import registerContent from "@/landingPage/components/registerContent.vue"



import axios from "axios";

export default {
  components: {
    loading,
    topBar,
    homeContent,
    registerContent,
  },

  data() {
    return {
      showHome: true,
      hover: false,
      buttonText: "SIGN IN"
    }
  },
  methods: {
     topButtonClick(){
      if (this.showHome) {
        this.showHome = false;
        this.buttonText = "CLOSE"

      } else{
        this.showHome = true;
        this.buttonText = "SIGN IN"

      }



    },
  },


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

.nested-enter-active .logo,
.nested-leave-active .logo {
  transition: all 1s ease-in-out;
}

.nested-enter-from .logo,
.nested-leave-to .logo {
  transform: translateX(-100%);

}


.nested-enter-active .bottom-text ,
.nested-leave-active .bottom-text  {
  transition: all 800ms ease-in-out;
}

.nested-enter-from .bottom-text ,
.nested-leave-to .bottom-text  {
  transform: translateY(700px);
}

.nested-enter-active .register,
.nested-leave-active .register {
  transition: all 1500ms ease-in-out;
}

.nested-enter-from .register,
.nested-leave-to .register {
  transform: translateY(-140vh);

}

</style>
