<template>


    <div class="container-fluid  flex  flex-row items-center">
        <main-sidebar  />

        <div class="flex flex-col md:flex-row h-screen flex-1 overflow-scroll">
            <div class="profile min-w-full flex flex-col items-center">
                <!-- <message-box class="min-w-full" /> -->
                <div class="flex flex-col flex-1 mx-4 md:mx-16">
                    <h2 class="text-lg font-semibold mb-4">Posts from users you follow</h2>
                    <messages-list :messages="messages">
                    </messages-list>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import MainSidebar from "@/components/MainSidebar.vue";
import MessageBox from "@/components/MessageBox.vue";
import messagesList from "@/components/messagesList.vue";

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