<template>
    <div class="container-fluid  background h-screen grid place-items-center
    text-[32px]  text-white ">

        <nav class=" grid grid-cols-1  outline-text gap-y-[60px] text-center">
            <img @click="$router.go(-1)" src="@/assets/icons/add.svg" class = "pl-[50px]"/>

            <div @click = "$router.push('/')" class="">HOME</div>
            <div @click = "$router.push('digital-art')" class="">DIGITAL ART</div>
            <div @click = "$router.push('about-me')" class="">ABOUT ME</div>
            <div class="">CONTACT</div>
        </nav>
    </div>


</template>


<style>
.background {
    background: url("@/assets/topbar.jpg") top left;
    background-size: 140px;
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