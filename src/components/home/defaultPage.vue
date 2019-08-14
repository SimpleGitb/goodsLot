<template>
  <div class="defaultpage">
        <div class="banner">
          <el-carousel height="7.5rem">
            <el-carousel-item v-for="item in bannerData" :key="item.id+'able'">
              <img :src="item.url" alt="">
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="contentOne_1">
          
          <!-- main1 -->
					<div class="contentOne radius">
					  <div class="transportation_def" @mouseover="mouseOver(1)" @mouseleave="mouseLeave(1)" :class="{mt65rema:active1}">
					    <div class="img_box">
					      <img src="static/img/home/01.png" alt="">
					    </div>
					    <div class="m1-div1">先进的技术服务</div>
					    <div class="m1-div2">大数据、云计算、<br>云存储、移动互联</div>
					    <div class="m1-div3">Advanced technical services</div>
					  </div>
					  <div class="transportation_def def_two" @mouseover="mouseOver(2)" @mouseleave="mouseLeave(2)" :class="{mt65rema:active2}">
					    <div class="img_box">
					      <img src="static/img/home/02.png" alt="">
					    </div>
					    <div class="m1-div1">可视化的物流服务</div>
					    <div class="m1-div2">珠江流域、长江流域等主要内河<br>流域海量船舶实时动效监控、<br>轨迹查询</div>
					    <div class="m1-div3">Visual logistics service</div>
					  </div>
					  <div class="transportation_def def_three" @mouseover="mouseOver(3)" @mouseleave="mouseLeave(3)" :class="{mt65rema:active3}">
					    <div class="img_box">
					      <img src="static/img/home/03.png" alt="">
					    </div>
					    <div class="m1-div1">安全的运输服务</div>
					    <div class="m1-div2">运输动态实时预警，货运险、<br>滞期险等多重保障</div>
					    <div class="m1-div3">Safe transportation service</div>
					  </div>
					  <div class="transportation_def def_four" @mouseover="mouseOver(4)" @mouseout="mouseLeave(4)" :class="{mt65rema:active4}">
					    <div class="img_box">
					      <img src="static/img/home/04.png" alt="">
					    </div>
					    <div class="m1-div1">可靠的信用服务</div>
					    <div class="m1-div2">完整的信用评估体系<br>保障各方权益</div>
					    <div class="m1-div3">Reliable credit service</div>
					  </div>
					</div>
				</div>
        <!-- main2 -->
        <div class="contentTwo">
          <div class="twoConten_left">
            <span>货运江湖平台</span>
            <span>无车、</span>
            <span>无船承运人平台</span>
            <div class="map_left">
              <div>“货运江湖”是广东货多多物流科技股份有限公司自主开发的智</div>
              <div>能物流运输管理平台。平台基于物联网、云计算、大数据等领先</div>
              <div>技术，为货主、船东提供水路运输服务和相关资讯。货主可通过</div>
              <div>平台找到海量的船舶资源，为货主的运输保驾护航；船东可通过</div>
              <div>平台找到丰富的货源信息，为船东降低空载提高收入。</div>
            </div>
          </div>
          <div class="contentRight">
              <div class="right_left_sec">
                  <div class="m2-dd">
                      <span><img src="static/img/home/refund-fill.png" alt=""></span>
                      <span class="two_span">“五流合一”</span>
                  </div>

                  <div class="m2-dd">
                      <span><img src="static/img/home/13.png" alt=""></span>
                      <span class="two_span">运费现结</span>
                  </div>
              </div>
              <div class="right_r_sec">
                  <div class="m2-dd">
                      <span><img src="static/img/home/shopping-bag--fill.png" alt=""></span>
                      <span class="two_span">资源丰富</span>
                  </div>
                  <div class="m2-dd">
                      <span><img src="static/img/home/coupon-fill.png" alt=""></span>
                      <span class="two_span">票据齐全</span>
                  </div>
              </div>
              <div class="m2-lineH m2-line"></div>
              <div class="m2-lineZ  m2-line"></div>
          </div>
        </div>
        <!-- main3 -->
				<div class="contentThree">
          <img src="../../../static/img/home/m5-1.png" alt="" class="m5-1">
          <img src="../../../static/img/home/m5-2.png" alt="" class="m5-2">
          <!-- <div class="contentthree_left">
            <div>票据不齐全？</div>
            <div>运价居高不下？</div>
            <div>时效性差？</div>
            <div>找船困难？</div>
            <div>服务无法保障？</div>
            <div>运输过程无法监控？</div>
          </div>
          <div class="contentThreeRIght">
            <div class="three_title">货运江湖为您排忧解难</div>
            <div class="three_line"></div>
            <div class="three_title_two">Your Best Choice</div>
            <div class="description">
              <el-row>
                <el-col :span="4">发票合法合规</el-col>
                <el-col :span="4">运价更低</el-col>
                <el-col :span="4">船舶更多</el-col>
                <el-col :span="4">运输全程监控</el-col>
                <el-col :span="4">操作简便</el-col>
                <el-col :span="4">服务专业</el-col>
              </el-row>
            </div>
						<div class="description2">
						  <el-row class="row_one">
						    <el-col :span="8">发票合法合规</el-col>
						    <el-col :span="8">运价更低</el-col>
						    <el-col :span="8">船舶更多</el-col>
						  </el-row>
							<el-row class="row_two">
							  <el-col :span="8">运输全程监控</el-col>
							  <el-col :span="8">操作简便</el-col>
							  <el-col :span="8">服务专业</el-col>
							</el-row>
						</div>
            <div class="canvas_none">
              <div class="iconImg">
                <canvas id="myCanvas" width="300" height="300">
                Your browser does not support the HTML5 canvas tag.
                </canvas>
                <img src="static/img/home/15.png" alt="" class="canvasImg">
              </div>
              <div class="iconImg Img2">
                <canvas id="myCanvas2" width="1000" height="300">
                Your browser does not support the HTML5 canvas tag.
                </canvas>
                <img src="static/img/home/16.png" alt="" class="canvasImg">
              </div>
              <div class="iconImg Img3">
                <canvas id="myCanvas3" width="1000" height="300">
                Your browser does not support the HTML5 canvas tag.
                </canvas>
                <img src="static/img/home/17.png" alt="" class="canvasImg">
              </div>
              <div class="iconImg Img4">
                <canvas id="myCanvas4" width="1000" height="300">
                Your browser does not support the HTML5 canvas tag.
                </canvas>
                <img src="static/img/home/18.png" alt="" class="canvasImg">
              </div>
              <div class="iconImg Img5">
                <canvas id="myCanvas5" width="1000" height="300">
                Your browser does not support the HTML5 canvas tag.
                </canvas>
                <img src="static/img/home/19.png" alt="" class="canvasImg">
              </div>
              <div class="iconImg Img6">
                <canvas id="myCanvas6" width="1000" height="300">
                Your browser does not support the HTML5 canvas tag.
                </canvas>
                <img src="static/img/home/20.png" alt="" class="canvasImg">
              </div>
            </div>
          </div> -->
        </div>
        <!-- main4 -->
        <div class="contentFour">
          <el-divider>OPERATION PROCESS</el-divider>
          <div class="four_title">
            <div>货运江湖操作流程</div>
            <div>船舶更多，运价更低，运输发票合法</div>
          </div>
          <div class="contentProcess" v-if="getstepDocmentList.length>0">
            <div class="step_four">
              <div class="m4-tit">
                <span>01.</span>
                <span>{{getstepDocmentList[0].title}}</span>
              </div>
              <div>
                <img class="contentImg" :src="getstepDocmentList[0].url" alt="">
              </div>
            </div>
            <div class="stepImg ico-ri"></div>
            <div class="step_four step_direction">
              <div>
                <div class="m4-tit">
                  <span>02.</span>
                  <span>{{getstepDocmentList[1].title}}</span>
                </div>
                <div>
                  <img class="contentImg" :src="getstepDocmentList[1].url" alt="">
                </div>
              </div>
            </div>
            <div class="stepImg ico-ri"></div>
            <div class="step_four step_direction">
              <div>
                <div class="m4-tit">
                  <span>03.</span>
                  <span>{{getstepDocmentList[2].title}}</span>
                </div>
                <div>
                  <img class="contentImg" :src="getstepDocmentList[2].url" alt="">
                </div>
              </div>
            </div>
            <div class="stepImg ico-ri"></div>
            <div class="step_four step_direction">
              <div>
                <div class="m4-tit">
                  <span>04.</span>
                  <span>{{getstepDocmentList[3].title}}</span>
                </div>
                <div>
                  <img class="contentImg" :src="getstepDocmentList[3].url" alt="">
                </div>
              </div>
            </div>
          </div>
          <div class="contentProcess contentProcess2" v-if="getstepDocmentList.length>0">
            <template v-if="getstepDocmentList[7]">
							<div class="step_four step_directionTwo">
							  <div>
							    <div class="m4-tit">
							      <span>08.</span>
							      <span>{{getstepDocmentList[7].title}}</span>
							    </div>
							    <div>
							      <img class="contentImg" :src="getstepDocmentList[7].url" alt="">
							    </div>
							  </div>
							</div>
							<div class="stepImg ico-le"></div>
						</template>
            <template v-if="getstepDocmentList[6]">
							<div class="step_four step_directionTwo">
							  <div>
							    <div class="m4-tit">
							      <span>07.</span>
							      <span>{{getstepDocmentList[6].title}}</span>
							    </div>
							    <div>
							      <img class="contentImg" :src="getstepDocmentList[6].url" alt="">
							    </div>
							  </div>
							</div>
							<div class="stepImg ico-le"></div>
						</template>
            <template v-if="getstepDocmentList[5]">
							<div class="step_four step_directionTwo show">
							  <div>
							    <div class="m4-tit">
							      <span>06.</span>
							      <span>{{getstepDocmentList[5].title}}</span>
							    </div>
							    <div>
							      <img class="contentImg" :src="getstepDocmentList[5].url" alt="">
							    </div>
							  </div>
							</div>
							<div class="stepImg ico-le"></div>
						</template>
            <template v-if="getstepDocmentList[4]">
							<div class="step_four show">
							  <div class="m4-tit">
							    <span>05.</span>
							    <span>{{getstepDocmentList[4].title}}</span>
							  </div>
							  <div>
							    <img class="contentImg" :src="getstepDocmentList[4].url" alt="">
							  </div>
							</div>
						</template>
          </div>
					<div class="contentProcess" v-if="getstepDocmentList.length>0">
					  <template v-if="getstepDocmentList[8]">
							<div class="step_four">
							  <div class="m4-tit">
							    <span>09.</span>
							    <span>{{getstepDocmentList[8].title}}</span>
							  </div>
							  <div>
							    <img class="contentImg" :src="getstepDocmentList[8].url" alt="">
							  </div>
							</div>
							<div class="stepImg ico-ri"></div>
						</template>
					  <template v-if="getstepDocmentList[9]">
							<div class="step_four step_direction">
							  <div>
							    <div class="m4-tit">
							      <span>10.</span>
							      <span>{{getstepDocmentList[9].title}}</span>
							    </div>
							    <div>
							      <img class="contentImg" :src="getstepDocmentList[9].url" alt="">
							    </div>
							  </div>
							</div>
							<div class="stepImg ico-ri"></div>
						</template>
					  <template v-if="getstepDocmentList[10]">
							<div class="step_four step_direction">
							  <div>
							    <div class="m4-tit">
							      <span>11.</span>
							      <span>{{getstepDocmentList[10].title}}</span>
							    </div>
							    <div>
							      <img class="contentImg" :src="getstepDocmentList[10].url" alt="">
							    </div>
							  </div>
							</div>
							<div class="stepImg ico-ri"></div>
						</template>
					  <template v-if="getstepDocmentList[11]">
							<div class="step_four step_direction">
							  <div>
							    <div class="m4-tit">
							      <span>12.</span>
							      <span>{{getstepDocmentList[11].title}}</span>
							    </div>
							    <div>
							      <img class="contentImg" :src="getstepDocmentList[11].url" alt="">
							    </div>
							  </div>
							</div>
						</template>
					</div>
        </div>
        <!-- main5 -->
        <div class="contentFive" style="clear: both;">
          <el-divider class="News-title">NEWS</el-divider>
          <div class="four_title">
            <div>新闻资讯</div>
          </div>
          <div class="five_content">
            <div class="fiveconLeft">
              <img :src="articleData[art_Index].url" alt="新闻资讯图片">
              <div class="fiveTitle">
                <span>{{articleData[art_Index].title}}</span>
                <span>{{articleData[art_Index].createTime}}</span>
              </div>
              <div class="five_text" v-html="articleData[art_Index].subTitle" style="height: 65px;overflow: hidden;"></div>
              <div class="More_left" @click="toNew">更多 +</div>
            </div>
            <div class="fiveconRight">
              <div class="five_flex" v-for="(aret,index) in articleData" :key="aret.id+'five'" @click="toDetail(aret.id,aret.menuId)" @mouseenter="enterM(index)" @mouseleave="leaveM(index)">
                <div class="fiveconRight_left">
                  <div>{{sliceTime(aret.createTime)}}</div>
                  <div>{{sliceMonth(aret.createTime)}}</div>
                </div>
                <div class="fiveconRight_right">
                  <div class="fiveconright_title" v-bind:class="{buleStyle: index==art_Index}">{{aret.title}}</div>
                  <div v-html="aret.subTitle" style="height: 80px;overflow: hidden;"></div>
                </div>
              </div>
							<div class="More_left more_right" @click="toNew">更多 +</div>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
