<template>
  <div class="hello">
    <Navigator></Navigator>
  </div>
</template>

<script>
import Navigator from './Navigator.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  },
  components:{
    Navigator
  },
  methods:{
    login: function () {
      this.$api.post('/login/login', {
          account:this.account,
          password:this.password,
          type:"user"
        }, response => {
        if (response.status >= 200 && response.status < 300) {
          console.log(response.data);
          if(response.data.code==0){
            this.$message({
              message:response.data.Msg,
              type:'success'
            })
            this.$router.push({path:'/index'})
          }
          else{
            this.$message.error(response.data.Msg)
          }
        } else {
          console.log(response.message);
        }
      });
   },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    color: white;
    width: 100%;
    height: 100%;
    background-image: url("../assets/back1.jpg");
    background-repeat:no-repeat;
    background-size: cover;
  }
</style>
