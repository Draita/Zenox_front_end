<template>
    <message v-for="message in messages" :message="message" :editable="editable" :key="message._id"
        :username="this.username" :url="this.Url" />
</template>

<script>
import config from "@/config";
import Message from "@/components/Message.vue";
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