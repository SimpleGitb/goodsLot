<template>
  <div class="aboutus">
        <div class="banner">
          <img src="static/img/aboutus/gywm-banner-1.png" alt="">
        </div>
        <div class="contentFive">
          <el-divider>ABOUT US</el-divider>
          <div class="four_title">
            <div>关于我们</div>
          </div>
          <div class="five_content">
            <div class="fiveconLeft">
              <img :src="aboutData.url" alt="">
            </div>
            <div class="fiveconRight">
              <div class="five_flex">
                <div class="fiveconRight_right">
                  <div class="fiveconright_title">{{aboutData.title}}</div>
                  <div>{{aboutData.content}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
				<div class="contentFive">
					<el-divider>COPRORATE PROFILE</el-divider>
					<div class="four_title">
						<div>发展历程</div>
					</div>
					<div class="six_content">
						<div class="step_process" v-for="(item,index) in stepList" :key="item.id+'step'">
							<div class="none" v-if="index%2 == 0"></div>
							<div class="his-con">
								<div class="his-h2">{{item.title}}</div>
                                <div class="his-np">{{item.content}}</div>
							</div>
							<div v-if="index%2 != 0"></div>
                            <div class="his-ico"></div>
						</div>
						<!-- <div class="step_process">
							<div class="his-con">
								<div class="his-h2">2016年</div>
                                <div class="his-np">调研无车和无船承运人项目</div>
							</div>
							<div></div>
                            <div class="his-ico"></div>
						</div>
						<div class="step_process">
							<div class="none"></div>
							<div class="his-con">
								<div class="his-h2">2016年</div>
                                <div class="his-np">调研无车和无船承运人项目</div>
							</div>
                            <div class="his-ico"></div>
						</div>
						<div class="step_process">
							<div class="his-con">
								<div class="his-h2">2016年</div>
                                <div class="his-np">调研无车和无船承运人项目</div>
							</div>
							<div class="none"></div>
                            <div class="his-ico"></div>
						</div>
						<div class="step_process">
							<div class="none"></div>
							<div class="his-con">
								<div class="his-h2">2016年</div>
								<div class="his-np">调研无车和无船承运人项目</div>
							</div>
                            <div class="his-ico"></div>
						</div>
						<div class="step_process">
							<div class="his-con">
								<div class="his-h2">2016年</div>
								<div class="his-np">调研无车和无船承运人项目</div>
							</div>
							<div class="none"></div>
                            <div class="his-ico"></div>
						</div> -->
						<!-- <el-steps direction="vertical" :active="6">
							<el-step>
								<template slot="icon">
									<div class="his-ico" style="width: 10px;height: 10px;border-radius: 10px;background: #2577E3;"></div>
								</template>
							</el-step>
							<el-step>
								<template slot="icon">
									<div style="width: 10px;height: 10px;border-radius: 10px;background: #2577E3;"></div>
								</template>
							</el-step>
							<el-step>
								<template slot="icon">
									<div style="width: 10px;height: 10px;border-radius: 10px;background: #2577E3;"></div>
								</template>
							</el-step>
							<el-step>
								<template slot="icon">
									<div style="width: 10px;height: 10px;border-radius: 10px;background: #2577E3;"></div>
								</template>
							</el-step>
							<el-step>
								<template slot="icon">
									<div style="width: 10px;height: 10px;border-radius: 10px;background: #2577E3;"></div>
								</template>
							</el-step>
							<el-step>
								<template slot="icon">
									<div style="width: 10px;height: 10px;border-radius: 10px;background: #2577E3;"></div>
								</template>
							</el-step>
						</el-steps> -->
					</div>
				</div>
				<div class="about_six">
					<el-divider>COPRORATE PROFILE</el-divider>
					<div class="four_title">
					  <div>企业文化</div>
					</div>
					<div class="six_content_box">
						<div>
							<img src="static/img/aboutus/gywm-qy-1.png" alt="">
							<div>价值观</div>
							<div>求实  创新  合作  成就</div>
						</div>
						<div>
							<img src="static/img/aboutus/gywm-gy-2.png" alt="">
							<div>经营理念</div>
							<div>诚信为本  合作共赢</div>
						</div>
						<div>
							<img src="static/img/aboutus/gywm-gy-3.png" alt="">
							<div>企业使命</div>
							<div>IT科技  引领物流创新</div>
						</div>
						<div>
							<img src="static/img/aboutus/gywm-qy-4.png" alt="">
							<div>企业愿景</div>
							<div>贴心服务  创行业最佳 </div>
						</div>
					</div>
				</div>
				<div class="contentFive">
					<el-divider>CONTACT</el-divider>
					<div class="four_title">
						<div>联系我们</div>
					</div>
					<div class="contact_box">
						<div>
							给我们留言
							<el-form :inline="true" :model="formInline" class="demo-form-inline">
								<el-form-item>
									<el-input v-model="formInline.name" placeholder="姓名"></el-input>
								</el-form-item>
								<el-form-item>
									<el-input v-model="formInline.email" placeholder="邮箱"></el-input>
								</el-form-item>
								<el-form-item class='flno'>
									<el-input v-model="formInline.phone" placeholder="电话"></el-input>
								</el-form-item>
							</el-form>
							<el-input v-model="formInline.area" type="textarea" rows="4" placeholder="内容"></el-input>
							<el-button @click="sendMessage">提交</el-button>
						</div>
						<div class="customer">
							<div class="custo_addr_one">
								<img src="static/img/aboutus/dianhu.png" alt="">
								<div>
									<div>客服电话</div>
									<div>{{aboutData.phone}}</div>
								</div>
							</div>
							<div class="custo_addr_one">
								<img src="static/img/aboutus/dizhi.png" alt="">
								<div>
									<div>地址</div>
									<div>{{aboutData.address}}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
                <div class="ab-map contact_box">
                    <!-- <img src="static/img/\aboutus/map.png" alt=""> -->
					<div id="container"></div>
                </div>
  </div>
</template>

<script>
import {message,course} from '../../api/userMessage.js'
export default {
  name: "aboutus",
  data() {
    return {
			formInline: {
				name: '',
				email: '',
				phone: '',
				area: ''
			},
			aboutData: {},
			stepList: [],
			longitude:0,//经度
                latitude:0,//纬度
                city:''
    };
  },
  mounted() {
	  this.aboutData = JSON.parse(localStorage.getItem('about'));
	  this.getStep();
	  this.init();
  },
  methods: {
	  init() {
                //步骤：定义map变量 调用 qq.maps.Map() 构造函数   获取地图显示容器
                //设置地图中心点
                // var myLatlng = new qq.maps.LatLng(this.aboutData.longitude,this.aboutData.latitude);
                var center = new qq.maps.LatLng(this.aboutData.longitude,this.aboutData.latitude);
				var map = new qq.maps.Map(document.getElementById('container'),{
					center: center,
					zoom: 13
				});
				  var marker = new qq.maps.Marker({
					position: center,
					map: map,
				});
				 var anchor = new qq.maps.Point(0, 39),
					  size = new qq.maps.Size(42, 68),
					  origin = new qq.maps.Point(0, 0),
					  markerIcon = new qq.maps.MarkerImage(
				  "https://3gimg.qq.com/lightmap/api_v2/2/4/99/theme/default/imgs/marker.png",
				  size, 
				  origin,
				  anchor
				);
				marker.setIcon(markerIcon);
            },
	  sendMessage(){
		  if(!this.formInline.name){
			  this.$message.info({
				  message: "请填写姓名",
			  });
			  return;
		  }
		  if(!this.formInline.email){
			  this.$message.info({
				  message: "请填写邮箱",
			  });
			  return;
		  }
		  var myemail = /^([a-zA-Z0-9.-])+\@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
		   if (!myemail.test(this.formInline.email)) {
		      this.$message.info({
		      	message: "请填写正确的邮箱地址！",
		      });
		      return;
		  }
		  var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
		  if(!this.formInline.phone){
			  this.$message.info({
				  message: "请填写电话",
			  });
			  return;
		  }
		  if (!myreg.test(this.formInline.phone)) {
		      this.$message.info({
		      	message: "请填写正确的手机号！",
		      });
		      return;
		  }
		  if(!this.formInline.area){
			  this.$message.info({
				  message: "请填写内容",
			  });
			  return;
		  }
		  var form = new FormData();
		  form.append("content",this.formInline.area);
		  form.append("email",this.formInline.email);
		  form.append("name",this.formInline.name);
		  form.append("phone",this.formInline.phone);
		  message(form).then(ret=>{
			  if(ret.code == 200){
				  this.$message.success("留言成功！");
			  }
			  this.formInline.name = "";
			  this.formInline.email = "";
			  this.formInline.phone = "";
			  this.formInline.area = "";
		  })
	  },
	  getStep(){
		  course().then(ret=>{
			  this.stepList = ret.data.list;
		  })
	  }
  },
};
</script>

<style lang="less" scoped>
.his-h2{font-size:0.24rem;color:#999;margin-bottom:10px;}
.his-np{font-size:.22rem;}
.step_process{position:relative}
.step_process:first-child::after{display:none}
.step_process::after{content:'';position: absolute;height:100%;top:-50%;left:50%;background: rgb(37, 119, 227);display:block;width:2px;}
.his-ico{position: absolute;align-items: center;width: 24px;height: 24px;background: #fff;box-sizing: border-box;display:flex;border-radius: 50%;justify-content: center;
    border: 2px solid rgb(37, 119, 227);left:50%;top:50%;margin:-12px 0 0 -12px;}
.his-ico::after{content:'';display:block;width: 10px;height: 10px; border-radius: 10px;background: rgb(37, 119, 227);}

.el-form-item.flno{margin-right:0}
.aboutus{font-size: .24rem;}
.ab-map img{height:4rem;width:100%}
.ab-map.contact_box{margin:0 auto 40px}
.banner{
  width: 100%;
  height: 2.8rem;
  img{
    width: 100%;
    height: 100%;
  }
}
.contentFive .five_content{
    width: 12rem;
    margin: auto;
    margin-top: 80px;
    margin-bottom: 40px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    align-items: center;
    div:nth-child(2){
      color: #999;
      line-height: 1.8;
    }
}



.four_title{
 text-align: center;
 margin-top: 30px;
 div:nth-child(1){
   font-size: 30px;
   color: #222222;
   font-weight: bold;
 }
 div:nth-child(2){
   font-size: 16px;
   color: #666666;
   margin-top: 10px;
 }
 div:nth-child(3){
   font-size: 16px;
   color: #666666;
   margin-top: 10px;
 }
}
.contentProcess{
  width: 12.2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: auto;
  margin-top: .5rem;
  >div{
    width: 2.35rem;
  }
  .step_four{
    margin-right: .4rem;
    div:nth-child(2){
      margin-top: .20rem;
    }
  }
}
.step_direction{
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-right: .8rem !important;
  .stepImg{
    margin-right: .1rem;
    padding-top: 1.25rem;
  }
  div:nth-child(2) {
    margin-top: 0px !important;
    div:nth-child(2){
      margin-top: .2rem !important;
    }
  }
}
.step_directionTwo{
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: .4rem;
  .stepImg{
    // margin-right: .1rem;
    margin-left: .1rem;
    padding-top: 1.25rem;
  }
}
.contentImg{
  width: 2.34rem;
  height: 2.15rem;
}

.fiveconright_title{
  color: #000000;
  font-weight: 600;
}
.fiveconright_title:first{
  color: #2577E3;
}
@media screen and (min-width: 601px) {
.el-form-item {width: 32%;margin-top: 10px;float:left;margin-right:2%}
#container{
	width:100%;height:4rem;
}
.six_content{
	position: relative;
    min-height: 400px;
    margin: auto;
		margin-top: 40px;
		.el-steps {
			position: absolute;
			top: 49px;
			height: 85%;
			margin-left: 49%;
		}
		.step_process{
			width: 70%;
			padding:20px 0;
			display: flex;
			flex-direction: row;
			margin: auto;
			>div{
				flex: 1;
			}
			>div:nth-child(1){
				text-align: right;
				padding-right: 20px;
				display: flex;
				flex-direction: column;
				justify-content: center;
			}
			>div:nth-child(2){
				padding-left: 20px;
				display: flex;
				flex-direction: column;
				justify-content: center;
			}
		}
		.step_process:nth-child(odd)
		{
		background:#fff;
		}
		.step_process:nth-child(even)
		{
		background:#F6F6F6;
		}
}
.contentFive{
  padding: 50px 0;
  .el-divider{
    width: 426px;
    margin: auto;
    background-color: #2577E3;
  }
  .el-divider__text {
    color: #0A56BB;
  }
  .five_content{
    margin-top: 80px;
    margin-bottom: 40px;

  }
}
.fiveconLeft{
  width: 5.56rem;
  img{
    width: 4.82rem;
    height: 2.73rem;
  }
}
.fiveconRight{
  width: 6.44rem;
  .five_flex{
    width: 6.44rem;
    display: flex;
    flex-direction: row;
    margin-bottom: .65rem;
  }
  .fiveconRight_left{
    width: 30%;
    padding-left: 50px;
    box-sizing: border-box;
    div:nth-child(1){
      font-size: .6rem;
    }
    div:nth-child(2){
      font-size: .2rem;
    }
  }
  .fiveconRight_right{
    width: 70%;
    div:nth-child(1){
      font-size: .18rem;
      margin-bottom: 0.4rem;
    }
    div:nth-child(2){
      font-size: .14rem;
    }
  }
}
.about_six{
	width: 100%;
	background: url(../../../static/img/aboutus/gywm-qy-bg.png);
	background-repeat: no-repeat;
	background-size: 100% 100%;
	padding: 50px 0;
	color: #fff;
	box-sizing: border-box;
	.el-divider{
	  width: 426px;
	  margin: auto;
	  background-color: #fff;
	}

	.el-divider__text {
	  color: #fff;
		background-color: #245896;
	}
	.four_title{
		div{
			color: #fff !important;
		}
	}
	.six_content_box{
		margin: auto;
		width: 70%;
		display: flex;
		flex-wrap: wrap;
		margin-top: 80px;
		>div{
			flex: 1;
			background: #071849;
			height: 126px;
			margin-right: 30px;
			text-align: center;
			img{
				margin-top: -25px;
				width: 58px;
				height: 58px;
			}
			div:nth-child(2){
				font-size: 18px;
				margin-top: 10px;
			}
			div:nth-child(3){
				font-size: 14px;
				margin-top: 10px;
			}
		}
	}
}
.contact_box{
	width: 80%;
	display: flex;
	flex-direction: row;
	margin: auto;
	margin-top: 40px;
	color: #333333;
	>div{
		flex: 1;
	}
	div:nth-child(1){
		font-size: 16px;
		.el-button{
			padding: 9px 40px;
			float: right;
			margin-top: 20px;
			}
	}
	div:nth-child(2){
		font-size: 14px;
		color: #222222;
	}
	
	.customer{
		padding-left: 30px; 
		.custo_addr_one{
			display: flex;flex-direction: row;
			align-items: center;
			margin-left: 30px;
			margin-bottom: 40px;
			img{
				width: 24px;height: 24px;margin-right: 30px;
			}
			>div{
				div:nth-child(1){
					margin-bottom: 15px;
				}
				div:nth-child(2){
					color: #999999;
				}
			}
		}
	}
}

}
@media screen and (max-width: 600px) {
	.el-form-item__content{ width: 80%;}
	.el-form-item {width: 100%;margin-top: 10px;float:left;margin-right:2%}
	#container{width:100%;height:200px;}
    .his-h2{font-size:0.9rem;margin-bottom:0}
    .his-np{font-size:0.7rem;}
    .his-ico{width:20px;height:20px}
    .his-ico::after{width:50%;height:48%;line-height:0}
    .his-ico{left:0;margin-left:-10px}
    .step_process::after{left:-1px}
    .six_content{margin-bottom:0.4rem !important}
    .about_six{margin-bottom:1rem !important}
    .ab-map.contact_box{margin:0 auto 1rem;width:90%}
	.ab-map.contact_box img{height:8rem}
	.banner{
	width: 100%;
	height: 120px;
	img{
		width: 100%;
		height: 100%;
	}
	}
    .four_title{
        div:nth-child(1){
           font-size: 16px;
           color: #222222;
           font-weight: bold;
        }
        margin-top:0.6rem
    }

	.contentFive{
	  padding:0.8rem !important;
	  .el-divider{
	    width: 100%;
	    margin: auto;
	    background-color: #2577E3;
	  }
	  .el-divider__text {
	    color: #0A56BB;
        padding:0 0.4rem
	  }
	  .five_content{
	    width: 100%;
	    margin: auto;
	    margin-top: 1rem !important;
	    margin-bottom:0rem !important;

	  }
	}
	.fiveconLeft{
	  width: 100%;
	  img{
	    width: 100%;
	  }
	}
	.fiveconRight{
	  width: 100%;
	  .five_flex{
	    width: 100%;
	    display: flex;
	    flex-direction: row;
	    margin-bottom: 0;
	  }
	  .fiveconRight_left{
	    width: 30%;
	    padding-left: 50px;
	    box-sizing: border-box;
	    div:nth-child(1){
	      font-size: 16px;
	    }
	    div:nth-child(2){
	      font-size: 16px;
	    }
	  }
	  .fiveconRight_right{
	    width: 100%;
	    div:nth-child(1){
	      font-size: 16px;
	      margin: 1rem 0;
	    }
	    div:nth-child(2){
	      color: #999;
	      font-size: 14px;
	      line-height: 1.8;
	    }
	  }
	}
	.six_content{
		position: relative;
	    margin: auto;
			margin-top:0.7rem;
			.el-steps {
				position: absolute;
				top: 0;
				height: 85%;
			}
			.step_process{
				box-sizing: border-box;
                padding:0.5rem 0;min-height:60px;
				margin-left: 13px;padding-left:1rem;
                display: flex;justify-content: flex-start;align-items: center;
                .none{display:none !important}

				
			}
			.step_process:nth-child(odd)
			{
			background:#fff;
			}
			.step_process:nth-child(even)
			{
			background:#F6F6F6;
			}
	}
	.about_six{
		width: 100%;
		height: 400px;
		background: url(../../../static/img/aboutus/gywm-qy-bg.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		padding: 30px;
		color: #fff;
		box-sizing: border-box;
		.el-divider{
		  width: 100%;
		  margin: auto;
		  background-color: #fff;
		}
		.el-divider__text {
		  color: #fff;
			background-color: transparent;
			background-image: linear-gradient(135deg, rgb(28, 77, 147) 10%, rgb(43, 98, 156) 100%);
			width: 150px;
		}
		.four_title{
			div{
				color: #fff !important;
			}
		}
		.six_content_box{
			margin: auto;
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			margin-top: 20px;
			>div{
				width: 47%;
				background: #071849;
				height: 126px;
				text-align: center;
				img{
					margin-top: -25px;
					width: 58px;
					height: 58px;
				}
				div:nth-child(2){
					font-size: 16px;
					margin-top: 10px;
				}
				div:nth-child(3){
					font-size: 14px;
					margin-top: 10px;
				}
			}
			div:nth-child(odd){
				margin-right: 6%;
				margin-bottom: 20px;
			}
		}
	}
	.contentFive{
	  padding: 20px;
	  .el-divider{
	    width: 100%;
	    margin: auto;
	    background-color: #2577E3;
	  }
	  .el-divider__text {
	    color: #0A56BB;
	  }
	  .five_content{
	    width: 100%;
	    margin: auto;
	    margin-top: 80px;
	    margin-bottom: 40px;
	    display: flex;
	    flex-direction: column;
	    justify-content: center;
	  }
	}
	.contact_box{
		width: 100%;
		display: flex;
		flex-direction: column;
		margin: auto;
		margin-top:1rem;
		color: #333333;
		// >div{
		// 	flex: 1;
		// }
		div:nth-child(1){
			font-size: 16px;
			.el-button{
				padding: 9px 40px;
				float: right;
				margin-top: 20px;
				}
		}
		div:nth-child(2){
			font-size: 14px;
			color: #222222;
		}
		.customer{
			.custo_addr_one{
				display: flex;flex-direction: row;
				align-items: center;
				margin-bottom: 1rem;
				img{
					width: 24px;height: 24px;margin-right: 0.6rem;
				}
				>div{
					div:nth-child(1){
						margin-bottom: 0.2rem;
					}
					div:nth-child(2){
						color: #999999;
					}
				}
			}
		}
	}
}
</style>
<style>
@media screen and (max-width: 600px) {
		.el-form-item__content{ width: 80%;}
}
</style>