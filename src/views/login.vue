<script>
import axios from "axios";
let axiosConfig = {
    headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'Token',
        "Access-Control-Allow-Origin": "*",

    }
};
export default {
    name: "PostPage",
    data() {
        return {
            users: [],
            loading: false,
            submitting: false,
            password: "",
            email: "",
        };
    },


    methods: {
        handleSubmit() {

            axios.post("http://localhost:3000/login", {
                email: this.email,
                password: this.password
            })
                .then((response) => {
                    const status = response.status;

                    if (status == 200) {
                        this.$router.push('Home')
                    }

                }).catch(function (error){

                    //add later that it it displays the error
                        console.log("error")
                    });



        },
    },
};
</script>
<template>
    <div class="flex justify-center items-center h-screen">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-full md:w-3/4 lg:w-2/3 xl:w-1/2"
            @submit.prevent="handleSubmit">
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="email">
                    Email
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="email" name="email" v-model="email" required />
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 font-bold mb-2" for="password">
                    Password
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="password" name="password" v-model="password" required />
            </div>
            <div class="flex items-center justify-center">
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit">
                    Log in
            </button>
        </div>
    </form>
</div></template>
