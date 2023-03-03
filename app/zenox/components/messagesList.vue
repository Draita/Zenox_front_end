<template>
    <!-- <div class="w-full flex justify-center "> -->
    <div class="w-full flex justify-center">

        <div class="message-list width-formatting ">
            <messageProfile v-for="message in messages" @reply="openReplies" :message="message"></messageProfile>

        </div>
    </div>
    <!-- <message-holder :allowReplying=this.allowReplying @reply="openReplyModal" v-for="message in messages"
            :message="message" :editable="editable" :key="message._id" :username="this.username"
            :allowVistingProfile="this.allowVistingProfile" :url="this.Url" /> -->



</template>

<script>
import config from "@/config";
import axios from "axios";
import ReplyModal from "@/zenox/components/replyModal.vue"
import messageHolder from "@/zenox/components/message/messageHolder.vue";
import messageProfile from "@/zenox/components/messageProfile.vue";





export default {
    components: {
        ReplyModal,
        messageHolder,
        messageProfile
    },
    props: {
        messages: {
            type: Object,
            required: true
        },

        editable: {
            type: Boolean,
            default: false
        },
        allowVistingProfile: {
            type: Boolean,
            default: true
        },
        allowReplying: {
            type: Boolean,
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
        console.log(this.messages)
        axios
            .get('/profile/username')
            .then((response) => {
                this.username = response.data;
            })
    },

    methods: {
        closeReplyModal() {
            this.isReplying = false

        },
        openReplies(e) {
            console.log("go to replies")
            console.log(e)

            this.$router.push('/replies/?message=' + e)

            // this.$emit('reply', this.message)
        }


    }
}
</script>