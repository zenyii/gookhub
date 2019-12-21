<template>
  <div class="hello">
    <el-row>
        <div style="display:flex;align-items: center;justify-content: center;margin:20px 0;">
            <img src="../assets/logo.png" style="width: 50px; margin: 10px;">
            <span style="font-size: 40px;font-weight: bold;">在线学习网站</span>
        </div>
    </el-row>
    <el-row>
        <div style="width: 80%;margin:20px auto;">
        <el-steps :active="active" align-center finish-status="success">
            <el-step title="输入注册信息"></el-step>
            <el-step title="点击完成注册"></el-step>
            <el-step title="重新登录"></el-step>
        </el-steps>
        </div>
    </el-row>
    <el-row>
				<div style="width: 700px;margin: auto;">
				<el-row>
					<el-col :span="12">
						<div>用户名：</div>
						<el-input v-model="name" placeholder="请输入用户名" style="width: 300px;" clearable></el-input>
					</el-col>
					<el-col :span="12">
							<div>性别:  </div>
							<template>
									<el-radio v-model="radio" label="男">男</el-radio>
									<el-radio v-model="radio" label="女">女</el-radio>
							</template>
						</el-col>
				</el-row>
				<el-row style="margin-top: 30px;">
					<el-col :span="12">
        		<div>手机号：</div>
        		<el-input v-model="account" placeholder="请输入手机号" style="width: 300px;" clearable @blur="checkCount()"></el-input>
						<div style="font-size: 12px;color:red;" v-if="!countRight">*{{acountAlert}}*</div>
					</el-col>
					<el-col :span="12">
							<div>邮箱:  </div>
							<el-input v-model="email" placeholder="请输入邮箱" style="width: 300px;" clearable @blur="checkMail()"></el-input>
							<div style="font-size: 12px;color:red;" v-if="!mailRight">*请输入正确邮箱*</div>
						</el-col>
				</el-row>
				<el-row style="margin-top: 30px;">
					<el-col :span="12">
							<div>密码：</div>
							<el-input placeholder="请输入密码" v-model="password" style="width: 300px;" show-password clearable @blur="checkPwdFirst()"></el-input>
							<el-progress style="margin-top: 10px;width: 300px;" :percentage="percent" :format="format" :color="customColors"></el-progress>
					</el-col>
					<el-col :span="12">
							<div>确认密码：</div>
							<el-input @blur="checkPwd()" placeholder="请再次输入密码" v-model="password2" style="width: 300px;" show-password clearable></el-input>
							<div style="font-size: 12px;color:red;">{{notice}}</div>
					</el-col>
				</el-row>     
        <el-button v-loading='load' type="danger" style="width: 300px;font-size: 20px;margin-top: 50px;" @click="regist()">提交注册</el-button>
        </div>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {   
			account:'',
			password:'', 
			password2:'',                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
			acountAlert:'',
			countRight:true,
			pwdRight:true,
			active:1,
			percent: 0,
			customColors: [
				{color: '#F44D4D', percentage: 30},
				{color: '#FFD700', percentage: 60},
				{color: '#4EF279', percentage: 80}
			],
			notice:'',
			radio:'男',
			mailRight:true,
			name:'',
			email:'',
			load:false
    }
	},
  methods:{
    checkCount:function(){
      let e = /^\w{6,12}$/;
      if(this.account==''){
        this.countRight=false;
        this.acountAlert="手机号不能为空"
      }
      else if(!e.test(this.account)){
        this.countRight=false;
        this.acountAlert="手机号格式错误"
      }
      else{
        this.countRight=true;
      }
    },
    checkPwd:function(){
			if(this.password!=this.password2){
				this.pwdRight=false
				this.notice='*密码输入不一致*'
			}
			else{
				this.notice=''
				this.active=2;
			}
		},
		regist:function(){
			this.active=3;
			this.load=true;
			if(this.account==''||this.password==''||this.password2==''){
				this.notice='*请输入完整信息*'
			}else if(this.password!=this.password2){
				this.notice='*密码不一致*'
			}
			else{
				this.$api.post('//login/register',{
					tel:this.account,
					sex:this.radio,
					email:this.email,
					password:this.password,
					name:this.name
				},res=>{
					console.log(res)
					if (res.status >= 200 && res.status < 300) {
						console.log(login)
						this.$router.push({path:'/login'})
					}
					else{
						
					}
				})
			}
			this.load=false
		},
		format(percentage) {
      if(percentage>60){
				return '高'
			}
			else if(percentage>20){
				return '中'
			}else{
				return '低'
			}
		},
		checkPwdFirst:function(){
			var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g")  //强
			var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g")  //中
			var enoughRegex = new RegExp("(?=.{6,}).*", "g") //弱

			let low = enoughRegex.test(this.password);
			let middle = mediumRegex.test(this.password);
			let high = strongRegex.test(this.password);
			console.log(this.radio)
			if(high){
				this.percent=90;
			}else if(middle){
				this.percent=55;
			}else{
				this.percent=10;
			}
		},
		checkMail:function(){
			var mailRegex = new RegExp('^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$')
			let bool=mailRegex.test(this.email)
			console.log(bool)
			if(!mailRegex.test(this.email)){
				this.mailRight=false
			}
			else{
				this.mailRight=true
			}
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
    background-image: url("../assets/back1.jpg");
    background-repeat:no-repeat;
    background-size: cover;
  }
</style>
