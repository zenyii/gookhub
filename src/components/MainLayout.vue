<template>
  <div class="Main">
   <Navigator :userName="userData.name" :userImage="userData.user_image"></Navigator>
    <component :is="comList[current]" :userMsg="userData"></component>
  </div>
</template>

<script>
import Personal from './Personal.vue'
import Homepage from './HomePage.vue'
import Navigator from './Navigator.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      current:0,
      comList:['Homepage','Personal'],                
      menuItem:['个人信息','课程收藏','我的笔记','我的考试','会员状态','退出'],
      input:'',
      activeIndex:'',
      userData:{},
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
  watch:{
      '$route'(to,from){
          if(to.query.nowPage!=from.query.nowPage){
              this.current=to.query.nowPage
              //console.log(this.current)
              this.init()
          }
      }
  },
  mounted(){
    console.log("query:",this.$route.query);
    this.current=this.$route.query.nowPage||0
    console.log("this.current:",this.current);
    if(this.$route.params){
      console.log(this.$route.params);
      this.userData=this.$route.params.userData
      console.log(this.userData)
    }
  },
  components:{
    Personal,
    Homepage,
    Navigator
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
    },
    init:function(){
        this.comList=this.comList.slice()
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
