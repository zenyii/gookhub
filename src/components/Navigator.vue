<template>
  <div class="home">
      <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="black"
      text-color="#fff"
      active-text-color="#fff">
      <el-menu-item index="1" style="font-size: 20px;">在线学习网站</el-menu-item>
      <el-submenu index="2">
        <template slot="title"><label>课程分类</label></template>
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
      <el-menu-item index="3"><el-input v-model="input" style="width: 250px;"></el-input>
      </el-menu-item>
      <el-submenu index="4" style="float: right;"><template slot="title">xxx用户/管理员</template>
        <el-menu-item index="4-1" style="width: 150px; float: right;">退出<i class="el-icon-error" style="margin-left: 5px;"></i></el-menu-item>
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
      activeIndex2:''
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

</style>
