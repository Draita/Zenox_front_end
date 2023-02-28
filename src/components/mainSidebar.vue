<template>
  <!-- TODO: MAKE TEXT DISAPEAR WHEN the preview becomes too small -->
  <aside id="logo-sidebar" class=" w-10 md:w-fit h-screen transition-transform-translate-x-full sm:translate-x-0"
    aria-label="Sidebar">
    <div class="h-full pl-2 md:pl-5 md:pr-5 overflow-y-auto bg-gray-50 dark:bg-gray-800 pt-5">

      <ul class="space-y-4">

        <li>
          <a @click="$router.push('/feed')"
            class="flex items-center text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg aria-hidden="true" width="24px" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill="#636363" d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
              <path fill="#636363" d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
            </svg>
            <span class="ml-3 text">Feed</span>
          </a>
        </li>
        <li>
          <a @click="$router.push('/discover')"
            class="flex items-center text-base font-normal text-gray-900  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg width="24px" fill="none" stroke="#636363" stroke-width="1.5" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418">
              </path>

            </svg>
            <span class="ml-3 text">Discover</span>
          </a>
        </li>

        <li>
          <a
            class="flex items-center text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg aria-hidden="true"
              class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z">
              </path>
              <path
                d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z">
              </path>
            </svg>
            <span class="flex-1 ml-3 whitespace-nowrap text">Messages</span>
            <span
              class="invisible md:visible inline-flex  items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
              3</span>
          </a>
        </li>
        <li>
          <a @click=profilePage()
            class="flex items-center text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg aria-hidden="true" width="24px"
              class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd">
              </path>
            </svg>
            <span class="flex-1 ml-3 whitespace-nowrap text">Profile</span>
          </a>
        </li>
        <li>

          <a @click=logout()
            class="flex  items-center text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg width="24px" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true">
              <path fill="#636363" clip-rule="evenodd" fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h4.59l-2.1 1.95a.75.75 0 001.02 1.1l3.5-3.25a.75.75 0 000-1.1l-3.5-3.25a.75.75 0 10-1.02 1.1l2.1 1.95H6.75z">
              </path>
            </svg>
            <span class="flex-1 ml-3 whitespace-nowrap text">Logout</span>
          </a>
        </li>


      </ul>
    </div>
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
            this.$router.push('/profile/?user=' + response.data).then(() => {
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
</style>