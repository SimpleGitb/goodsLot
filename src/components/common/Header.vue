<template>
  <div class="header" @click="menuMethod2">
		<div class="pc-nav">
			<div class="logo"><el-image src="static/img/home/band.png"></el-image></div>
			
			<div class="top-ri">
					<div class="menu_item">
					<el-menu 
						class="el-menu-demo" 
						mode="horizontal" 
						background-color="#2577E3" 
						text-color="#fff" 
						active-text-color="#fff"
						:default-active="onRoutes"
						router>
						<el-menu-item index="defaultPage" key="defaultPage">首页</el-menu-item>
						<el-submenu index="2">
							<template slot="title">产品中心</template>
							<el-menu-item index="productCenter" key="productCenter">货运江湖水运版</el-menu-item>
						</el-submenu>
						<el-menu-item index="about_us">关于我们</el-menu-item>
						<el-menu-item index="news">新闻动态</el-menu-item>
					</el-menu>
				</div>
				<div class="headPhone">
					<div><img src="static/img/home/phone.png" alt=""></div>
					<div>热线电话：</div>
					<div>{{phone}}</div>
				</div>
			</div>
		</div>
		<div class="mobile">
			<div class="mobile-banner">
				<img src="static/img/home/band.png">
			</div>
			<!-- 导航条 -->
			<div class="mobile-nav" @click.stop="menuMethod">
				<div class="mobile_title">
					<div class="nav_title">{{mobileTitle}}</div>
					<div class="nav_title2">
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
			</div>
			<div class="down_menu" v-if="menuShow">
				<div @click="toRouter('1')">首页</div>
				<div @click="toRouter('2')">产品中心</div>
				<div @click="toRouter('3')">关于我们</div>
				<div @click="toRouter('4')">新闻动态</div>
			</div>
		</div>
		
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
import store from '../../store/index.js'
export default {
  data() {
    return {
			activeIndex: '1',
			menuShow: false,
			phone: '400-8393-188',
			mobileTitle: ''
    };
  },
  computed: {
	onRoutes() {
		return this.$route.path.replace("/", "");
	},
	isFollow () {
		return this.$store.state.routerState.isBack;　　//需要监听的数据
	}
  },
  methods: {
	  menuMethod(){
		  this.menuShow = !this.menuShow;
		  if(this.menuShow){
			  $('.content').css("opacity",".5");
		  }else{
			  $('.content').css("opacity","1");
		  }
		  
	  },
	  menuMethod2(){
		  this.menuShow = false;
		  $('.content').css("opacity","1");
	  },
	handleSelect(key, keyPath) {
		console.log(key, keyPath);
	  },
	toRouter(name){
		if(name == '1'){
			this.$router.push({path:'/defaultPage'})
			store.commit('changeIsBack', '首页');
		}
		else if(name == '2'){
			store.commit('changeIsBack', '产品中心');
			this.$router.push({path:'/productCenter'})
		}else if(name == '3'){
			store.commit('changeIsBack', '关于我们');
			this.$router.push({path:'/about_us'})
		}else if(name == '4'){
			// this.mobileTitle = '新闻动态';
			store.commit('changeIsBack', '新闻动态');
			this.$router.push({path:'/news'})
		}
	}
  },
  created() {
	  var data = JSON.parse(localStorage.getItem('about')).phone;
	  if(data){
		  this.phone = data;
	  }
	  this.mobileTitle = this.$store.state.routerState.isBack;
  },
  watch: {
    isFollow (newVal, oldVal) {
		this.mobileTitle = newVal;
		//do something
	}
  }
};
</script>
<style scoped lang="less">
// @import '../../../static/css/nav.css';
/**段书写代码样式开始*/
.headPhone{
	position: absolute;
    top: 0;
    right: 0;
    color: #000000;
    display: flex;align-items:center;
    font-size: 15px;
    flex-direction: row;
	justify-content: center;
	margin-right:4.5rem;
    margin-top: .3rem;
	img{
		width: 20px;
		height: 20px;
	}
	div:nth-child(1){
		margin-right: 5px;
	}
	div:nth-child(3){
		color: #2577E3;
	}
}
@media screen and (min-width: 600px) {
	.bandimg{
		width: 100%!important;
	}
	.logo{height:100%;display:flex;align-items:center;line-height:0;width:48%}
.pc-nav{height:100%;display: flex;justify-content:space-between}

	.pc-nav{max-width:12rem;margin:auto}
	.headPhone{height:50%;margin-top:0;position:static;margin-right:0;justify-content:flex-end}
	.top-ri{width:48%;}
}
@media screen and (max-width: 600px) {
	.mobile{
		display: block!important;
	}
	.pc-nav{
		display: none;
	}
}
.mobile{
	display: none;
}
.mobile-nav{
	 width: 100%;
	 height: 50px;
	 background: #2577E3;
	 position: relative;
	 z-index: 12;
	 .mobile_title{float: right;display: flex;flex-direction: row;align-items: center;}
	 .nav_title{padding-top: 8px;padding-right: 20px;}
	 .nav_title2{
		 margin-top: 10px;
		 margin-right: 10px;
		 width: 45px;
		 height: 30px;
		 display: flex;
		 flex-direction: column;
		 justify-content: space-around;
		 >div{
			 width:35px;height: 2px;background: #fff;border-radius: 5px;
		 }
	 }
 }
 
 /**段书写代码样式结束*/
 
