<template>
    <div class="id" id="profile">
        <loading v-if="loading" />

        <div v-else="!loading" class="container-fluid h-full w-full items-center  font-medium  ">

            <div class="flex justify-center w-full">



                <div class=" w-full">
                    <!-- header -->

                    <!-- profile header -->

                    <div class="w-full  h-[246px]">
                        <div class="w-full flex justify-center">
                            <img class="h-[146px] w-[510px]  border-white border-l-[1px] border-r-[1px] object-cover
                            "
                                :src="this.user.banner">

                        </div>

                        <div class=" grid-flow-col h-[62px]  bg-white w-full ">
                            <!-- profile Picture -->
                            <div class="flex justify-center content-center items-center  ">
                                <div class=" grid grid-cols-2 w-[510px]  border-black border-l-[1px]">
                                    <div class="profile-picture flex  justify-center w-full mt-[-70px]">
                                        <img class="h-[133px] w-[133px]
                                                                          rounded-full border-[4px] border-white"
                                            :src="this.user.profilePicture">
                                    </div>

                                    <div class=" h-full background-grid-black  text-black border-black border-r-[1px]">
                                        <div class="content flex h-full justify-center items-center opacity-100">
                                            <svg class="ml-[5px]" width="30" height="30" viewBox="0 0 42 42" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M21 0L22.7334 8.94398L26.9164 0.850647L26.0598 9.92068L32.3535 3.33368L28.9762 11.795L36.8707 7.24792L31.2465 14.415L40.1023 12.2763L32.6866 17.5685L41.7863 18.0114L33.18 21L41.7863 23.9886L32.6866 24.4315L40.1023 29.7237L31.2465 27.585L36.8707 34.7521L28.9762 30.205L32.3535 38.6663L26.0598 32.0793L26.9164 41.1494L22.7334 33.056L21 42L19.2666 33.056L15.0836 41.1494L15.9402 32.0793L9.64654 38.6663L13.0238 30.205L5.12926 34.7521L10.7535 27.585L1.89773 29.7237L9.31338 24.4315L0.213749 23.9886L8.82 21L0.213749 18.0114L9.31338 17.5685L1.89773 12.2763L10.7535 14.415L5.12926 7.24792L13.0238 11.795L9.64654 3.33368L15.9402 9.92068L15.0836 0.850647L19.2666 8.94398L21 0Z"
                                                    fill="black" />
                                            </svg>
                                            <!-- profile content and button -->
                                            <div class="button-and-text w-[140px]">
                                                <p class="text-[20px] font-bold">{{ user.username }}</p>
                                                <button class=" bg-black text-white w-[119px]
                                                                          inner-border-0 border-black hover:inner-border-1 hover:bg-white hover:text-black
                                                                          transition duration-300 ease-in-out  " @click="profileButtonClick
                                                                          ">{{ profileButtonText }}</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                            </div>
                            <!-- TODO: remove margin -1 -->
                            <div class="bio h-[40px]  mt-[-1px] bg-white  flex justify-center">
                                <div
                                    class="w-[510px] background-bio    h-full  z-10 border-black border-t-[1px] border-r-[1px] border-l-[1px] ">
                                    <p class="text-start pl-[11px] h-full text-[12px] pt-[6px] pr-[6px]  overflow-hidden ">
                                        HI
                                        {{ user.description }}</p>
                                </div>
                            </div>


                        </div>
                    </div>



                    <message-box v-show="editable" @messageSend="sendMessage" class="" />




                    <messages-list :editable="editable" :allowVistingProfile=false :messages=this.messages>
                    </messages-list>







                </div>
            </div>



        </div>
        <change-profile v-if="isModalVisible" @close="hideModal()" :user="this.user"
            @profileUpdated="updateProfile(user.username)" />

    </div>
</template>

<script>
import axios from "axios";
import config from "@/config";
import ChangeProfile from "@/zenox/components/changeProfile.vue"
import MessageBox from '@/zenox/components/messageBox.vue';
import MainSidebar from "@/zenox/components/mainSidebar.vue";
import messagesList from "@/zenox/components/messagesList.vue";
import loading from "@/components/loading.vue";










