<template>
  <div class="hello">
    <el-row>
      <el-col :span="12">
        <div class="slogen">
        <h1>加入会员</h1>
        <h1>享受更多精品课程！</h1>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="login">
          <h1>在线学习网站</h1>
          <h3>用户名或账号：</h3>
          <el-input v-model="account" placeholder="请输入账号" style="width: 300px;" clearable @blur="checkCount()"></el-input>
          <div style="font-size: 12px;color:red;" v-if="!countRight">*{{acountAlert}}*</div>
          <h3>密码：</h3>
          <el-input placeholder="请输入密码" v-model="password" style="width: 300px;" show-password clearable></el-input>
          <div style="font-size: 12px;color:red;" v-if="!pwdRight">*密码输入错误*</div>
          <h6>忘记密码？</h6>
          <el-button type="danger" style="width: 250px;font-size: 20px" @click="login()">登陆</el-button>
          <div style="margin-top: 20px;"><span id="tips">创建新账号</span><span id="tips">管理员模式</span></div>
        </div>
      </el-col>
  </el-row>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      account:'',
      password:'',
      countRight:true,
      pwdRight:true,
      acountAlert:''
    }
  },
  methods:{
    nextPage:function(){
      this.$router.push({path:'/index'})
    },
    checkCount:function(){
      console.log(this.account);
      let e = /^\w{6,12}$/;
      if(this.account==''){
        this.countRight=false;
        this.acountAlert="账号不能为空"
      }
      else if(!e.test(this.account)){
        console.log("错了")
        this.countRight=false;
        this.acountAlert="账号格式错误"
      }
      else{
        this.countRight=true;
      }
    },
    login: function () {
      /*axios.post('http://api.gookhub.cn/index/login/login',
        {
        account:this.account,
        password:this.password,
        type:"user"
        }).then(res=>{
          console.log(res)
      }).catch(err=>{
          console.log(err)
      })*/
      this.$api.post('/index/login/login', {
          account:this.account,
          password:this.password,
          type:"user"
        }, response => {
        if (response.status >= 200 && response.status < 300) {
          console.log(response.data);
        } else {
          console.log(response.message);
        }
      });
      /*this.$axios({
        method:'post',
        url:'/index/login/login',
        data:{    //这里是发送给后台的数据
          account:this.account,
          password:this.password,
          type:"user"
          }
        }).then((response) =>{          //这里使用了ES6的语法
          console.log(response)       //请求成功返回的数据
        }).catch((error) =>
          console.log(error)       //请求失败返回的数据
        )*/
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
  .slogen{
    float: left;
    margin-left: 300px;
    margin-top: 200px;
  }
  .login{
    float: right;
    margin-right: 400px;
    margin-top: 100px;
  }
  #tips{
    font-size: 12px;
    margin-left: 30px;
  }
</style>
