<script>
import axios from "axios";
export default {

  mounted() {


    axios.get('/checklogin')
      .then((response) => {
    console.log("yoo")




        if (response.status == 200) {
          this.$router.push('/profile/?user='+response.data)

        }



      })
      .catch((error) => {
        this.$router.push('/home')
      });
  }
}
</script>