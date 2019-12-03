<template>
  <div class="home">
 <!-- <Navigator></Navigator>-->
  <el-row :gutter="40" style="margin-left: 10px;">
    <el-col :span="20" style="margin-top: 30px;">                <!--大推荐栏-->
      <el-row>
        <el-col :span="12">   <!--//xxx热门课程-->
          <div style="overflow: hidden;width: 80%;height: 80%;"><el-image :src="freeLesson[0].image" @click="goLesson(freeLesson[0].id)" class="imgAnima"></el-image></div><div>{{freeLesson[0].lesson_name}}</div>
        </el-col>      
        <el-col :span="12" style="margin-left: -70px;">            <!--//四个小推荐课程-->
          <el-row :gutter="20">
            <el-col :span="12"><div style="overflow: hidden;width: 100%;height: 100%;"><el-image @click="goLesson(freeLesson[1].id)" :src="freeLesson[1].image" class="imgAnima"></el-image></div>{{freeLesson[1].lesson_name}}</el-col>
            <el-col :span="12"><div style="overflow: hidden;width: 100%;height: 100%;"><el-image @click="goLesson(freeLesson[2].id)" :src="freeLesson[2].image" class="imgAnima"></el-image></div>{{freeLesson[2].lesson_name}}</el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12"><div style="overflow: hidden;width: 100%;height: 100%;"><el-image @click="goLesson(freeLesson[3].id)" :src="freeLesson[3].image" class="imgAnima"></el-image></div>{{freeLesson[3].lesson_name}}</el-col>
            <el-col :span="12"><div style="overflow: hidden;width: 100%;height: 100%;"><el-image @click="goLesson(freeLesson[4].id)" :src="freeLesson[4].image" class="imgAnima"></el-image></div>{{freeLesson[4].lesson_name}}</el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row style="margin-top: 30px;"><img style="width: 100%;" src="../assets/广告.png"></el-row>    <!--广告位-->
      <el-row :gutter="20" style="margin-top: 20px;"> 
        <el-col :span="12"> <!--热门测试题-->
          <img src="../assets/火.png" style="width: 20px;"><label style="font-size: 25px;color: rgb(178, 20, 21);">热门测试题</label>
          <el-image :src="test" style="margin-top: 20px;"></el-image>
        </el-col>
        <el-col :span="12" style="border-left:2px solid white"> <!--名师直播-->
          <img src="../assets/直播.png" style="width: 25px;"><label style="font-size: 25px;color: rgb(37, 75, 130);">名师直播</label>
          <el-row :gutter="20" style="margin-top: 20px;">
            <el-col :span="8" v-for="lesson in liveLessons">
                <el-image  :src="lesson"></el-image>
            </el-col>
          </el-row>
          <el-row :gutter="20" style="margin-top: 20px;">
            <el-col :span="8" v-for="lesson in liveLessons">
              <el-image  :src="lesson"></el-image>
            </el-col>
          </el-row>
          <el-row :gutter="20" style="margin-top: 20px;">
              <el-col :span="8" v-for="lesson in liveLessons">
                <el-image  :src="lesson"></el-image>
              </el-col>
          </el-row>   
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="4" style="color: black;height:1000px;border-left: 2px solid white;margin-top: 20px;">     <!--新闻排行-->
      <h1 style="color: rgb(24, 15, 66);">新闻排行</h1> 
      <span>最新</span> <span style="color: rgb(239, 37, 66);">最热</span>
      <div v-for='(newItem,index) in news':key="index" style="font-size: 12px;margin-bottom: 5px;"><span style="color: rgb(239, 37, 66);font-size: 15px;margin-right: 5px;" v-if="index<3">{{index+1}}</span><span style="font-size: 15px;margin-right: 5px;" v-if="index>2">{{index+1}}</span> {{newItem.title}}</div>
      <label style="color: rgb(239, 37, 66);font-size: 13px;">查看更多>>></label>
    </el-col>     
  </el-row>
  </div>
</template>

<script>
//import axios from 'axios'
//import Navigator from './Navigator.vue'
export default {
  name: 'Home',
  data () {
    return {
      userData:{},
      freeLesson:[],
      test:'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
      liveLessons:[
        'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
      ],
      news:[]
    }
  },
  created:function(){
    this.init();
  },
  methods:{
    goLesson:function(id){
      this.$router.push({path:'/index',query:{id:id,nowPage:2}})
    },
    init:function(){
      let getFree = new Promise((resolve,reject)=>{
        this.$api.get('/get/free_lesson',{},res=>{
          if (res.status >= 200 && res.status < 300) {
            resolve(res)
          }else{
            reject(res)
          }
        })
      }) 
      let getNews = new Promise((resolve,reject)=>{
        this.$api.get('/get/all_news',{},res=>{
          if (res.status >= 200 && res.status < 300) {
            resolve(res)
          }else{
            reject(res)
          }
        })
      }) 
      let getAll = new Promise((resolve,reject)=>{
        this.$api.get('/get/all_lesson',{},res=>{
          if (res.status >= 200 && res.status < 300) {
            resolve(res)
          }else{
            reject(res)
          }
        })
      })
      Promise.all([getFree,getNews,getAll]).then(result=>{
          console.log(result)
          this.freeLesson = result[0].data.data
          this.news = result[1].data.data
      }).catch((error)=>{
        console.log(error)
      })
    }
  },
  components:{
    //Navigator
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home{
    color: white;
    background-image: url("../assets/back.png");
    background-repeat:no-repeat;
    background-size: cover;   
  }
  .imgAnima{
    width: 100%;
    object-fit:cover;
    cursor: pointer;
    transition: all 1s;
    -webkit-transition: all 1s;
  }
  .imgAnima:hover{
    transform:scale(1.1);
  }
  
</style>