.mobile-banner{
	padding: 10px 15px;
}
.mobile-banner img{
	max-width: 100%;
}
.menu_item{
	width: 8rem;
	// height: 0.48rem;
	background: #2577E3;
	position: absolute;
	bottom: 0;
	right: 0;
	border-left: 0.5rem solid #fff;
	// border-top: 50px solid blue;
	border-bottom: 0.48rem solid #2577E3;
}
.el-menu-demo{
	position: absolute;
	
	
}
.el-menu--horizontal>.el-menu-item{
	line-height: .48rem;
	height: .48rem;
}

@media screen and (min-width: 1800px) {
.bandimg{
	width: 5.16rem;
	margin-top: 0.1rem;
	margin-left:3.5rem;
}

.header {
	box-shadow: 0 0px 12px 0 rgba(0, 0, 0, 0.1);
  // position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 1rem;
  color: #fff;
  font-family: "微软雅黑";
  background: #fff;
}
.nav_phone,.down_menu{
	display: none;
}
}
@media screen and (max-width: 1800px) {

.bandimg{
	width: 5.16rem;
	margin-top: 0.38rem;
	margin-left: 3rem;
}
.header {
	box-shadow: 0 0px 12px 0 rgba(0, 0, 0, 0.1);
  // position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 1.40rem;
  color: #fff;
  font-family: "微软雅黑";
  background: #fff;
}
.nav_phone,.down_menu{
	display: none;
}
.headPhone{
	position: absolute;
    top: 0;
    right: 0;
    color: #000000;
    display: flex;
    font-size: 15px;
    flex-direction: row;
	justify-content: center;
	margin-right: 3rem;
    margin-top: .3rem;
	img{
		width: 20px;
		height: 20px;
	}
	div:nth-child(1){
		margin-right: 5px;
	}
	div:nth-child(3){
		color: #2577E3;
	}

}
}
@media screen and (max-width: 1300px){
	.menu_item{
// width: 6rem;
// height: 0.48rem;
background: #2577E3;
position: absolute;
bottom: 0;
right: 0;
border-left: 0.5rem solid #fff;
// border-top: 50px solid blue;
border-bottom: 0.48rem solid #2577E3;
}
}
@media screen and (max-width: 600px) {
.header{
	box-shadow: 0 0px 12px 0 rgba(0, 0, 0, 0.1);
  	min-height: 100px;
  }
 .menu_item,.headPhone{
	visibility: hidden;
 }
 .bandimg{
	width: 80%;
 	height: 55px;	
 	margin-top: 20px;
 	margin-left: 20px;
 }
 .nav_phone{
	 width: 100%;
	 height: 60px;
	 background: #2577E3;
	 position: relative;
	 >div{
		 margin-top: 7.5px;
		 margin-right: 20px;
		 width: 45px;height: 38px;
		 float: right;
		 display: flex;
		 flex-direction: column;
		 justify-content: space-around;
		 >div{
			 width:45px;height: 2px;background: #fff;border-radius: 5px;
		 }
	 }
 }
 .down_menu{
 	width: 100%;
 	height: 200px;
 	background: #2577E3;
	position: absolute;
    z-index: 1000;
	border-top: 1px solid beige;
	display: flex;
	flex-direction: column;
	color: #fff;
	font-size: 18px;
	>div{
		line-height: 50px;
		padding-left: 20px;
	}
 }
}
@media (min-width: 993px) and (max-height: 600px) {
	.bandimg{
		width: 100%;
		height: auto;
	}
}

@media (min-width: 768px) and (max-height: 992px) {
	.bandimg{
		width: 100%;
		height: auto;
	}
	
}

@media (min-width: 480px) and (max-height: 767px) {
	.bandimg{
		width: 100%;
		height: auto;
	}
}
@media (min-width:600px) and (max-width:960px){
	.header,.pc-nav{width: 960px;max-width: 960px;}
	.top-ri,.menu_item{width: 480px;}
	
}
</style>
<style>
	.header .el-menu--horizontal>.el-submenu .el-submenu__title{
		line-height: .48rem;
		height: .48rem;
	}
	.header .el-submenu__title i {
		color: #fff;
	}
	.header{
		position: fixed;
    z-index: 10;
	}
</style>
