<template>


<div class=" flex flex-col w-full md:justify-center md:flex-row  text-white">
      <div class="profile flex width-formatting flex-col items-center">
            <div class="profile min-w-full flex flex-col items-center">
                <!-- <message-box class="min-w-full" /> -->
                <div class="flex flex-col flex-1  width-formatting">
                    <h2 class="text-lg font-semibold mb-4 pl-[20px]">Post from users you follow</h2>
                    <messages-list class = "border-t-[1px] border-white" :messages="messages">
                    </messages-list>
                </div>
            </div>
        </div>
    </div>
</template>




<script>
import MainSidebar from "@/zenox/components/mainSidebar.vue";
import MessageBox from "@/zenox/components/messageBox.vue";
import messagesList from "@/zenox/components/messagesList.vue";

import axios from "axios";




export default {
    components: {
        MainSidebar,
        MessageBox,
        messagesList
    },
    data() {
        return {
            messages: [],

        };
    },
    mounted() {
        axios
            .get('/messages/feed')
            .then((response) => {
                this.messages = response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    },
}
</script>