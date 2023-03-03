<template>
    <div class="container-fluid bg-black absolute inset-0 font-medium  ">
        <aside
            class="absolute inset-0 sidebar bg-white h-screen w-[28px] md:w-[120px] flex flex-col  items-center md:items-start ">



            <img class=" w-[28px] mt-[4px] pl-[2px] md:pl-[5px]  pb-[19px]  align-middle" src="@/assets/icons/star.svg">

            <a @click="$router.push('/feed')" class="bg-white hover:bg-black hover:text-white flex items-center text-base font-normal text-gray-900
                       w-full pl-[2px] md:pl-[5px] pt-[19px] pb-[19px]">
                <img class="w-[24px]  align-middle" src="@/assets/icons/home.svg">

                <span class="ml-3 text">Home</span>
            </a>

            <a @click="$router.push('/discover')" class="bg-white hover:bg-black hover:text-white flex items-center text-base font-normal text-gray-900
                   w-full pl-[2px] md:pl-[5px] pt-[19px] pb-[19px] ">
                    <img class="w-[24px]  align-middle " src="@/assets/icons/discover.svg">

                    <span class="ml-3 text">Discover</span>
                </a>

                <a @click="$router.push('/message')" class="bg-white hover:bg-black hover:text-white flex items-center text-base font-normal text-gray-900
                   w-full  pl-[2px] md:pl-[5px] pt-[19px] pb-[19px]">
                    <img class="w-[24px]  align-middle" src="@/assets/icons/message.svg">

                    <span class="ml-3 text">message</span>
                </a>

                <a @click="$router.push('/profile')" class="bg-white hover:bg-black hover:text-white flex items-center text-base font-normal text-gray-900
                   w-full l-[2px] md:pl-[5px] pt-[19px] pb-[19px]">
                    <img class="w-[24px]  align-middle" src="@/assets/icons/profile.svg">

                    <span class="ml-3 text">message</span>
                </a>

                <a @click="$router.push('/profile')" class="  fixed w-[28px] items-center md:items-start md:w-[120px] bottom-0  bg-white hover:bg-black hover:text-white flex  text-base font-normal text-gray-900
                    pl-[2px] md:pl-[5px] pt-[19px] pb-[19px]">
                    <img class="w-[24px]  align-middle" src="@/assets/icons/logout.svg">

                    <span class="ml-3 text">logout</span>
                </a>


        </aside>
        <div class="flex justify-center w-full">



            <div class="pl-[28px] w-full">
                <!-- header -->
                <div class="w-full bg-white h-[30px] text-[12px] pt-1  text-sm font-semibold text-start">
                    <div class="flex justify-start items-start content-start">

                        <p class="absolute left-7 md:left-[120px] ">WELCOME TO ZENOX</p>
                    </div>
                </div>
                <!-- profile header -->

                <div class="w-full  ">
                    <div class="w-full flex justify-center">
                        <img class="h-[146px] w-[510px]  border-white border-l-[1px] border-r-[1px] object-fill"
                            src="@/assets/banner.png">

                    </div>

                    <div class=" grid-flow-col h-[62px]  bg-white w-full ">
                        <!-- profile Picture -->
                        <div class="flex justify-center content-center items-center  ">
                            <div class=" grid grid-cols-2 w-[510px]  border-black border-l-[1px]">
                                <div class="profile-picture flex  justify-center w-full mt-[-70px]">
                                    <img class="h-[133px] w-[133px]
                                                            rounded-full border-[4px] border-white"
                                        src="@/assets/profile_picture.png">
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
                                            <p class="text-[20px] font-bold">Thijmen</p>
                                            <button class=" bg-black text-white w-[119px]
                                                            inner-border-0 border-black hover:inner-border-1 hover:bg-white hover:text-black
                                                            transition duration-300 ease-in-out  ">EDIT PROFILE</button>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>
                        <div class="bio h-[40px]   bg-white  flex justify-center">
                            <div
                                class="w-[510px] background-bio    h-full  z-10 border-black border-t-[1px] border-r-[1px] border-l-[1px] ">
                                <p class="text-start pl-[11px] h-full text-[12px] pt-[6px] pr-[6px]  overflow-hidden "> HI
                                    MY NAME IS THIJMEN Hi my name is thijmen and welcome to my profile Hi my name is thijmen
                                    and welcome to my profile Hi my name is thijmen and welcome Hi my name is thijmen and
                                    welcome to my profile </p>
                            </div>
                        </div>


                    </div>
                </div>


                <div class="border-[1px] border-white"></div>
                <!-- messageHeader -->
                <div class=" flex justify-center pt-[35px]">
                    <div class="border-b-[1px] border-l-[1px] border-r-[1px] h-[125px] border-white  w-[510px] ">
                        <div class=" w-full  pl-[12px] pt-[6px] text-white border-white font-bold ">
                            <p class="pb-[1px] font-[2px] "> MESSAGE</p>
                            <div class="message flex items-end ">
                                <div class="h-[94px] w-full border-white border-[1px] mr-[-1px] background-text-box ">
                                    <p class="pl-[6px] pt-[6px] font-light text-[12px]">HERE IS MY TEXT</p>
                                </div>
                                <div class="buttons-holder w-[101px] mr-[12px] h-full">
                                    <button class="h-[33px] mb-[-1px] border-white border-[1px] text-white w-[101px]  font-bold
                                                    hover:bg-white hover:text-black transition duration-300 ease-in-out ">
                                        ADD IMAGE</button>
                                    <button class="h-[31px] border-white border-[1px] text-white w-[101px]  font-bold
                                                hover:bg-white hover:text-black transition duration-300 ease-in-out">
                                        SEND</button>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
                <div class="w-full flex justify-center">
                    <!-- MESSAGELIST -->
                    <div class="message-list w-[510px]">
                        <div
                            class="message pt-[5px] pl-[5px] border-b-[1px] border-l-[1px] border-r-[1px] border-white h-fit flex ">
                            <img class="h-[58px] w-[58px] rounded-full border-white  invert-0 hover:invert transition hover:opacity-50 duration-300 ease-in-out"
                                src="@/assets/profile_picture.png">
                            <div class="message-content pl-[17px] text-white">
                                <div class="header flex  text-[13px] ">
                                    <p class=" font-bold w-[103px]">Thijmen</p>
                                    <p class=" font-light">21 hours ago</p>
                                </div>
                                <p class="pt-[3px]">Hello my name is Thijmen and today
                                    I will post a message</p>
                                <div class="bottom flex items-center gap-x-[40px] font-light">

                                    <button class="flex items-center  hover:opacity-50 ">
                                        <img class="w-[24px] align-middle" src="@/assets/icons/like.svg">

                                        <span class="ml-2 ">1</span>
                                    </button>

                                    <button class="flex items-center  hover:opacity-50 ">
                                        <img class="w-[24px]  align-middle" src="@/assets/icons/react.svg">

                                        <span class="ml-2  ">1</span>
                                    </button>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>





            </div>
        </div>



    </div>
</template>
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
