<template>
  <div class="personal">
    <Navigator></Navigator>
    <!--头像栏下部偏移-->
    <div style="margin-left: 50px;">
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
    </div>
    <!--信息栏下部偏移-->
    <div style="margin-left: 100px;">
    <!--信息栏-->
    <el-row style="width:1400px;border-top: 1px solid white;">
      <el-button :class="[isInfo?'btnAct':'btn']" @click="changeInfo()">我的信息</el-button>
      <el-button :class="[isVip?'btnAct':'btn']" @click="changeVip()">我的会员</el-button>
      <el-button :class="[isCollect?'btnAct':'btn']" @click="changeCol()">课程收藏</el-button>
      <el-button :class="[isNote?'btnAct':'btn']" @click="changeNote()">我的笔记</el-button>
      <el-button :class="[isTest?'btnAct':'btn']" @click="changeTest()">我的考试</el-button>
    </el-row>
    <!--具体信息-->
    <el-row>
      <div class="detailMsg" v-if="isInfo">
      <el-row>
        <el-col :span="8">
          <el-row class="msg"><div id="title">用户id</div>{{userData.id}}</el-row>
          <el-row class="msg"><div id="title">昵称</div><div style="border-radius: 5px;background: rgba(255, 255, 255, 0.6);width: 150px;float: left;">{{userData.nickName}}</div></el-row>
          <el-row class="msg"><div id="title">性别</div>{{userData.sex}}</el-row>
          <el-row class="msg"><div id="title">注册日期</div>{{userData.beginDate}}</el-row>
          <el-row class="msg"><div id="title">会员到期时间</div>{{userData.endDate}}</el-row>
        </el-col>
        <el-col :span="16">
          <el-row class="msg"><div id="title">电子邮箱</div><div style="border-radius: 5px;background: rgba(255, 255, 255, 0.6);width: 200px;float: left;">{{userData.eMail}}</div></el-row>
          <el-row class="msg"><div id="title">电话</div><div style="border-radius: 5px;background: rgba(255, 255, 255, 0.6);width: 150px;float: left;">{{userData.Tel}}</div></el-row>
          <el-row class="msg"><div id="title">我的签名</div><div style="border-radius: 5px;background: rgba(255, 255, 255, 0.6);width: 300px;float: left;height: 100px;">{{userData.sign}}</div></el-row>
        </el-col>
      </el-row>
      </div>
    </el-row>
    </div>
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
      },
      isInfo:false,
      isVip:false,
      isCollect:false,
      isNote:false,
      isTest:false
    }
  },
  methods:{
    changeInfo:function(){
      this.isVip=false;
      this.isCollect=false;
      this.isNote=false;
      this.isTest=false;
      this.isInfo=true;

    },
    changeVip:function(){
      this.isCollect=false;
      this.isNote=false;
      this.isTest=false;
      this.isInfo=false;
      this.isVip=true;
    },
    changeCol:function(){
      this.isVip=false;
      this.isNote=false;
      this.isTest=false;
      this.isInfo=false;
      this.isCollect=true;
    },
    changeNote:function(){
      this.isVip=false;
      this.isCollect=false;
      this.isTest=false;
      this.isInfo=false;
      this.isNote=true;
    },
    changeTest:function(){
      this.isVip=false;
      this.isCollect=false;
      this.isNote=false;
      this.isTest=false;
      this.isInfo=false;
      this.isTest=true;
    }
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
    width: 100%;
    height: 100%;
    background-image: url("../assets/back.png");
    background-repeat:no-repeat;
    background-size: cover;
  }
  .detailMsg{
    color: rgb(69, 69, 76);
    font-size: 18px;
  }
  .msg{
    margin-top: 25px;
  }
  #title{
    width: 150px;
    float: left;
  }
  .btn{
    background: rgba(255, 255, 255, 0.6);
    border-radius: 0;
    width: 130px;
    height: 45px;
    color: rgb(92, 143, 181);
    font-size: 20px;
    font-weight: bold;
  }
  .btnAct{
    background: rgba(235, 17, 17, 0.4);
    border-radius: 0;
    width: 130px;
    height: 45px;
    color: black;
    font-size: 20px;
    font-weight: bold;
    border: none;
  }
</style>
