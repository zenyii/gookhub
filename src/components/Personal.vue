<template>
  <div class="personal">
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
      <el-button v-for="(btn,index) in btnItem" :class="[status[index]?'btnAct':'btn']" @click="change(index)">{{btn}}</el-button>
    </el-row>
    <!--具体信息-->
    <el-row>
      <!--我的信息-->
      <div class="detailMsg" v-if="status[0]">
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
    <!--我的会员-->
    <div class="detailMsg" v-if="status[1]">
        <el-row class="msg"><div id="title">会员等级</div>{{userData.level}}</el-row>
        <el-row class="msg"><div id="title">会员到期时间</div>{{userData.endDate}}<el-tag style="background: rgba(139, 5, 5, 0.4);border-radius: 8px;color: white;margin-left: 15px;font-size: 15px;line-height: 30px;">续费会员</el-tag></el-row>
        <el-row class="msg"><div id="title">享受课程范围</div>{{userData.lessons}}</el-row>
    </div>
    <!--课程收藏-->
    <div class="detailMsg" v-if="status[2]">
      <el-row>
        <el-col :span="2">

        </el-col>
        <el-col :span="8"></el-col>
      </el-row>
    </div>
  </div>
  </div>
</template>

<script>
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
        endDate:"2020.10.1",
        level:"vip2",
        lessons:"免费课程、部分收费课程"
      },
      status:[
        true,
        false,
        false,
        false,
        false
      ],
      btnItem:['我的信息','我的会员','课程收藏','我的笔记','我的考试'],
    }
  },
  methods:{
    change:function(e){
      let index = e;
      for(let i= 0;i<this.status.length;i++){
        this.status[i]=false
      }
      this.status.splice(index,1,true);
    }
  },
  components:{
    
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
