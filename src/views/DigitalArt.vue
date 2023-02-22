<template>
    <div class="container-fluid h-fit background-digital-art
    text-white text-[20px]  ">
        <Topbar></Topbar>
        <div class="content flex justify-center">
            <div class="w-[330px] grid gap-y-8">
                <a class="pt-9 w-[240px]" > For my art I try to get inspired by philosophy such as: Buddhism, Indian and Greek philosophy. </a>
                <img src="@/assets/falling-from-the-sky.jpg" class="" />
                <img src="@/assets/yes_1080.png" class="" />

                <a class="pt-9 w-[240px]" >These birds flew far and wide around this rubbish heap which I found in inland Croatia, it was truly memorizing.</a>
                <img src="@/assets/brids.jpg" class="" />
                <img src="@/assets/wood.jpg" class="" />


                <a class="pt-9 w-[240px]" >an ominous digital painting of travelers through a desert</a>
                <img src="@/assets/desert2_16_9_old 1.jpg" class="" />






            </div>
        </div>


    </div>
</template>

<script>
import Topbar from '@/components/Topbar.vue'

export default {
    components: {
        Topbar
    }
}
</script>

<style>
.background-digital-art {
    background: url("@/assets/grain2.jpg") top left;
    background-repeat: repeat;

}
</style>