import store from '../../store/index.js'
import {banner,article,about,stepDocment} from '../../api/userMessage.js'
export default {
  name: "defaultpage",
  data() {
    return {
			bannerData: [{
        url: '',
        id: 1
      }],
			articleData: [{
        url: '',
        content: '',
        menuName: '',
        createTime: ''
      }],
	  getstepDocmentList: [],
      active1:false,
      active2:false,
      active3:false,
      active4:false,
      titleToggle: true,
			art_Index: 0,
			boole: true
    };
  },
  mounted() {
	window.scroll(0, 0);
//     var c=document.getElementById("myCanvas");
//     var ctx=c.getContext("2d");
//     ctx.beginPath();
//     ctx.strokeStyle = '#fff';
//     ctx.lineWidth = 3;
//     ctx.arc(100,75,9,0,2*Math.PI);
//     ctx.stroke();
// 
//     ctx.beginPath();      // 开始绘制
//     ctx.moveTo(105,82);
//     ctx.lineTo(160,140);
//     ctx.lineWidth = 1;
//     ctx.stroke();
// 
//     ctx.beginPath();      // 开始绘制
//     ctx.strokeStyle = '#fff';
//     ctx.lineWidth = 1;
//     ctx.arc(185,165,35,0,2*Math.PI);
//     ctx.stroke();
// 
//     ctx.beginPath();      // 开始绘制
//     ctx.strokeStyle = '#fff';
//     ctx.lineWidth = 1;
//     ctx.arc(185,165,29,0,2*Math.PI);
// 		ctx.font = "16px sans-serif";
// 		ctx.fillStyle = "#fff";
// 		ctx.fillText("发票合法合规", 140, 229);
//     ctx.stroke();
// 
//     var c=document.getElementById("myCanvas2");
//     var ctx2=c.getContext("2d");
//     ctx2.beginPath();
//     ctx2.strokeStyle = '#fff';
//     ctx2.lineWidth = 3;
//     ctx2.arc(250,75,9,0,2*Math.PI);
//     ctx2.stroke();
// 
//     ctx2.beginPath();      // 开始绘制
//     ctx2.moveTo(255,82);
//     ctx2.lineTo(310,140);
//     ctx2.lineWidth = 1;
//     ctx2.stroke();
// 
//     ctx2.beginPath();      // 开始绘制
//     ctx2.strokeStyle = '#fff';
//     ctx2.lineWidth = 1;
//     ctx2.arc(335,165,35,0,2*Math.PI);
//     ctx2.stroke();
// 
//     ctx2.beginPath();      // 开始绘制
//     ctx2.strokeStyle = '#fff';
//     ctx2.lineWidth = 1;
//     ctx2.arc(335,165,29,0,2*Math.PI);
// 		ctx2.font = "16px sans-serif";
// 		ctx2.fillStyle = "#fff";
// 		ctx2.fillText("运价更低", 310, 229);
//     ctx2.stroke();
// 
//     var c=document.getElementById("myCanvas3");
//     var ctx2=c.getContext("2d");
//     ctx2.beginPath();
//     ctx2.strokeStyle = '#fff';
//     ctx2.lineWidth = 3;
//     ctx2.arc(400,75,9,0,2*Math.PI);
//     ctx2.stroke();
// 
//     ctx2.beginPath();      // 开始绘制
//     ctx2.moveTo(405,82);
//     ctx2.lineTo(460,140);
//     ctx2.lineWidth = 1;
//     ctx2.stroke();
// 
//     ctx2.beginPath();      // 开始绘制
//     ctx2.strokeStyle = '#fff';
//     ctx2.lineWidth = 1;
//     ctx2.arc(485,165,35,0,2*Math.PI);
//     ctx2.stroke();
// 
//     ctx2.beginPath();      // 开始绘制
//     ctx2.strokeStyle = '#fff';
//     ctx2.lineWidth = 1;
//     ctx2.arc(485,165,29,0,2*Math.PI);
// 		ctx2.font = "16px sans-serif";
// 		ctx2.fillStyle = "#fff";
// 		ctx2.fillText("船舶更多", 450, 229);
//     ctx2.stroke();
// 
//     var c=document.getElementById("myCanvas4");
//     var ctx2=c.getContext("2d");
//     ctx2.beginPath();
//     ctx2.strokeStyle = '#fff';
//     ctx2.lineWidth = 3;
//     ctx2.arc(550,75,9,0,2*Math.PI);
//     ctx2.stroke();
// 
//     ctx2.beginPath();      // 开始绘制
//     ctx2.moveTo(555,82);
//     ctx2.lineTo(610,140);
//     ctx2.lineWidth = 1;
//     ctx2.stroke();
// 
//     ctx2.beginPath();      // 开始绘制
//     ctx2.strokeStyle = '#fff';
//     ctx2.lineWidth = 1;
//     ctx2.arc(635,165,35,0,2*Math.PI);
//     ctx2.stroke();
// 
//     ctx2.beginPath();      // 开始绘制
//     ctx2.strokeStyle = '#fff';
//     ctx2.lineWidth = 1;
//     ctx2.arc(635,165,29,0,2*Math.PI);
// 		ctx2.font = "16px sans-serif";
// 		ctx2.fillStyle = "#fff";
// 		ctx2.fillText("运输全程监控", 590, 229);
//     ctx2.stroke();
// 
//     var c=document.getElementById("myCanvas5");
//     var ctx2=c.getContext("2d");
//     ctx2.beginPath();
//     ctx2.strokeStyle = '#fff';
//     ctx2.lineWidth = 3;
//     ctx2.arc(700,75,9,0,2*Math.PI);
//     ctx2.stroke();
// 
//     ctx2.beginPath();      // 开始绘制
//     ctx2.moveTo(705,82);
//     ctx2.lineTo(760,140);
//     ctx2.lineWidth = 1;
//     ctx2.stroke();
// 
//     ctx2.beginPath();      // 开始绘制
//     ctx2.strokeStyle = '#fff';
//     ctx2.lineWidth = 1;
//     ctx2.arc(785,165,35,0,2*Math.PI);
//     ctx2.stroke();
// 
//     ctx2.beginPath();      // 开始绘制
//     ctx2.strokeStyle = '#fff';
//     ctx2.lineWidth = 1;
//     ctx2.arc(785,165,29,0,2*Math.PI);
// 		ctx2.font = "16px sans-serif";
// 		ctx2.fillStyle = "#fff";
// 		ctx2.fillText("操作简便", 750, 229);
//     ctx2.stroke();
// 
//     var c=document.getElementById("myCanvas6");
//     var ctx2=c.getContext("2d");
//     ctx2.beginPath();
//     ctx2.strokeStyle = '#fff';
//     ctx2.lineWidth = 3;
//     ctx2.arc(850,75,9,0,2*Math.PI);
//     ctx2.stroke();
// 
//     ctx2.beginPath();      // 开始绘制
//     ctx2.moveTo(855,82);
//     ctx2.lineTo(910,140);
//     ctx2.lineWidth = 1;
//     ctx2.stroke();
// 
//     ctx2.beginPath();      // 开始绘制
//     ctx2.strokeStyle = '#fff';
//     ctx2.lineWidth = 1;
//     ctx2.arc(935,165,35,0,2*Math.PI);
//     ctx2.stroke();
// 
//     ctx2.beginPath();      // 开始绘制
//     ctx2.strokeStyle = '#fff';
//     ctx2.lineWidth = 1;
//     ctx2.arc(935,165,29,0,2*Math.PI);
// 		ctx2.font = "16px sans-serif";
// 		ctx2.fillStyle = "#fff";
// 		ctx2.fillText("服务专业", 900, 229);
//     ctx2.stroke();
  
  
  },
  methods: {
		enterM(index){
			this.art_Index = index;
		},
		leaveM(index){
			this.art_Index = 0;
		},
		toDetail(id,menuId){
      this.$router.push({path:'/news_detail',query:{id:id,menuId:menuId}});
      store.commit('changeIsBack', '新闻动态 - 详情');
		},
    sliceTime(time){
      var slice_ime = '';
      if(time != null){
        slice_ime = time.slice(8,10);
      }
      return slice_ime;
    },
    sliceMonth(time){
      var slice_ime = '';
      if(time != null){
        slice_ime = time.slice(5,7);
        slice_ime += '-'+time.slice(2,4)
      }
      return slice_ime;
    },
		getBanner(){
			banner().then(ret=>{
				this.bannerData = ret.data.list;
			})
		},
		getArticle(){
			article().then(ret=>{
				this.articleData = ret.data.list;
			})
		},
		getAbout(){
			about().then(ret=>{
				localStorage.about = JSON.stringify(ret.data);
			})
    },
	getstepDocment(){
		stepDocment(0).then(ret=>{
			this.getstepDocmentList = ret.data.list;
		})
	},
    mouseOver(num){
      switch (num) {
        case 1:
          this.active1 = true;
          break;
        case 2:
          this.active2 = true;
          break;
        case 3:
          this.active3 = true;
          break;
        case 4:
          this.active4 = true;
          break;

      }
      
    },
    mouseLeave(num){
        switch (num) {
        case 1:
          this.active1 = false;
          break;
        case 2:
          this.active2 = false;
          break;
        case 3:
          this.active3 = false;
          break;
        case 4:
          this.active4 = false;
          break;

      }
    },
    toNew(){
			store.commit('changeIsBack', '新闻动态');
      this.$router.push({path:'/news'});
    }
  },
	created(){
		this.getBanner();
		this.getArticle();
		this.getAbout();
    this.getstepDocment();
	},
};
</script>

