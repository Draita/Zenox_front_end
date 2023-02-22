<template>
    <div class="container-fluid">
        <Topbar></Topbar>

        <div class="h-fit  wood-bg flex justify-center">
            <div class="text-white w-[320px] lg:pl-[500px] lg:w-full  grid gap-y-10">
                <div class="font-bold text-[32px] lg:text-left ">ABOUT ME</div>

                <div class="text flex justify-start ">
                    <div class="text-[20px] w-[250px]">Hi I am Thijmen I was born in Nieuwegein in 2001 I love people,
                        web develop, art and hiking.
                        Last summer I have hiked through Croatia and Slovenia, here I have had encounters with bears
                        trying
                        to steal my food and seen many beautiful sites and met so many gorgeous people who wanted to
                        help me
                        and now my dream is to help other people achieve their dreams with my skills.

                    </div>
                </div>


                <div class="grid place-content-center h-[300px] w-[300px] pb-[50px] ">
                    <img src="@/assets/hand.jpg" class="" />
                </div>


            </div>


        </div>
    </div>

    <div class="bg-[#DBDBDB] h-fit  flex justify-center ">

        <div class="grid gap-y-10 w-[320px] pt-[60px] pb-[60px] ">
            <div class="text">
                <div class="text-[20px] w-[250px]">In my freetime I drink special beer with my friends. I love dark
                    brown
                    beer with a good cigar and I photograph the occurrence in a fashionable manner
                </div>
            </div>
            <img src="@/assets/beer.jpg" class="" />
            <img src="@/assets/friends.jpg" class="" />
        </div>



    </div>



</template>

<style>
.wood-bg {
    background: url("@/assets/wood-up.jpg") center center;
    background-size: cover;
}
</style>

<script>
import Topbar from '@/components/Topbar.vue'

export default {
    components: {
        Topbar
    }
}
</script>