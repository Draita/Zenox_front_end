<template>
    <message v-for="message in messages" :message="message" :editable="editable" :key="message._id"
        :username="this.username" :allowVistingProfile = "this.allowVistingProfile" :url="this.Url" />
</template>

<script>
import config from "@/config";
import Message from "@/components/message.vue";
import axios from "axios";


export default {
    components: {
        Message,
    },
    props: {
        messages: {
            type: Object,
            required: true
        },

        editable:{
            type: Boolean,
            default: false
        },
        allowVistingProfile:{
            type: Boolean,
            default: true
        }
    },

    data() {
        return {
            Url: config.apiUrl,
            username: ""

        };
    },
    mounted() {
        axios
            .get('/profile/username')
            .then((response) => {
                this.username = response.data;
            })
    },
    methods: {


    }
}
</script>