<template>
  <div class="personal">
    <Navigator></Navigator>
    <!--头像及昵称-->
    <el-row>
      <el-col :span="2">
      <img src="../assets/女用户.png" style="width: 150px; float: left;">
      </el-col>
      <el-col :span="22">
        <el-row style="margin-top:35px;">
        <span style="color: rgb(49,49,104);font-size: 30px;font-weight:bold">爱学习的小美</span>
        <span style="color: red;margin-left: 5px;">vip2</span>
        </el-row>
        <el-row style="margin-top: 10px;">
          <span style="color: rgb(88, 88, 94);font-size: 20px;font-weight:bold">有志者事竟成</span>
        </el-row>
      </el-col>
    </el-row>
    <!--信息栏-->
    <el-row style="border-top: 1px solid white;">
      <el-button>我的信息</el-button>
      <el-button>我的会员</el-button>
      <el-button>课程收藏</el-button>
      <el-button>我的笔记</el-button>
      <el-button>我的考试</el-button>
    </el-row>
    <!--具体信息-->
    <el-row>
      <div class="detailMsg">
      <el-row class="msg">
        <el-col :span="6">用户id：{{userData.id}}</el-col>
        <el-col :span="6">电子邮箱：{{userData.eMail}}</el-col>
      </el-row>
      <el-row class="msg">
        <el-col :span="6">昵称：{{userData.nickName}}</el-col>
        <el-col :span="6">电话：{{userData.Tel}}</el-col>
      </el-row>
      <el-row class="msg">
        <el-col :span="6">性别：{{userData.sex}}</el-col>
        <el-col :span="6">我的签名：{{userData.sign}}</el-col>
      </el-row>
      <el-row class="msg">
        <el-col :span="12">注册日期：{{userData.beginDate}}</el-col>
      </el-row>
      <el-row class="msg">
        <el-col :span="12">会员到期时间：{{userData.endDate}}</el-col>
      </el-row>
      </div>
    </el-row>
  </div>
</template>

<script>
import Navigator from './Navigator.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      userData:{
        id:1000945261,
        eMail:'xiaomei@aa.com',
        nickName:"爱学习的小美",
        Tel:'12345678901',
        sex:"女",
        sign:"有志者事竟成",
        beginDate:"2019.10.1",
        endDate:"2020.10.1"
      }
    }
  },
  methods:{
   
  },
  components:{
    Navigator
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .personal{
    color: white;
    background-image: url("../assets/back.png");
    background-repeat:no-repeat;
    background-size: cover;
  }
  .detailMsg{
    color: rgb(69, 69, 76);
    font-size: 15px;
  }
  .msg{
    margin-top: 25px;
  }
</style>
