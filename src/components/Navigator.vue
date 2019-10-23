<template>
  <div class="home">
      <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      class="el-menu-demo"
      @select="handleSelect"
      background-color="black"
      text-color="#fff"
      active-text-color="#fff">
      <el-menu-item index="1" style="font-size: 25px;"><img src="../assets/logo.png" style="width: 40px; margin: 10px;">在线学习网站</el-menu-item>
      <el-submenu index="2" style="margin-left: 50px;">
        <template slot="title">课程分类</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>  
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <div class="search">
        <el-input v-model="input" style="width: 250px;position: relative;top: -5px;"></el-input>
        <img src="../assets/搜索.jpg" style="width: 40px;height: 40px;position: relative;top: 10px;margin-left: 10px;">
      </div>
      <el-submenu index="4" style="float: right;"><template slot="title">xxx用户/管理员</template>
        <el-menu-item index="4-1" style="width: 200px;">退出<i class="el-icon-error" style="margin-left: 5px;"></i></el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      input:'',
      activeIndex:'',
      lessons:[
        
      ]
    }
  },
  methods:{
    handleSelect(){

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .search{
    width: 350px;
    height: 50px;
    position: absolute;
    left: 450px;
  }
</style>
