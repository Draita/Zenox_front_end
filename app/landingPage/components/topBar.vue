<template>
  <!-- <div class="text-white w-full">
    <p class="marquee">
      <span>{{text}} -&nbsp;</span>
    </p>
    <p class="marquee marquee2">
      <span>{{text}} -&nbsp;</span>
    </p>
  </div> -->



  <div class="w-full bg-white h-8 pt-1 lg:h-12 lg:p-2 lg:pt-3 lg:text-xl text-sm font-semibold text-center">
    <div class="flex justify-center items-center content-center">
      <img class="lg:w-[28px] w-5 align-middle	" src="@/assets/icons/star.svg">
      <p>Register now and become a member of ZENOX</p>


    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "Welcome to Zenox - the social media app for individuals from all walks of life who seek to find their inner peace and connect with like-minded people around the world. Our platform provides a safe space for individuals of all backgrounds, ages, genders, and cultures to explore and cultivate mindfulness, wellness, and happiness in their daily lives. With a variety of features, including a supportive community, expert resources, and engaging content, Zenox is the ultimate destination for those who are passionate about personal growth and well-being. Join us today and discover a world of endless possibilities for inner peace and happiness."

    }
  }

}
</script>

<style>
.marquee {
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
  position: absolute;
}

.marquee span {
  display: inline-block;
  padding-left: 100%;
  animation: marquee 60s linear infinite;
}

.marquee2 span {
  animation-delay: 30s;
}

@keyframes marquee {
  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(-100%, 0);
  }
}
</style>