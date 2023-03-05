<template>
  <div class=" flex justify-center">
    <div class="border-b-[1px] border-l-[1px] border-r-[1px] h-[125px] border-white  w-[510px] ">
      <div class=" w-full  pl-[12px] pt-[6px] text-white border-white font-bold ">
        <p class="pb-[1px] font-[2px] "> MESSAGE</p>
        <div class="message flex items-end ">
          <!-- <div class="h-[94px] w-full border-white border-[1px] mr-[-1px] background-text-box "> -->
            <textarea v-model="message" id="message" name="message"
            class="h-[94px] w-full resize-none  border-[0px] mr-[-1px] font-light text-[12px] background-text-box
            no-outline focus:ring-0 focus:border-transparent
            border-white  inner-border-[1px]"
            rows="4"></textarea>

            <!-- <p class="pl-[6px] pt-[6px] font-light text-[12px]">HERE IS MY TEXT</p>
          </div> -->
          <div class="buttons-holder w-[101px] mr-[12px] h-full text-white">
            <p class = " w-[101px] text-white text-[10px] pl-[4px] pb-[8px] truncate"> {{ fileName }}</p>
            <input  accept="image/png, image/gif, image/jpeg"  @change="onFileChange" type="file" id="selectedFile" style="display: none;" />
            <input type="button" value="ADD IMAGE" class="h-[33px] mb-[-1px] border-white border-[1px] w-[101px]  font-bold
            hover:bg-white hover:text-black transition duration-300 ease-in-out "
               onclick="document.getElementById('selectedFile').click();" />


            <button @click = "sendMessage"
              class="h-[31px] border-white border-[1px]  w-[101px]  font-bold
                                                          hover:bg-white hover:text-black transition duration-300 ease-in-out">
              SEND</button>

          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    header: {
      type: String,
      default: "Message",

    },
  },
  data() {
    return {
      message: '',
      file: null,
      fileName: "No file selected",
    }
  },
  methods: {
    sendMessage() {
      const formData = new FormData();


      formData.append('content', this.message);
      formData.append('location', 'feed');
      formData.append("file", this.file)
      this.$emit('messageSend', formData);
      this.message= ''
      this.file= null

    },
    onFileChange(event) {
      this.fileName = event.target.files[0].name
      this.file = event.target.files[0];
    },
  }
}
</script>
