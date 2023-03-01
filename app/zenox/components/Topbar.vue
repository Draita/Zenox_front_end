<script>
export default {


}


</script>
<template>
  <nav class="topbar h-16 lg:h-20">
    <div class="container flex flex-wrap items-center justify-between mx-auto">

      <img @click = "$router.push('/')"  src="@/assets/icons/home.png" class = "h-16 w-16 lg:h-20 lg:w-20 ml-3 "/>

      <img @click = "$router.push('/menu')" src="@/assets/icons/hambergermenu.png" class = "h-16 w-16 lg:h-20 lg:w-20 mr-6 md:hidden"/>
      <div class="items text-white flex flex-nowrap space-x-10
      outline-text text-[25px] hidden md:inline-flex">

            <div @click = "$router.push('digital-art')" class="">DIGITAL ART</div>
            <div @click = "$router.push('about-me')" class="">ABOUT ME</div>
            <div class="">CONTACT</div>
      </div>



    </div>
  </nav>

</template>
<style>
.topbar {
  background: url("@/assets/topbar.jpg") top left;
  background-size: 30px 30px;
  background-repeat: repeat;

}
.outline-text {
  color: white;
  text-shadow:
   -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
     1px 1px 0 #000;
}

</style>