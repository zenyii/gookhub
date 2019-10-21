<template>
  <div class="home">
    <el-row>
    <Navigator></Navigator>
  </el-row>
  <el-row>
    <el-col :span="18">                <!--大推荐栏-->
      <el-row>
        <el-col :span="12">xxx热门课程</el-col>   <!--//xxx热门课程-->
        <el-col :span="12">            <!--//四个小推荐课程-->
          <el-row>
            <el-col :span="12">课程1</el-col>
            <el-col :span="12">课程2</el-col>
          </el-row>
          <el-row>
              <el-col :span="12">课程3</el-col>
              <el-col :span="12">课程4</el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="6">     <!--新闻排行-->
      <h1>新闻排行</h1> 
      <span>最新</span> <span>最热</span>
      <h6>1 国家中长期教育改革发展纲要提出...</h6>
      <h6>2 国家中长期教育改革发展纲要提出...</h6>
      <h6>3 国家中长期教育改革发展纲要提出...</h6>
      <h6>4 国家中长期教育改革发展纲要提出...</h6>
      <h6>5 国家中长期教育改革发展纲要提出...</h6>
      <h6>6 国家中长期教育改革发展纲要提出...</h6>
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
