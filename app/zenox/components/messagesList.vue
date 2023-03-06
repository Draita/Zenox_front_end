<template>
    <!-- <div class="w-full flex justify-center "> -->
    <div class="w-full flex justify-center">

        <div class="message-list width-formatting ">
            <messageProfile
             v-for="message in messages"
              @reply="openReplies"
              :key="message._id"
              @delete="this.delete"
              :message="message"
              :allowReplying= "allowReplying"></messageProfile>

        </div>
    </div>
    <!-- <message-holder :allowReplying=this.allowReplying @reply="openReplyModal" v-for="message in messages"
            :message="message" :editable="editable" :key="message._id" :username="this.username"
            :allowVistingProfile="this.allowVistingProfile" :url="this.Url" /> -->



</template>

<script>
import axios from "axios";
import messageProfile from "@/zenox/components/messageProfile.vue";





export default {
    components: {
        messageProfile
    },
    props: {
        messages: {
            type: Object,
            required: true
        },
        allowReplying: {
            type: Boolean,
            required: false,
            default: true,
        }
    },

    methods: {
        openReplies(e) {
            this.$router.push('/zenox/replies?message=' + e)
        },

        delete(e) {
            console.log(e)

            // this.messages.splice(this.messages.findIndex(message => message._id === '64030e8d32aaeb70b3c78fb2'),1);
            this.messages.splice(this.messages.indexOf(e), 1)


            // this.$emit('reply', this.message)
        }

    }
}
</script>