export default {
    components: {
        ChangeProfile,
        MessageBox,
        MainSidebar,
        messagesList,
        loading,


    },
    data() {
        return {
            profileButtonText: "",
            editable: false,
            isFollowing: false,
            loading: true,

            messages: [],
            user: {
                username: "",
                description: "",
                profilePicture: "https://via.placeholder.com/150",
                banner: "",
            },
            isModalVisible: false,
        };
    },


    created() {
        // BUG CAN ACCOR WHEN SWITCHING FROM PROFILE MODAL to another view to back to here where you can't scroll
        //this fixes it lol
        document.documentElement.style.overflow = 'auto'

        const name = this.$route.params.username;
        this.updateMessages

        this.checkFollow(name);
        this.getMessages(name);
        this.updateProfile(name)

    },

    methods: {

        profileButtonClick() {
            if (this.editable) (
                this.showModal()
            )
            if (!this.editable && this.isFollowing) (
                this.unfollow()
            )
            if (!this.editable && !this.isFollowing) (
                this.follow()
            )

        },
        sendMessage(e) {
            console.log(e);
            axios.post('/messages', e, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((response) => {
                //TODO: impliment later that data is returned from endpoint and added to the this.messages
                // this.messages.unshift(response.data)
                this.getMessages(this.user.username);
            }
            ).catch((error) => {
                console.error(error);
            });

        },
        showModal() {
            this.isModalVisible = true;

        },
        hideModal() {
            this.isModalVisible = false;
            document.documentElement.style.overflow = 'auto'
        },

        //used when profile is selected on the main sidebar when already visitng a profile
        //otherwise the profile won't update
        refreshProfile() {
            const name = this.$route.params.username;
            this.getMessages(name)
            this.updateProfile(name)
        },
        updateProfile(name) {
            console.log(name)
            console.log("refreshProfile")
            axios.get('/profile/get/' + name).then((response) => {

                const profileData = response.data;
                console.log(profileData)

                this.user.profilePicture = config.apiUrl + '/media/' + profileData.profilePicture
                this.user.banner = config.apiUrl + '/media/' + profileData.banner
                this.user.username = name;
                this.user.description = profileData.description;
                this.loading = false;



                this.isCurrentUserLoggedInUser()
            });
        },

        follow() {
            axios.get('/follow/go/' + this.user.username).then((response) => {
                this.checkFollow(this.user.username)
            })
        },

        unfollow() {
            axios.get('/follow/un/' + this.user.username).then((response) => {
                this.checkFollow(this.user.username)
            })

        },
        checkFollow(name) {
            axios.get('/follow/isfollowing/' + name).then((response) => {
                this.isFollowing = response.data.isFollowing
                if (this.isFollowing) {
                    this.profileButtonText = "UNFOLLOW"
                } else {
                    this.profileButtonText = "FOLLOW"

                }
            });

        },
        getMessages(name) {
            axios
                .get('/messages/profile/' + name)
                .then((response) => {
                    this.messages = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        //TODO: MOVE TO APP.VUE
        isCurrentUserLoggedInUser() {
            axios.get('checklogin').then(res => {
                if (res.data == this.user.username) {
                    this.editable = true
                    this.profileButtonText = "EDIT PROFILE"

                }
            });

        }
    },
};
</script>

<style>
.background-grid-black {
    background: url("@/assets/grids/black-grid.svg") top left;
    background-repeat: repeat;
    background-size: 33px 33px;
}

.background-text-box {
    background: url("@/assets/grids/white-big-thin-grid.svg") top left;
    background-repeat: repeat;
}

.background-bio {
    background: url("@/assets/grids/light-black-10.svg") top left;
    background-repeat: repeat;
}


/* Media Query for Mobile Devices */
/* Media Query for low resolution  Tablets, Ipads */
@media (min-width: 400px) and (max-width: 3000px) {
    .width {
        width: 400px;
    }
}
</style>
