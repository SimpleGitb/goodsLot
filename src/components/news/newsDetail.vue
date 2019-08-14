<template>
  <div class="newsdetail">
    <div style="font-size: 15px;margin-top: 20px;"
         @click="toBack">
      <i class="el-icon-d-arrow-left"></i>
      回到主目录
    </div>
    <div class="up_article"
         v-if="preArticle != null"
         @click="newDetail(preArticle.id)">
      <div><img :src="preArticle.url"
             alt=""></div>
      <div class="up_content">
        <div>上一篇</div>
        <div>{{preArticle.title}}</div>
      </div>
    </div>

    <div class="tab_box">
      <div class="box_title">
        <div>{{detailData.title}}</div>
        <div>{{detailData.createTime}}</div>
      </div>
      <div class="box_content">
        <div class="ql-container ql-snow">
          <div class="ql-editor"
               v-html="detailData.content">
          </div>
        </div>
        <!-- <div v-html="detailData.content"></div> -->
        <!-- <img :src="detailData.url" alt=""> -->
      </div>
    </div>
    <div class="up_article_foot"
         v-if="nextArticle != null"
         @click="newDetail(nextArticle.id)">
      <div><img :src="nextArticle.url"
             alt=""></div>
      <div class="up_content">
        <div>下一篇</div>
        <div>{{nextArticle.title}}</div>
      </div>
      <!-- <div class="right_content">
				<div>文章分类：新闻中心</div>
			</div> -->
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
import store from '../../store/index.js'
import { detail } from '../../api/userMessage.js'
export default {
  name: "newsdetail",
  data () {
    return {
      activeName: 'first',
      currentPage: 1,
      detailId: '',
      menuId: '',
      detailData: {},
      preArticle: null,
      nextArticle: null
    };
  },
  mounted () {
    this.detailId = this.$route.query.id;
    this.menuId = this.$route.query.menuId;
    this.getDetail();
  },
  methods: {
    toBack () {
      this.$router.push({ path: '/news' });
      store.commit('changeIsBack', '新闻动态');
    },
    newDetail (id) {
      this.detailId = id;
      this.getDetail();
      window.scroll(0, 0);
    },
    getDetail () {
      detail(this.detailId, this.menuId).then(ret => {
        this.detailData = ret.data.article;
        this.preArticle = ret.data.preArticle;
        this.nextArticle = ret.data.nextArticle
      })
    },
  }
};
</script>

<style lang="less" scoped>
.newsdetail {
  width: 60%;
  margin: auto;
  margin-top: 40px;
}
.up_article {
  cursor: pointer;
  width: 100%;
  height: 106px;
  overflow: hidden;
  border-bottom: 1px solid #dddddd;
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    width: 118px;
    height: 67px;
  }
  .up_content {
    display: flex;
    flex-direction: column;
    padding-top: 5px;
    padding-left: 10px;
    height: 85px;
    div:nth-child(1) {
      font-size: 20px;
    }
    div:nth-child(2) {
      font-size: 14px;
      margin-top: 10px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
}
.up_article_foot {
  cursor: pointer;
  width: 100%;
  min-height: 106px;
  border-top: 1px solid #dddddd;
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    width: 118px;
    height: 67px;
  }
  .up_content {
    display: flex;
    flex-direction: column;
    padding-top: 5px;
    padding-left: 10px;
    min-height: 67px;
    div:nth-child(1) {
      font-size: 20px;
    }
    div:nth-child(2) {
      font-size: 14px;
      margin-top: 10px;
    }
  }
}
.box_title {
  min-height: 100px;
  font-size: 18px;
  color: #333333;
  border-bottom: 1px dashed #999999;
  div:nth-child(1) {
    margin-top: 20px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  div:nth-child(2) {
    margin-top: 10px;
    color: #999999;
  }
}
.box_content {
  margin-top: 20px;
  font-size: 15px;
  // color: #999999;
  padding: 10px;
  img {
    width: 100%;
    height: 500px;
  }
}
@media screen and (min-width: 600px) {
  .tab_box {
    width: 100%;
    min-height: 500px;
  }
  .box_content {
    img {
      width: 100% !important;
    }
  }
}
@media screen and (max-width: 600px) {
  .newsdetail {
    width: 90%;
  }
}
</style>
<style>
.box_content img {
  width: 100%;
}
.ql-container.ql-snow {
  border: 0 !important;
}
</style>
