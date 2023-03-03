<template>
    <div class="for-animation fixed top-[130px] right-0 w-full  ">
        <div class="h-[15%]"></div>
        <div class="flex flex-row justify-center register">
            <div class="text-white  text-start pl-3 pr-3 w-fit md:w-[400px]">
                <div class="div  text-[50px] w-full leading-[60px] md:text-[65px] md:leading-[70px]">
                    <div class="flex">
                        <img class="w-[50px]  align-middle	" src="@/assets/icons/star2.svg">
                        <p> MY</p>
                    </div>

                    <p>ZENOX<br>
                        ACCOUNT
                    </p>
                </div>
                <div class="text-[12px]  font-light pt-[30px] w-[70%] md:text-[16px] ">
                    <p>Sign in with your ZENOX email and password or create a profile if you are new.</p>
                </div>

                <form>
                    <div class="space-y-[30px]">
                        <div>
                            <input @click="resetFields" v-model="email" type="email" id="email" class="border-white  inner-border-1  bg-black   rounded-none placeholder-white
                                                                text-sm  focus:text-black focus:bg-white no-outline focus:ring-0 focus:border-transparent
                                                                w-full mt-10" :class="{ 'border-red-800': emailWrong }"
                                placeholder="EMAIL*" required>
                        </div>


                        <input @click="this.usernameWrong = false" v-model="username" v-show="usernameFieldShow" type="text"
                            id="username" class="border-white  inner-border-1  bg-black   rounded-none placeholder-white
                                                                text-sm  focus:text-black focus:bg-white no-outline focus:ring-0 focus:border-transparent
                                                                w-full mt-10" :class="{ 'border-red-800': usernameWrong }"
                            placeholder="USERNAME*">

                        <input @click="this.passwordWrong = false" v-model="password" v-show="this.passwordFieldShow"
                            type="text" id="password" class="border-white  inner-border-1  bg-black   rounded-none placeholder-white
                                                                text-sm  focus:text-black focus:bg-white no-outline focus:ring-0 focus:border-transparent
                                                                w-full mt-10" :class="{ 'border-red-800': passwordWrong }"
                            placeholder="PASSWORD*">

                        <div @click="continueButton()" class="h-1/2 flex items-center justify-center">
                            <div
                                class=" text-black h-[40px]  bg-white text-center pt-2 pb-2 w-full
                                                                                        hover:text-white hover:bg-black transition border-[1px] border-white">
                                CONTINUE</div>
                        </div>

                    </div>
                </form>



            </div>
        </div>

    </div>
</template>
<script>
import axios from "axios";

export default {

    data() {
        return {
            passwordFieldShow: false,
            usernameFieldShow: false,
            email: "",
            password: "",
            username: "",
            emailWrong: false,
            passwordWrong: false,
            usernameWrong: false,
        }
    },
    created() {
        axios.get("/get-mail").then((response) => {
                this.email = response.data.email
            }).catch(function (error){

            });
    },
    methods: {

        async continueButton() {
            if (!this.passwordFieldShow && !this.usernameFieldShow) {
                this.checkMail()
            }
            // LOGIN
            if (this.passwordFieldShow && !this.usernameFieldShow) {
                this.login()
            }
            if (this.passwordFieldShow && this.usernameFieldShow) {
                this.register();

            }

        },

        async register() {

            const isUsernameUsed = await this.usernameCheck();
            if (isUsernameUsed) {
                this.usernameWrong = true;
                console.log("broo")

            }
            if (!isUsernameUsed && this.passwordCheck()) {
                axios.post("/register", {
                    email: this.email,
                    password: this.password,
                    username: this.username
                })
                    .then((response) => {
                        console.log("registered")
                        const status = response.status;

                        if (status == 201) {
                            this.rediretToProfile(response.data.username)
                        }

                    }).catch(function (error) {

                        //add later that it it displays the error
                        console.log("error")
                    });

            }
        },

        // CHECKS if the username is already used
        async usernameCheck() {
            if (!(this.username == '') && !(this.username == null) && !(this.username.value == 0)) {
                var exists = await axios.post("/check-username", {
                    username: this.username
                }).then((response) => {

                    return response.data.exists;

                }).catch(function (error) {
                    return false

                });
                return exists;
            } else {
                return false;
            }

        },
        passwordCheck() {
            if (this.password == '' || this.password == null || this.password.value == 0) {
                console.log("wrong!")
                this.passwordWrong = true;
                return false
            } else {
                return true
            }
        },

        async login() {
            if (this.passwordCheck()) {
                const correct = await axios.post("/login", {
                    email: this.email,
                    password: this.password
                }).then((response) => {
                    const status = response.status;
                    this.rediretToProfile(response.data.username)
                    if (status == 200) {
                        return true
                    }
                }).catch(function (error) {
                    return false
                });
                if (correct == true) {


                } else {
                    this.passwordWrong = true;



                }

            }



        },
        resetFields() {
            this.username = ""
            this.password = ""
            this.passwordFieldShow = ""
            this.usernameFieldShow = ""

            this.emailWrong = false
            this.passwordWrong = false

        },




        async checkMail() {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
                var exists = await axios.post("/check-email", {
                    email: this.email
                }).then((response) => {
                    console.log(response.data)
                    if (response.data.loggedIn) {
                        this.rediretToProfile(response.data.username)
                    }
                    return response.data.exists;
                });
                if (exists == true) {
                    this.passwordFieldShow = true


                } else {
                    this.passwordFieldShow = true
                    this.usernameFieldShow = true;

                }

            }
            console.log(this.email)
        },
        rediretToProfile(name) {
            this.$router.push('/profile?user=' + name)

        }
    },
}
</script>