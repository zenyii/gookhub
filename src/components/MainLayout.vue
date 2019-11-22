<template>
  <div class="Main">
    <el-row>             <!--导航栏-->
        <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        class="el-menu-demo"
        @select="handleSelect"
        background-color="black"
        text-color="#fff"
        active-text-color="#fff">
        <el-menu-item index="1" style="font-size: 25px;" @click="goHome"><img src="../assets/logo.png" style="width: 40px; margin: 10px;">在线学习网站</el-menu-item>
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
            <img src="../assets/搜索.jpg" style="width: 40px;height: 40px;position: relative;top: 10px;margin-left: 10px;">
        </div>
        <!--头像及昵称栏-->
        <el-submenu index="4" style="float: right;width: 200px;">
            <template slot="title"><img src="../assets/女用户.png" style="width: 30px;">用户/管理员</template>
            <el-menu-item v-for="(item,index3) in menuItem" :index="'4-'+index3" style="text-align: center;" @click="change(index3)">{{item}}</el-menu-item>
        </el-submenu>
        </el-menu>
    </el-row>
    <component :is="comList[current]"></component>
  </div>
</template>

<script>
import Personal from './Personal.vue'
import Homepage from './HomePage.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      current:0,
      comList:['Homepage','Personal'],
      menuItem:['个人信息','课程收藏','我的笔记','我的考试','会员状态','退出'],
      input:'',
      activeIndex:'',
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
  mounted(){
    console.log("query:",this.$route.query);
    this.current=this.$route.query.currCom||0
    console.log("this.current:",this.current);
  },
  components:{
    Personal,
    Homepage
  },
  methods:{
    handleSelect(key,keyPath){
      
    },
    change(index){
      if(index==5){
        this.$router.push('/login')
      }else{
        this.current=1
      }
    },
    goHome:function(){
        this.current=0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Main{
    color: white;
    width: 100%;
    height: 100%;
    background-image: url("../assets/back.png");
    background-repeat:no-repeat;
    background-size: cover;
  }
  .search{
    width: 350px;
    height: 50px;
    position: absolute;
    left: 450px;
  }
</style>
