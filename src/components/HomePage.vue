<template>
  <div class="home">
    <el-row>
    <Navigator></Navigator>
  </el-row>
  <el-row :gutter="40" style="margin-left: 10px;">
    <el-col :span="18" style="margin-top: 30px;">                <!--大推荐栏-->
      <el-row :gutter="20">
        <el-col :span="12">   <!--//xxx热门课程-->
          <el-image :src="src[0]"></el-image>xxx热门课程
        </el-col>   
        <el-col :span="12">            <!--//四个小推荐课程-->
          <el-row :gutter="20">
            <el-col :span="12"><el-image :src="src[1]"></el-image>课程1</el-col>
            <el-col :span="12"><el-image :src="src[2]"></el-image>课程2</el-col>
          </el-row>
          <el-row :gutter="20">
              <el-col :span="12"><el-image :src="src[3]"></el-image>课程3</el-col>
              <el-col :span="12"><el-image :src="src[4]"></el-image>课程4</el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row style="margin-top: 30px;"><img src="../assets/广告.png"></el-row>    <!--广告位-->
      <el-row :gutter="20" style="margin-top: 20px;"> 
        <el-col :span="12"> <!--热门测试题-->
          <img src="../assets/火.png" style="width: 20px;"><label style="font-size: 25px;color: rgb(178, 20, 21);">热门测试题</label>
          <el-image :src="test" style="margin-top: 20px;"></el-image>
        </el-col>
        <el-col :span="12"> <!--名师直播-->
          <img src="../assets/直播.png" style="width: 25px;"><label style="font-size: 25px;color: rgb(37, 75, 130);">名师直播</label>
          <el-row :gutter="20" style="margin-top: 20px;">
            <el-col :span="8" v-for="lesson in liveLessons">
                <el-image  :src="lesson"></el-image>
            </el-col>
          </el-row>  
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="6">     <!--新闻排行-->
      <h1>新闻排行</h1> 
      <span>最新</span> <span>最热</span>
      <h6 v-for='(title,index) in news':key="index">{{index+1}} {{title}}</h6>
      <label>查看更多></label>
    </el-col>     
  </el-row>
  </div>
</template>

<script>
  import Navigator from './Navigator.vue'
export default {
  name: 'Home',
  data () {
    return {
      src:[
        'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
      ],
      test:'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
      liveLessons:[
        'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
      ],
      news:[
        '国家中长期教育改革发展纲要提出...',
        '国家中长期教育改革发展纲要提出...',
        '国家中长期教育改革发展纲要提出...',
        '国家中长期教育改革发展纲要提出...',
        '国家中长期教育改革发展纲要提出...',
        '国家中长期教育改革发展纲要提出...'
      ]
    }
  },
  methods:{
    
  },
  components:{
    Navigator
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home{
    color: white;
  }
</style>