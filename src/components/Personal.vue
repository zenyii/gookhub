<template>
  <div class="personal">
    <!--头像栏下部偏移-->
    <div style="margin-left: 50px;">
    <!--头像及昵称-->
    <el-row style="margin-top: 50px;">
      <el-col :span="2" style="margin-left: 50px;">
      <img :src="userMsg.user_image" style="width: 100px; float: left;border-radius: 50%;">
      </el-col>
      <el-col :span="18">
        <el-row style="margin-top:35px;">
        <span style="color: rgb(49,49,104);font-size: 30px;font-weight:bold">{{userMsg.name}}</span>
        <span style="color: red;margin-left: 5px;">{{userMsg.userVipMsg}}</span>
        </el-row>
        <el-row style="margin-top: 10px;">
          <span style="color: rgb(88, 88, 94);font-size: 20px;font-weight:bold">{{userMsg.userIntroduce}}</span>
        </el-row>
      </el-col>
    </el-row>
    </div>
    <!--信息栏下部偏移-->
    <div style="margin-left: 100px;margin-top: 20px;">
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
          <el-row class="msg"><div id="title">用户id</div>{{userMsg.id}}</el-row>
          <el-row class="msg"><div id="title">昵称</div><div style="border-radius: 5px;background: rgba(255, 255, 255, 0.6);width: 150px;float: left;">{{userMsg.name}}</div></el-row>
          <el-row class="msg"><div id="title">性别</div>{{userMsg.userSex}}</el-row>
          <el-row class="msg"><div id="title">注册日期</div>{{userMsg.beginDate}}</el-row>
          <el-row class="msg"><div id="title">会员到期时间</div>{{userMsg.vipEndTime}}</el-row>
        </el-col>
        <el-col :span="16">
          <el-row class="msg"><div id="title">电子邮箱</div><div style="border-radius: 5px;background: rgba(255, 255, 255, 0.6);width: 200px;float: left;">{{userMsg.userEmail}}</div></el-row>
          <el-row class="msg"><div id="title">电话</div><div style="border-radius: 5px;background: rgba(255, 255, 255, 0.6);width: 150px;float: left;">{{userMsg.userTel}}</div></el-row>
          <el-row class="msg"><div id="title">我的签名</div><div style="border-radius: 5px;background: rgba(255, 255, 255, 0.6);width: 300px;float: left;height: 100px;">{{userMsg.userIntroduce}}</div></el-row>
        </el-col>
      </el-row>
      </div>
    </el-row>
    <!--我的会员-->
    <div class="detailMsg" v-if="status[1]">
      <el-row>
        <el-col :span="8" style="border-right: 1px solid white;margin-top:30px;height: 180px;">
          <el-row><div id="title">会员等级</div>{{userMsg.userVipMsg}}</el-row>
          <el-row class="msg"><div id="title">会员到期时间</div>{{userMsg.vipEndTime}}
          <el-button @click="visible=true" type="danger" size="mini" style="background: rgba(139, 5, 5, 0.4);margin-left: 15px;font-size: 15px;">续费会员</el-button></el-row>
          <el-row class="msg"><div id="title">享受课程范围</div>{{userMsg.lessons}}</el-row>
        </el-col>
        <el-col :span="10" style="margin-left: 15px;">
          <el-row class="msg"><span style="color:rgb(193, 33, 33);margin-left: 23px;">等级</span><span style="color:rgb(193, 33, 33);margin-left: 50px;">会员课程享受范围</span><span style="color:rgb(193, 33, 33);margin-left: 70px;">价格</span></el-row>
          <el-row v-for="(msg,index) in vipMsg" style="margin-top: 10px;">
            <div style="float: left;margin-left: 10px;">{{msg.level}}</div>
            <div style="margin-left: 30px;width: 160px;float: left;">{{msg.enjoy}}</div><div style="margin-left: 50px;float: left;">{{msg.price}}</div>
            <div v-if="index!=0&&msg.level==userMsg.userVipMsg" style="float:left;color: rgb(193, 33, 33);font-size: 15px;margin-left: 20px;line-height: 25px;">续费</div>
            <div v-if="index!=0&&msg.level!=userMsg.userVipMsg" style="float:left;color: rgb(193, 33, 33);font-size: 15px;margin-left: 20px;line-height: 25px;">升级</div>
          </el-row>
        </el-col>
      </el-row>
      <!--续费会员弹框-->
      <el-dialog
      title="续费会员"
      :visible.sync="visible"
      width="30%"
      :before-close="openCLose">
      <div>
        <!--弹框个人头部信息-->
        <el-row style="border-bottom: 1px solid black;justify-content: center;align-items: center;margin-left: 3%;">
          <img :src="userMsg.user_image" style="width: 10%;border-radius: 50%;">
          <span style="color: rgb(108,108,117);font-size: 20px;font-weight:bold;">{{userMsg.name}}</span>
        </el-row>
        <!--续费会员信息-->
        <el-row style="margin-top: 20px;color: rgb(244, 185, 66);margin-left: 3%;font-size: 20px;text-align: center;">
          <el-row>
            <el-col :span="8">白银会员</el-col>
            <el-col :span="8">黄金会员</el-col>
            <el-col :span="8">钻石会员</el-col>
          </el-row>
          <el-row style="margin-top: 30px;" :gutter="20">
            <el-col v-for="(pri,index1) in price" :span="8">
              <div :class="[current==index1?'selected':'beforeSelect']">
                <div @click="selectPrice(index1)">￥{{pri}}/月</div>
                <div @click="selectPrice(index1)" style="font-size: 10px;color:rgb(108,108,117);margin-top: 5px;margin-bottom:5px">连续包月</div>
              </div>
            </el-col>
          </el-row>
          <el-row style="margin-top: 40px;">
            <el-col :span="8">
              <el-row><img src="../assets/微信支付.png" style="width: 100px;"></el-row>
              <el-row><img src="../assets/支付宝支付.png" style="width: 80px;margin-top: 10px;"></el-row>
            </el-col>
            <el-col :span="8">
                <img src="../assets/微信支付二维码.png" style="width: 100px;">
            </el-col>
            <el-col :span="8">
                <el-checkbox v-model="checked">开通连续包月</el-checkbox>
                <div style="color: black;font-size: 15px;">微信扫码，支付<span style="color: rgb(244, 185, 66);">{{price[current]}}</span>元</div>
            </el-col>
          </el-row>
        </el-row>
      </div>
      </el-dialog>
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
      vipMsg:[
        {level:"普通会员",enjoy:"免费、推荐课程",price:"免费"},
        {level:"白银会员",enjoy:"部分收费课程",price:"10r/月"},
        {level:"黄金会员",enjoy:"更多高级收费课程",price:"18r/月"},
        {level:"钻石会员",enjoy:"全部收费课程",price:"25r/月"}
      ],
      visible:false,
      checked:true,
      price:["18","54","216"],
      current:0
    }
  },
  props:[
    'userMsg'
  ],
  methods:{
    change:function(e){
      let index = e;
      for(let i= 0;i<this.status.length;i++){
        this.status[i]=false
      }
      this.status.splice(index,1,true);
    },
    openCLose:function(){
      this.visible=false
    },
    selectPrice:function(index){
      this.current = index;
      this.price = this.price.slice();
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
  .selected{
    border:1px solid rgb(244, 185, 66);
    border-radius: 10px;
  }
  .beforeSelect{
    border:1px solid rgb(108,108,117);
    border-radius: 10px;
  }
</style>
