<template>
  <div class="hello">
    <!--新闻标题及内容-->
    <el-row>
        <el-col :span="20" style="text-align: center;">
            <h1 style="color: rgb(24, 14, 66);">{{news.title}}</h1>
            <el-row><span style="color: rgb(31, 104, 33);">{{news.newsType}}</span>
                <span style="color: rgb(140, 145, 147);margin-left: 100px;">{{news.gmt_create}}</span>
            </el-row>
            <p style="margin-top: 50px;">{{news.content}}</p>
        </el-col>
        <el-col :span="4" style="color: black;height:1000px;border-left: 2px solid white;margin-top: 20px;">     <!--新闻排行-->
            <div style="margin-left: 30px;">
            <h1 style="color: rgb(24, 15, 66);">新闻排行</h1> 
            <span>最新</span> <span style="color: rgb(239, 37, 66);">最热</span>
            <el-link v-for='(newItem,index) in allNews':key="index" :underline="false" @click="searchNew(newItem.id)" style="font-size: 12px;margin-bottom: 5px;display: block;">
              <span style="color: rgb(239, 37, 66);font-size: 15px;margin-right: 5px;" v-if="index<3">{{index+1}}</span>
              <span style="font-size: 15px;margin-right: 5px;" v-if="index>2">{{index+1}}</span> {{newItem.title}}
            </el-link>
            <label style="color: rgb(239, 37, 66);font-size: 13px;">查看更多>>></label>
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
        news:{},
        allNews:[]
    }
  }, props:[
    'userMsg'
  ],
  beforeCreate(){
    let id = this.$route.query.newId;
     let getNew = new Promise((resolve,reject)=>{
        this.$api.get('/get/one_news',{id:id},res=>{
          if (res.status >= 200 && res.status < 300) {
            resolve(res)
          }else{
            reject(res)
          }
        })
      }) 
      let getAllNews = new Promise((resolve,reject)=>{
        this.$api.get('/get/all_news',{},res=>{
          if (res.status >= 200 && res.status < 300) {
            resolve(res)
          }else{
            reject(res)
          }
        })
      })
      Promise.all([getNew,getAllNews]).then(result=>{
         //console.log(result)
          this.news = result[0].data.data
          this.allNews = result[1].data.data
      }).catch((error)=>{
        console.log(error)
      })
  },
  methods:{
    searchNew(id){
        this.$api.get('/get/one_news',{id:id},res=>{
        if (res.status >= 200 && res.status < 300) {
            //console.log(res)
            this.news = res.data.data
            //console.log(this.news)
        }else {
            console.log(res.message);
        }
        })
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
</style>
