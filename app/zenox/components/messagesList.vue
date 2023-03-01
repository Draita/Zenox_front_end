<template>
    <reply-modal :message= "this.replyingToMessage" @closeReplyModal = "closeReplyModal" v-show = "isReplying" />

    <message-holder :allowReplying = this.allowReplying @reply="openReplyModal" v-for="message in messages" :message="message" :editable="editable" :key="message._id"
        :username="this.username" :allowVistingProfile = "this.allowVistingProfile" :url="this.Url" />
</template>

<script>
import config from "@/config";
import axios from "axios";
import ReplyModal from "@/zenox/components/replyModal.vue"
import messageHolder from "@/zenox/components/message/messageHolder.vue";




export default {
    components: {
        ReplyModal,
        messageHolder
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
        },
        allowReplying: {
            type:Boolean,
            default: true
        }
    },

    data() {
        return {
            Url: config.apiUrl,
            username: "",
            isReplying: false,
            replyingToMessage: {},

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
        closeReplyModal(){
           this.isReplying = false

        },
        openReplyModal(e){
            this.isReplying = true
            this.replyingToMessage = e

        }


    }
}
</script>