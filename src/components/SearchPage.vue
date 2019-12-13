<template>
  <div class="hello">
    <el-row style="text-align: center;">
        <el-input v-model="content" style="width: 500px;margin-top: 30px;"><el-button slot="append" icon="el-icon-search" @click="search">搜索</el-button></el-input>
    </el-row>
    <el-row style="margin-top: 50px;">
        <el-col :span="5" style="border-right: 1px solid white;">
            <el-row v-for="sort in sorts">{{sort}}</el-row>
            <el-row v-for="level in levels">{{level}}</el-row>
        </el-col>
        <el-col :span="18" style="margin-left: 50px; ">
          <el-row v-for="lesson in lessons" style="margin-bottom: 20px;">
            <div @click="goLesson(lesson.id)">
            <el-col :span="5"><div style="overflow: hidden;"><el-image class="imgAnima" :src="lesson.image"></el-image></div></el-col>
            <el-col :span="15" style="margin-left:30px;">
              <el-row>
                <span style="color: red;font-size: 10px;">{{userMsg.userVipMsg}}</span>
                <span style="margin-left: 5px;font-size: 25px;">{{lesson.lesson_name}}</span>
                <span style="color: rgb(29, 86, 84);margin-left: 100px;font-size: 13px;">{{lesson.label}}</span>
              </el-row>
              <el-row style="margin-top: 10px;font-size: 13px;pointer-events: none;">讲师:{{lesson.speaker}}</el-row>
              <el-row style="margin-top: 5px;font-size: 13px;">课时:{{lesson.timespan}}</el-row>
            </el-col>
            </div>
          </el-row>
        </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
      sorts:["相关","最多播放","最多收藏"],
      levels:["免费","白银会员","黄金会员","钻石会员","全部"],
      lessons:[],
      content:""
    }
  }, props:[
    'userMsg'
  ],
  methods:{
    search:function(){
        this.$api.get('/get/query_lesson',{keyword:this.content},res=>{
            if (res.status >= 200 && res.status < 300) {
            console.log(res)
            this.lessons=res.data.data
           
            }else {
            console.log(res.Msg);
            }
        })
    },
    goLesson:function(id){
      console.log(id);
      this.$router.push({path:'/index',query:{id:id,nowPage:2}})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    color: black;
    width: 100%;
    height: 100%;
    background-image: url("../assets/背景.png");
    background-repeat:no-repeat;
    background-size: cover;
  }
  .imgAnima{
    width: 100%;
    cursor: pointer;
    transition: all 1s;
    -webkit-transition: all 1s;
  }
  .imgAnima:hover{
    transform:scale(1.1);
  }
</style>