<style lang="less" scoped>
	.buleStyle{
		color: #2577E3 !important;
	}
.defaultpage{font-size:.24rem;overflow: scroll;}
.banner{
  width: 100%;height: 7.5rem;
  .el-carousel{width: 100%;}
  .el-carousel__container{width: 100%;height: 7.5rem;}
  img{width: 100%;}
}
.img_box,.transportation_def{transition:all ease .3s;cursor: pointer;}
.mt65rema{margin-top:-0.45rem;}
.mt65rem{margin-top:0.65rem;}
.transportation_def{
  
  text-align: center;color: #9A9A9A;font-size: .18rem;
  .m1-div1{font-size: .24rem;color: #222222;font-weight: bold;}
  .m1-div2{margin: .2rem 0 .15rem;}
}
.mt65rema .img_box{box-shadow:0px 0px 16px 0px rgba(10,86,187,0.13);transform:translateY(-.2rem)}
// main2
.m2-line{position:absolute;background-color:#F5F5F5}
.m2-lineH{width:100%;height:1px;top:50%;left:0;}
.m2-lineZ{height:100%;width:1px;top:0;left: 50%;}
.m2-dd{height: 50%;display: flex;flex-direction: column;justify-content: center;align-items: center;}
// main3
.contentRight{position: relative;width:5.32rem;height: 3.08rem;box-shadow: 0 0px 12px 0 rgba(0, 0, 0, 0.1);display: flex;flex-direction: row;font-weight: bold;}
// main4
.stepImg{width: 0.4rem;height: 0.4rem;margin:0 .2rem;background-size:100%}
.stepImg.ico-ri{background-image: url(../../../static/img/home/icon_right.png);}
.stepImg.ico-le{background-image: url(../../../static/img/home/icon_left.png);}
.m4-tit{margin-bottom:.2rem}
.contentOne{background: #ffffff;margin: auto;margin-top: .75rem;display: flex;flex-direction: row;justify-content: center;border-radius: 4px;box-shadow: 0 0px 12px 0 rgba(0, 0, 0, 0.1);}
.no{display:none !important}
.el-divider{
    max-width: 426px;
    margin: auto;
    background-color: #2577E3;
  }
  .el-divider__text {
    color: #0A56BB;
  }
.contentTwo{
  >div{
    flex: 1;
  }
  .twoConten_left{
    font-size: .24rem;
    font-weight: bold;
    .map_left{
      background-image: url(../../../static/img/home/map.png);
      background-size: 4.38rem 3.63rem;
      background-repeat: no-repeat;
      color: #222222;
      font-size: .16rem;
      font-weight: 500;
      line-height: .28rem;
      padding-top: .96rem;
      padding-left: .61rem;
    }
    span:nth-child(1){
      color: #222222;
    }
    span:nth-child(2){
      color: #F07816;
      margin-left: 25px;
    }
    span:nth-child(3){
      color: #0A56BB;
    }
  }
  .contentRight{
    img{
      width: .57rem;
      height: .52rem;
    }
    .two_span{
      margin-top: 10px;
    }
    .right_left_sec{
      width: 50%;
      flex: 1;
      display:flex;
      flex-flow: column;
      
    }
    .right_r_sec{
      width: 50%;
      flex: 1;
      display:flex;
      flex-flow: column;
      div:nth-child(1){
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      div:nth-child(2){
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
    .line{
      width: 1px;
      height: 100%;
      background:#F5F5F5; 
    }
  }
}


@media screen and (min-width: 600px) {
.def_one{margin-top:-.65rem;}
.contentOne{
  width: 12rem;height: 3.1rem;
  
  >div{
    flex: 1;
  }
	.box_one{
    box-shadow: 0 0px 12px 0 rgba(0, 0, 0, 0.1)
  }
  .img_box{
    margin: auto;width: 1.24rem;height: 1.24rem;border-radius: 100px;background: #ffffff;
    img{width: .54rem !important;height: .53rem;margin-top: .35rem;}
  }
}
.contentTwo{
  width: 12rem;
  height:4.2rem;
  margin: auto;
  margin-top: 80px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}


.contentThree{
  position: relative;
  width: 100%;
  background-image: url(../../../static/img/home/questionbg.png);
  background-size:cover;
  background-repeat: no-repeat;background-position:center;
  padding:0.25rem 0;
  margin-bottom: 30px;
  text-align: center;
  .m5-1{max-width:12rem;}
  .m5-2{display:none;}
}
.three_line{
  width: 3.30rem;
  height: 1px;
  background: #ffffff;
  opacity: 0.5;
  margin-left: 3.3rem;
   margin-top: 10px;
}
.contentFour{
  padding: 40px;
  .el-divider{
    width: 426px;
    margin: auto;
    background-color: #2577E3;
  }
  .el-divider__text {
    color: #0A56BB;
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
   color: #9A9A9A;
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
  align-items: center;
  >div{
    // width: 2.35rem;
  }
}

.step_direction{
  display: flex;
  flex-direction: row;
  justify-content: center;
  .stepImg{
    margin-right: .1rem;
    padding-top: 1.25rem;
		img{
			width: 100%;height: 0.4rem;
		}
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
  margin-left: 10px;
  .stepImg{
    margin-left: .1rem;
    padding-top: 1.25rem;
		img{
			width: 100%;height: 100%;
		}
  }
}
.contentImg{
  width: 2.34rem;
  height: 2.15rem;
}
.contentFive{
	clear: both;
  padding: 40px;
  
  .five_content{
    width: 12rem;
    margin: auto;
    margin-top: 80px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
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
	   color: #9A9A9A;
	   margin-top: 10px;
	 }
	}
.fiveconLeft{
  width: 5.56rem;
  img{
    width: 5.56rem;
    height: 2.02rem;
  }
  .More_left{
    cursor: pointer;
    width: 1.9rem;
    height: .55rem;
    background: #F5A564;
    line-height: .55rem;
    color: #FFFFFF;
    font-size: .21rem;
    margin-top: .48rem;
    padding-left: .17rem;
    box-sizing: border-box;
    box-shadow: 0 0px 5px 0 rgba(0, 0, 0, 0.1)
  }
	
}
.more_right{
		display: none;
	}
.fiveTitle{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #272636;
  font-size: .16rem;
  margin-top: .37rem;
  span:nth-child(1){
    font-weight: 600;
  }
}
.five_text{
  color: #272636;
  font-size: .14rem;
  margin-top: .25rem;
}
.fiveconRight{
  width: 6.44rem;
  .five_flex{
    width: 6.44rem;
    display: flex;
    flex-direction: row;
    margin-bottom: .65rem;
		cursor: pointer;
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
    // overflow: hidden;
    div:nth-child(1){
      font-size: .18rem;
      margin-bottom: .18rem;
			display:-webkit-box;
			-webkit-line-clamp:2;
			-webkit-box-orient:vertical;
			overflow:hidden;
    }
    div:nth-child(2){
      color: #4F4F4F;
      font-size: .14rem;
      line-height: 20px;
    }
  }
}
.fiveconright_title{
  color: #000000;
  font-weight: 600;
}
.fiveconright_title:first{
  color: #2577E3;
}
.description{
		display: none;
}
.description2{
	display: none;
}
.el-row .el-col {
  font-size: .16rem !important;
  text-align: center;
}

}

@media screen and (max-width: 600px) {
	.More_left{
	  cursor: pointer;
    width: 145px;
    height: 50px;
    background: #f5a564;
    line-height: 50px;
    color: #FFFFFF;
    font-size: 18px;
    margin-top: 0.48rem;
    padding-left: 20px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-box-shadow: 0 0px 5px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 0px 5px 0 rgba(0, 0, 0, 0.1);
    float: right;
    margin-right: 30px;
	}
.contentOne{
  width: 100%!important;
  height: 400px;
  background: #ffffff;
	display: flex;
	flex-wrap: wrap;
	.transportation_def{
		margin-top: 20px;padding:0 0.4rem;box-sizing: border-box;
		width: 50%;
		text-align: center;
  }
  br{display:none}
	.def_one{
		div:nth-child(5){
			margin-top: 35px !important;
		}
	}
	.def_two{
		div:nth-child(2){
			margin-top: 13px !important;
		}
	}
	.def_three{
		div:nth-child(2){
			margin-top: 5px !important;
		}
		div:nth-child(3){
			margin-top: 5px !important;
		}
		div:nth-child(5){
			margin-top: 35px !important;
		}
	}
	.def_four{
		div:nth-child(2){
			margin-top: 5px !important;
		}
		div:nth-child(5){
			margin-top: 31px !important;
		}
  }
  .contentFive{
      .News-title{
        width: 100%!important;
      }
      .el-divider__text{
        padding-right:40px!important;
      }
  } 
}
.contentOne_1{
	width: 100%;
	padding: 20px;
	box-sizing: border-box;
}
.mt15{
  margin-top:15px;
}
.mb15{
  margin-bottom :15px;
}
.contentTwo{
  width: 100%;
  margin:1rem auto 0;
  .twoConten_left{
    font-size: 16px;
    font-weight: bold;
    .map_left{
      line-height:1.8;font-size:14px;
			padding-top: 1rem;
      padding-left: 1rem;
			width: 70%;
			margin: auto;
			>div{
				display: inline;
			}
    }
    span:nth-child(1){
			margin-left: 20px;
    }
    span:nth-child(2){
      margin-left: 10px;
    }
  }
  .contentRight{
    width: 90%;margin:0 auto 2rem;
    height: 10rem;
    box-shadow: 0 0px 12px 0 rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: row;
    margin-top: 25px;
    font-size: .24rem;
    font-weight: bold;
		position: relative;
    img{
      width: 30px;
      height: 30px;
    }
    .two_span{
      margin-top: 10px;
    }
    div:nth-child(1){
      // border-right: 1px solid #F5F5F5;
    }
    .right_left_sec{
      width: 50%;
      flex: 1;
      display:flex;
      flex-flow: column;
      div:nth-child(1){
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      div:nth-child(3){
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .columnLine{
				position: absolute;
				top: 135px;
        width: 100%;
        height: 1px;
        background:#F5F5F5; 
      }
    }
    .right_r_sec{
      width: 50%;
      flex: 1;
      display:flex;
      flex-flow: column;
      div:nth-child(1){
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      div:nth-child(2){
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
    .line{
      width: 1px;
      height: 100%;
      background:#F5F5F5; 
    }
  }
}

.contentThree{
  margin-bottom:2rem;
  .m5-2{display:block;width:100%;}
  .m5-1{display:none;}
}

.contentFour{
  width:90%;margin:0 auto;
  .stepImg{display:none;}
  .step_four{position: relative;}
  .step_four::after{content:"";width:1rem;height:1rem;background-image: url(../../../static/img/home/icon_right.png);background-size:100%;display:block;position:absolute;right:6%;top:50%;transform:translateY(-50%)}
  .contentProcess{overflow:hidden;margin-top:1rem;position: relative;}
  .contentProcess.contentProcess2 .step_four{float:right;}
  .step_four.no{display:block !important}
  .step_four.show{display:none}
  .step_four{width: 50%;float: left;font-size: 16px;margin-bottom:1rem}
  .step_four div:nth-child(2){display:flex;align-items:center;height:6rem;overflow: hidden;}
  .step_four div:nth-child(2) img{max-width:80%;max-height:100%;}
  .el-divider__text{padding:0 0.5rem;}
}

.contentFive{
	padding-top: 40px;
	.el-divider{
	  width: 373px;
	  margin: auto;
	  background-color: #2577E3;
	}
	.el-divider__text {
	  color: #0A56BB;
	}
	.five_content{
	  width: 100%;
	  margin: auto;
	  margin:1rem 0;
	  display: flex;
	  flex-direction: row;
	  justify-content: center;
	}
}	
.four_title{
	 text-align: center;
	 margin-top: 16px;
	 div:nth-child(1){
	   font-size: 16px;
	   color: #222222;
	   font-weight: bold;
	 }
	 div:nth-child(2){
	   font-size: 16px;
	   color: #9A9A9A;
	   margin-top: 10px;
	 }
	}
	.fiveconLeft{
		display: none;
	}
	.fiveconRight{
	  width: 100%;
	  .five_flex{
	    width: 100%;
	    display: flex;
	    flex-direction: row;
	    margin-bottom: .65rem;
			padding: 0 10px;
      box-sizing: border-box;
      align-items:center;
			cursor: pointer;
	  }
	  .fiveconRight_left{
	    width: 30%;
	    padding-left: 20px;
	    box-sizing: border-box;text-align: center;
	    div:nth-child(1){
	      font-size: 24px;
	    }
	    div:nth-child(2){
	      font-size: 14px;
	    }
	  }
	  .fiveconRight_right{
	    width: 70%;
	    div:nth-child(1){
	      font-size: 16px;
        line-height:30px;overflow: hidden;height:30px;;
	    }
	    div:nth-child(2){
	      color: #4F4F4F;
	      font-size: 14px;
	      line-height: 20px;height:auto !important;max-height:60px;
	    }
	  }
	}
	.fiveconright_title{
	  color: #000000;
	  font-weight: 600;
	}
	.fiveconright_title:first{
	  color: #2577E3;
	}
}
@media (min-width:600px) and (max-width:1200px){
	.contentOne{
	  width: 1000px;height: 3.1rem;
		}
}
@media (min-width: 993px) and (max-height: 600px) {
  
}

@media (min-width: 768px) and (max-height: 992px) {
  .defaultpage{
    width: 100%;
    overflow: hidden;
  }
}

@media (min-width: 480px) and (max-height: 767px) {
  .defaultpage{
     width: 100%;
    overflow: hidden;
  }
}
/**段 样式开始***/
.mobile{
  display: none;
}
@media (max-height: 767px) {
  .mobile{
    display: block!important;
    
  }
  .pc{
    display: none;
  }
}
/**段 样式结束***/
</style>
<style>
  .text-center{
      text-align: center;

  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>