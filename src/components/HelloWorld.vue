<template>
  <div class="hello">
    <div class="slogen">
    <h1>加入会员</h1>
    <h1>享受更多精品课程！</h1>
    </div>
    <div class="login">
      <h1>在线学习网站</h1>
      <h3>用户名或账号：</h3>
      <input id="input">
      <h3>密码：</h3>
      <input id="input">
      <h6>忘记密码？</h6>
      <el-button type="danger" style="width: 250px;font-size: 20px" @click="nextPage()">登陆</el-button>
      <div style="margin-top: 20px;"><span id="tips">创建新账号</span><span id="tips">管理员模式</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  },
  methods:{
    nextPage:function(){
      this.$router.push({path:'/index'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    color: white;
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
  #input{
    width: 250px;
    height: 20px;
    border-radius: 5px;
  }
  #tips{
    font-size: 12px;
    margin-left: 30px;
  }
</style>
