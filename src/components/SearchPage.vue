<template>
  <div class="hello">
    <el-row style="text-align: center;">
        <el-input v-model="content" style="width: 500px;margin-top: 30px;"><el-button slot="append" icon="el-icon-search" @click="search">搜索</el-button></el-input>
    </el-row>
    <el-row>
        <el-col :span="6" style="border-right: 1px solid white;">
            <div v-for="sort in sorts">{{sort}}</div>
            <div v-for="level in levels">{{level}}</div>
        </el-col>
        <el-col :span="18">
            <el-row>
                <el-col :span="8"></el-col>
                <el-col :span="16"></el-col>
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
      lessons:[
        {
          gmt_create: "2019-11-23 11:18:21",
          gmt_modified: "2019-11-23 11:18:21",
          id: 8,
          image: "https://api.gookhub.cn/static/images/lesson/mysql.jpg",
          label: "数据库,mysql",
          lesson_name: "mysql 开发入门",
          lesson_scale: "0",
          publishTime: "2019-11-23 11:18:21",
          sourceUrl: "https://cloud.tencent.com/edu/learning/course-1491",
          speaker: "杨老师",
          timespan: "39课时"
        },
      ],
      content:""
    }
  },
  methods:{
    search:function(){
        this.$api.get('/get/query_lesson',{keyword:this.content},res=>{
            if (res.status >= 200 && res.status < 300) {
            console.log(res)
           
            }else {
            console.log(res.Msg);
            }
        })
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
    background-image: url("../assets/背景.png");
    background-repeat:no-repeat;
    background-size: cover;
    
  }
</style>
