<template>
<div>
	<div class="mobile-footer">
		<div class="foot-erm">
			<div><img :src="aboutData.codeUrl" alt="二维码图片"></div>
			<div><span>官方微信公众号</span></div>
		</div>
		<div class="foot-text" style="margin-top:20px;">
			<!-- <p>广东货多多物流科技股份有限公司</p> -->
			<p>粤ICP备18111920号</p>
			<p>增值电信业务经营许可证：粤B2-20190474</p>
			<!-- <p>地址：{{aboutData.address}} </p> -->
			<p> 电话：{{aboutData.phone}} </p>
		</div>
	</div>
	<div class="footer">
		<div class="footer_up">
			<div class="footer_right">
				<div>
					<div><img src="static/img/product/downImg.jpg" alt="二维码图片"></div>
					<div><span>货主端APP</span></div>
				</div>
			</div>
			<div class="footer_right">
				<div>
					<div><img src="static/img/product/upImg.jpg" alt="二维码图片"></div>
					<div><span>船东端APP</span></div>
				</div>
			</div>
			<div class="footer_right">
				<div>
					<div><img :src="aboutData.codeUrl" alt="二维码图片"></div>
					<div><span>官方微信公众号</span></div>
				</div>
			</div>
		</div>
		<div class="footer_left">
			<div>
				<div>广东货多多物流科技股份有限公司  版权所有  增值电信业务经营许可证：粤B2-20190474  粤ICP备18111920号—1
				<span>  地址：{{aboutData.address}}</span>
				</div>
			</div>
		</div>
		
	</div>
</div>
</template>

<script>
import {about} from '../../api/userMessage.js'
export default {
  data() {
    return {
		aboutData: {
			phone: '',
			codeUrl: '',
			address: ''
		}
    };
  },
  computed: {},
  methods: {
	  getAbout(){
			about().then(ret=>{
				localStorage.about = JSON.stringify(ret.data);
				this.aboutData = ret.data;
			})
    	},
  },
  created() {
	  this.getAbout();
	//   this.aboutData = JSON.parse(localStorage.getItem('about'));
  },
  watch: {
    // $route(routers) {
    //   this.username = sessionStorage.username;
    // }
  }
};
</script>
<style scoped lang="less">
.mobile-footer{
	display: none;
}
@media screen and (min-width: 600px) {
.footer {
  box-sizing: border-box;
  width: 100%;
  min-height: 252px;
  color: #2B2B2B;
  font-size: 14px;
  font-family: "微软雅黑";
  background: #E9EAEB;
  // display: flex;
  // flex-direction: row;
  // margin-bottom: 102px;

  // >div{
	 //  flex: 1;
  // }
  .footer_up{
	  display: flex;
	  flex-direction: row;
	  justify-content: space-around;
	  width: 600px;
	  margin: auto;
  }
  .footer_left{
	  border-top: 1px solid #2B2B2B;
      width: 1100px;
      margin: auto;
	  margin-top: 20px;
	  padding-bottom: 50px;
	  >div{
		  padding-top: 20px;
		  line-height: 25px;
		  text-align: center;
	  }
  }
  .footer_right{
	  text-align: center;
	  >div{
		  margin-top: 30px;
		  display: flex;
		  flex-direction: column;
		  justify-content: center;
	  }
	  img{
		  margin-bottom: .2rem;
		  width: 1.38rem;
		  height: 1.33rem;
	  }
  }
}	
}
@media screen and (max-width: 600px) {
.mobile-footer{
	 display: block!important;
	 box-sizing: border-box;
	  width: 100%;
	  height: 280px;
	  color: #2B2B2B;
	  font-size: 14px;
	  font-family: "微软雅黑";
	  background: #E9EAEB;
	  text-align: center;
	  padding: 50px 15px;
	  // margin-bottom: 85px;
	
}
.footer{
	display: none!important;
}
.foot-erm{
	img{width: 50px;height: 50px;}
}
	// .footer {
	//   box-sizing: border-box;
	//   width: 100%;
	//   height: 330px;
	//   color: #2B2B2B;
	//   font-size: 14px;
	//   font-family: "微软雅黑";
	//   background: #E9EAEB;
	//   display: flex;
	//   flex-direction: row;
	//   // margin-bottom: 85px;
	//   .footer_left{
	// 	  width: 100%;
	// 	  display: flex;
	// 	  justify-content:flex-end;
	// 	  padding-left: 20px;
	// 	  >div{
	// 		  padding-top: 40px;
	// 		  line-height: 25px;
	// 		  text-align: left;
	// 	  }
	//   }
	//   .footer_right{
	// 	  width: 100%;
	// 	  text-align: center;
	// 	  padding-top: 30px;
	// 	  >div{
	// 		  margin-top: .43rem;
	// 		  display: flex;
	// 		  flex-direction: column;
	// 		  justify-content: center;
	// 	  }
	// 	  img{
	// 		  margin-bottom: .2rem;
	// 		  width: 80%;
	// 	  }
	//   }
	// }
}
</style>
