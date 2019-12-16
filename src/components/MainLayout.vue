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
import LessonPage from './LessonPage.vue'
import SearchPage from './SearchPage.vue'
import NewPage from './NewPage.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      current:0,
      comList:['Homepage','Personal','LessonPage','SearchPage','NewPage'],                
      menuItem:['个人信息','课程收藏','我的笔记','我的考试','会员状态','退出'],
      input:'',
      activeIndex:'',
      userData:{},
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
    Navigator,
    LessonPage,
    SearchPage,
    NewPage
  },
  methods:{
    handleSelect(key,keyPath){
      
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
