<script>
import axios from "axios";

export default {

  data(){
    return{
      showHome: false
    }
  },

  mounted() {


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

<template >

  <div v-if="showHome" class="container-fluid">
  <!-- Top bar -->
  <div  class="bg-gray-900 px-4 py-2 flex justify-between items-center">
      <div class="flex items-center">
     <!-- TODO: ADD LOGO -->
        <img src="@/assets/icons/home.png" class="h-8 mr-2">
        <h1 class="text-white font-bold text-lg">Zenox</h1>
      </div>
      <div class="hidden md:flex items-center">
        <button class="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-full mr-2"
          @click="$router.push('/register')">Register</button>
        <button class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-full"
          @click="$router.push('/login')">Login</button>
      </div>
      <div class="md:hidden">
        <button class="text-white hover:text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Main content -->
    <div class="container mx-auto py-8">
      <div class="flex flex-wrap -mx-4">
        <!-- Card 1 -->
        <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div class="bg-white rounded-lg shadow-lg">
            <img src="@/assets/wood-up.jpg" class="w-full h-48 object-cover rounded-t-lg">
            <div class="p-4">
              <h2 class="text-gray-800 text-lg font-semibold mb-2">Card Title 1</h2>
              <p class="text-gray-700 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate, ex
                eu placerat semper, lacus metus mattis ex, vitae consequat turpis nisl id arcu. Proin eu ultricies orci.
              </p>
            </div>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div class="bg-white rounded-lg shadow-lg">
            <img src="@/assets/wood.jpg" class="w-full h-48 object-cover rounded-t-lg">
            <div class="p-4">
              <h2 class="text-gray-800 text-lg font-semibold mb-2">Card Title 2</h2>
              <p class="text-gray-700 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate, ex
                eu placerat semper, lacus metus mattis ex, vitae consequat turpis nisl id arcu. Proin eu ultricies orci.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>