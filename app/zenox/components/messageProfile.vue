<template>
    <div class="message pt-[5px] pl-[5px] border-b-[1px] border-l-[1px] border-r-[1px] border-white h-fit flex relative">
        <img class="h-[58px] w-[58px] rounded-full border-white  invert-0 hover:invert transition hover:opacity-50 duration-300 ease-in-out"
            @click = "visitProfile" :src="this.profilePicture">
        <div class="message-content   pl-[17px] text-white">
            <div class="header flex  text-[13px] ">
                <p class=" font-bold w-[50px]">{{ this.message.user.username }}</p>
                <p class=" font-light ml-[30px]">{{ getTimeElapsed(this.message.timestamp) }}</p>
                <div class="absolute top-[11px] right-[12px]  ">
                    <img class="flex w-[16px]" src="@/assets/icons/menu.svg">
                    <div class="h-28 w-28  bg-black border-white border-[1px] absolute left-[-90px]"></div>
                </div>

            </div>
             <p class="pt-[3px]  text-base break-all">{{ this.message.content }}</p>
             <div class="pr-[30px]">
                <img v-if="message.media" class="w-full  border-white border-[1px] mt-[4px] " :src="this.media"
                alt="Media attached to the message" />
             </div>


            <div class="bottom flex items-center font-light pt-[4px] ">

                <button @click="toggleLike" class="flex items-center  hover:opacity-70 w-[86px] h-[23px] ">
                    <div v-if="!this.liked" class="w-[24px] animate-spin">
                        <img class="  w-[40px] mt-[-20px]   align-middle" src="@/assets/icons/like.svg">
                    </div>

                    <div v-else class="w-[40px]  ">
                        <img class=" sticky w-[40px]  mt-[5px] align-middle" src="@/assets/icons/star2.svg">
                    </div>



                    <span class="ml-2" :class="{ 'ml-[-4px]': liked }">{{ this.likeCount }}</span>




                </button>

                <button class="flex items-center    hover:opacity-70   w-[86px]"
                    @click="this.$emit('reply', this.message._id)">
                    <img class="w-[24px]  align-middle" src="@/assets/icons/react.svg">

                    <span class="ml-2  ">1</span>
                </button>

            </div>
        </div>
    </div>
</template>
<script>
import config from "@/config";
import axios from "axios";

export default {
    data() {
        return {
            profilePicture: "@/assets/profile_picture.png",
            likeCount: this.message.likes.length,
            liked: this.message.liked,
            editable: this.message.postedSelf

        }

    },

    props: {
        message: {
            type: Object,
            required: true,


        }
    },
    created() {
        this.profilePicture = config.apiUrl + '/profile/profile_picture/' + this.message.user.username

        console.log(this.message._id)
        this.media = config.apiUrl + '/media/' + this.message.media


    },
    methods: {
        visitProfile() {
            this.$router.push('/profile/?user=' + this.message.user.username)
        },
        getTimeElapsed(timestamp) {
            const now = new Date();
            const posted = new Date(timestamp);
            const elapsed = now.getTime() - posted.getTime();

            const minutes = Math.floor(elapsed / 60000);
            if (minutes < 60) {
                return `${minutes} minutes ago`;
            }

            const hours = Math.floor(minutes / 60);
            if (hours < 24) {
                return `${hours} hours ago`;
            }

            const days = Math.floor(hours / 24);
            return `${days} days ago`;
        },
        async toggleLike() {
            try {
                const response = await axios.post(`/messages/${this.message._id}/like`);
                this.liked = response.data.liked;
                this.likeCount = response.data.likes;
            } catch (error) {
                console.log(error);
            }
        },
    },
}

</script>