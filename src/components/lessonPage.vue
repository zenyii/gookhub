<template>
  <div class="hello">
    <!--标题栏-->
    <el-row>
      <div style="background: rgba(40, 97, 150, 0.4);width: 87%;height: 80px;margin-top: 20px;margin-left: 80px;">
        <el-col :span="18">
          <el-row>
            <el-col><span style="color: red;margin-left: 5px;">{{lesson.level}}</span><span style="color: black;font-size: 30px;margin-left: 10px;">{{lesson.lesson_name}}</span></el-col>
          </el-row>
          <el-row style="margin-top: 10px;">
            <span style="color: rgb(29, 86, 84);margin-left: 5px;">{{lesson.label}}</span><span style="color: rgb(29, 86, 84);margin-left: 15px;">{{lesson.publishTime}}</span>
          </el-row>
        </el-col>
        <el-col :span="6">
          <el-row>
            <el-col :span="6"><img src="../assets/讲师图标.png" style="width: 60px;margin-top: 10px;"></el-col>
            <el-col :span="18" style="margin-top: 20px;">
              <el-row><span style="color: black;">{{lesson.speaker}}</span></el-row>
              <el-row><span style="color: rgb(73, 72, 72);">{{lesson.introduce}}</span></el-row>
            </el-col>
          </el-row>
        </el-col>
      </div>
    </el-row>
    <el-row style="margin-left: 80px;margin-top: 50px;">
      <el-col :span="16">
      <iframe height=600 style="width: 95%;" :src='lesson.sourceUrl' frameborder=0></iframe>
      </el-col>
    <el-col :span="6">
      <div class="List">
      <!--<div style="color: rgb(73, 72, 72);font-size: 25px;font-weight: bold;line-height: 40px;border-bottom: 1px solid white;width: 350px;margin-left: 15px;">视频选集<span style="float: right;">1/{{this.lesson.lessonList.length}}</span></div>-->
      <div style="overflow: auto;height: 500px;">
      <!--课程列表-->
      <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="rgba(139, 189, 221, 0)"
      text-color="black"
      active-text-color="#fff"
      style="margin-bottom:30px;"
      >
        <el-menu-item v-for="(list,index1) in lesson.lessonList" :index="'2-'+index1" style="font-size: 15px;height: 30px;line-height: 30px;">P{{index1+1}} {{list.title}}</el-menu-item>
      </el-menu>
      </div>
      </div>
    </el-col>
  </el-row>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      CurrentSrc:"//vjs.zencdn.net/v/oceans.mp4",
      lesson:{
        level:"vip2",
        LessonName:"零基础入门学习Python",
        class:"编程>python>初学",
        date:"2019/10/01",
        teacher:"刘讲师",
        introduce:"某高校著名讲师",
        sourceUrl:'//vjs.zencdn.net/v/oceans.mp4',
        lessonList:[
          {title:"简单介绍",src:""},
          {title:"愉快地开始",src:""},
          {title:"安装Python",src:""},
          {title:"第一个Python程序",src:""},
          {title:"数据类型和变量",src:""},
          {title:"字符串和编码",src:""},
          {title:"使用list和tuple",src:""},
          {title:"条件判断",src:""},
          {title:"循环",src:""},
          {title:"使用dict和set",src:""},
          {title:"函数",src:""},
          {title:"简单介绍",src:""},
          {title:"愉快地开始",src:""},
          {title:"安装Python",src:""},
          {title:"第一个Python程序",src:""},
          {title:"数据类型和变量",src:""},
          {title:"字符串和编码",src:""},
          {title:"使用list和tuple",src:""},
          {title:"条件判断",src:""},
          {title:"循环",src:""},
          {title:"使用dict和set",src:""},
          {title:"函数",src:""},
        ]
      }
    }
  },
  components:{
    
  },
  beforeCreate(){
    let id = this.$route.query.id;
    this.$api.get('/get/one_lesson',{id:id},res=>{
      if (res.status >= 200 && res.status < 300) {
        console.log(res)
        this.lesson = res.data.data
        console.log(this.lesson)
      }else {
        console.log(res.message);
      }
    })
  },
  mounted() { 
    
  },
  methods:{
   handleOpen:function(){

   },
   handleClose:function(){

   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    color: white;
    width: 100%;
    height: 100%;
    background-image: url("../assets/back.png");
    background-repeat:no-repeat;
    background-size: cover;
  }
  .List{
    background:rgba(139, 189, 221, 0.6);
    height: 600px;
    border-radius: 25px;
  }
</style>
