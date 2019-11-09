<template>
  <div class="home">
      <el-row>             <!--导航栏-->
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
            <el-submenu v-for="(les,index1) in lessons" :index="index1">
              <template slot="title">{{les.class}}</template>
              <el-menu-item v-for="(le,index2) in les.lesson" :index="index2">
                {{le.front}}
                <img src="">
              </el-menu-item>
            </el-submenu>        
        </el-submenu>
        <div class="search">
            <el-input v-model="input" style="width: 250px;position: relative;top: -5px;"></el-input>
            <img src="../assets/搜索.jpg" style="width: 40px;height: 40px;position: relative;top: 10px;margin-left: 10px;">
        </div>
        <el-submenu index="4" style="float: right;margin-right: 50px;">8
          <template slot="title"><img src="../assets/女用户.png" style="width: 30px;">用户/管理员</template>
          <el-menu-item index="4-1" style="width: 150px;">个人信息</el-menu-item>
          <el-menu-item index="4-2" style="width: 150px;">课程收藏</el-menu-item>
          <el-menu-item index="4-3" style="width: 150px;">我的笔记</el-menu-item>
          <el-menu-item index="4-4" style="width: 150px;">我的考试</el-menu-item>
          <el-menu-item index="4-5" style="width: 150px;">会员状态</el-menu-item>
        </el-submenu>
      </el-menu>
      </el-row>
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
        {
          class:"专区一",
          lesson:[
            {front:"课程",num:102,time:79},
            {front:"课程",num:102,time:79},
            {front:"课程",num:102,time:79},
            {front:"课程",num:102,time:79},
          ]
        },
        {
          class:"专区二",
          lesson:[
            {front:"课程",num:102,time:79},
            {front:"课程",num:102,time:79},
            {front:"课程",num:102,time:79},
            {front:"课程",num:102,time:79},
          ]
        },
        {
          class:"专区三",
          lesson:[
            {front:"课程",num:102,time:79},
            {front:"课程",num:102,time:79},
            {front:"课程",num:102,time:79},
            {front:"课程",num:102,time:79},
          ]
        },
        {
          class:"专区四",
          lesson:[
            {front:"课程",num:102,time:79},
            {front:"课程",num:102,time:79},
            {front:"课程",num:102,time:79},
            {front:"课程",num:102,time:79},
          ]
        }
      ]
    }
  },
  methods:{
    handleSelect(key,keyPath){
      console.log(key,keyPath)
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
