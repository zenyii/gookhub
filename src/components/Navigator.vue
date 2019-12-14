<template>
  <div class="home">
      <el-row>             <!--导航栏-->
        <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        class="el-menu-demo"
        @select="handleSelect"
        background-color="rgb(26,26,53)"
        text-color="#fff"
        active-text-color="#fff">
        <el-menu-item index="1" style="font-size: 25px;" @click="change(6)"><img src="../assets/logo.png" style="width: 40px; margin: 10px;">在线学习网站</el-menu-item>
        <!--课程分类栏-->
        <el-submenu index="2" style="margin-left: 50px;">
            <template slot="title">课程分类</template>
            <el-submenu v-for="(les,index1) in lessons" :index="'2-'+index1">
              <template slot="title">{{les.class}}</template>
                  <el-row :gutter="10" style="width: 500px;">
                    <el-col :span="8" v-for="(le,index2) in les.lesson" :index="'2-'+index1+'-'+index2" v-if="index2 < 3">
                        <el-image :src="le.front" style="margin:0 5px;"></el-image>
                        <span style="color: white;font-size: 15px;">{{le.num}}节  {{le.time}}h</span>
                    </el-col>     
                  </el-row>
                  <el-row :gutter="10" style="width: 500px;">
                      <el-col :span="8" v-for="(le,index2) in les.lesson" :index="'2-'+index1+'-'+index2" v-if="index2 > 2">
                          <el-image :src="le.front" style="margin:0 5px;"></el-image>
                          <span style="color: white;font-size: 15px;">{{le.num}}节  {{le.time}}h</span>
                      </el-col>     
                  </el-row>
                  <span style="float:right;color: white; font-size: 13px; margin-right: 10px;">查看更多</span>
            </el-submenu>        
        </el-submenu>
        <!--搜索栏-->
        <div class="search">  
            <el-input v-model="input" style="width: 250px;position: relative;top: -5px;"></el-input>
            <img src="../assets/搜索.jpg" @click="change(7)" style="width: 40px;height: 40px;position: relative;top: 10px;margin-left: 10px;">
        </div>
        <!--头像及昵称栏-->
        <el-submenu index="4" style="float: right;width: 200px;">
          <template slot="title"><img :src="userImage" style="width: 30px;border-radius: 50%;margin-right: 10px;">{{userName}}</template>
          <el-menu-item v-for="(item,index3) in menuItem" :index="'4-'+index3" style="text-align: center;" @click="change(index3)">{{item}}</el-menu-item>
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
      menuItem:['个人信息','课程收藏','我的笔记','我的考试','会员状态','退出'],
      lessons:[
        {
          class:"专区一",
          lesson:[
            {front:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",num:102,time:79},
            {front:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",num:102,time:79},
            {front:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",num:102,time:79},
            {front:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",num:102,time:79},
            {front:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",num:102,time:79},
            {front:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",num:102,time:79},
          ]
        },
        {
          class:"专区二",
          lesson:[
            {front:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",num:102,time:79},
            {front:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",num:102,time:79},
            {front:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",num:102,time:79},
            {front:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",num:102,time:79},
            {front:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",num:102,time:79},
            {front:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",num:102,time:79},
          ]
        },
        {
          class:"专区三",
          lesson:[
            {front:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",num:102,time:79},
            {front:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",num:102,time:79},
            {front:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",num:102,time:79},
            {front:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",num:102,time:79},
            {front:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",num:102,time:79},
            {front:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",num:102,time:79},
          ]
        },
        {
          class:"专区四",
          lesson:[
            {front:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",num:102,time:79},
            {front:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",num:102,time:79},
            {front:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",num:102,time:79},
            {front:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",num:102,time:79},
            {front:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",num:102,time:79},
            {front:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",num:102,time:79},
          ]
        }
      ]
    }
  },
  props:[
    'userName',
    'userImage'
  ],
  methods:{
    handleSelect(key,keyPath){
      
    },
    change(index){
      if(index==5){
        this.$router.push('/login')
      }
      else if(index==6){
        this.$router.push({path:'/index',query:{nowPage:0,itemIndex:index}})
      }
      else if(index==7){
        this.$router.push({path:'/index',query:{nowPage:3,itemIndex:index,content:this.input}})
        this.input='';
      }
      else{
        this.$router.push({path:'/index',query:{nowPage:1,itemIndex:index}})
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home{
    color: white;
  }
  .search{
    width: 350px;
    height: 50px;
    position: absolute;
    left: 450px;
  }
</style>
