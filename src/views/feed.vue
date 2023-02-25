<template>
    <div class="container-fluid  flex  flex-row items-center">
        <main-sidebar />
        <div class="flex flex-col md:flex-row h-screen flex-1">
            <div class="profile min-w-full flex flex-col items-center">
                <message-box class="min-w-full" />
                <div class="flex flex-col flex-1 mx-4 md:mx-16">
                    <h2 class="text-lg font-semibold mb-4">Example Messages</h2>
                    <message v-for="message in messages" :key="message.id" :message="message" :url="this.Url" />
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import MainSidebar from "@/components/MainSidebar.vue";
import MessageBox from "@/components/MessageBox.vue";
import Message from "@/components/Message.vue";
import axios from "axios";
import config from "@/config";



export default {
    components: {
        MainSidebar,
        MessageBox,
        Message
    },
    data() {
        return {
            messages: [],
            Url: config.apiUrl,
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
    methods: {
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
    }
};
</script>