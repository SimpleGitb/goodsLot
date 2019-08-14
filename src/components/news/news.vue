<template>
  <div class="news">
    <div class="banner"
         style="backgroundImage:url(static/img/news/xwdt.png)">
      <img src="static/img/news/xwdt.png"
           alt="">
    </div>
    <div class="tab_box">
      <div class="tab_content">
        <el-tabs v-model="activeName"
                 @tab-click="handleClick"
                 v-loading="loading">
          <el-tab-pane :label="item.name"
                       :name="item.id+'menu'"
                       v-for="item in menuTitle"
                       :key="item.id+'menu'">
            <div class="noData"
                 v-if="menuList.length==0">无数据</div>
            <div class="tabcontent_list"
                 @click="listDetail(menu.id,menu.menuId)"
                 v-else
                 v-for="menu in menuList"
                 :key="menu.id+'menu'">
              <div class="list_1"
                   :style="{'backgroundImage': 'url(' + menu.url + ')'}"></div>
              <div class="list_2-box">
                <div class="list_2">
                  <div class="news-tit">{{menu.title}}</div>
                  <div class="news-np"
                       v-html="menu.subTitle"></div>
                </div>
                <div class="list_3">{{sliceTime(menu.createTime)}}</div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
        <div class="pagination_box">
          <el-pagination background
                         @current-change="handleCurrentChange"
                         :current-page="currentPage"
                         :page-size="10"
                         layout=" prev, pager, next"
                         :total="total">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
import store from '../../store/index.js'
import { menu, MenuArticle } from '../../api/userMessage.js'
export default {
  name: "news",
  data () {
    return {
      activeName: '1menu',
      currentPage: 1,
      menuTitle: [],
      menuList: [],
      menuId: '',
      total: 1,
      loading: false
    };
  },
  mounted () {
    this.getMenu();
  },
  methods: {
    handleClick (tab, event) {
      this.currentPage = 1;
      var reg = new RegExp("menu", "g");
      var tab_menuId = tab.name.replace(reg, "");
      this.menuId = tab_menuId;
      this.getArticle();
    },
    handleCurrentChange (val) {
      this.currentPage = val;
      this.getArticle();
    },
    listDetail (id, menuId) {
      store.commit('changeIsBack', '新闻动态 - 详情');
      this.$router.push({ path: '/news_detail', query: { id: id, menuId: menuId } })
    },
    getMenu () {
      menu().then(ret => {
        this.menuTitle = ret.data.list;
        this.menuId = this.menuTitle[0].id;
        this.activeName = this.menuId + 'menu';
        this.getArticle();
      })
    },
    getArticle () {
      this.loading = true;
      MenuArticle(this.menuId, this.currentPage).then(ret => {
        this.loading = false;
        this.menuList = ret.data.list;
        this.total = ret.data.total;
      })
    },
    sliceTime (time) {
      var slice_ime = '';
      if (time != null) {
        slice_ime = time.slice(5, 10);
      }
      return slice_ime;
    }
  }
};
</script>

<style lang="less" scoped>
.tabcontent_list {
  padding: 30px 0;
  border-bottom: 1px solid #eee;
  margin-bottom: 0;
}
.list_1 {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.list_2-box {
  width: 70%;
  display: flex;
  align-items: center;
}
.news-tit {
  line-height: 30px;
  height: 60px;
  overflow: hidden;
  font-size: 22px;
  color: #333333;
}
.news-np {
  line-height: 25px;
  max-height: 75px;
  overflow: hidden;
  font-size: 14px;
  color: #666;
}
.list_2 {
  flex: 1;
  width: 100%;
  padding: 0 30px;
}
.list_3 {
  text-align: right;
  border-left: 1px solid #eee;
  height: 80px;
  justify-content: flex-end;
  width: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #999999;
  font-size: 32px;
}
.news {
  font-size: 0.24rem;
}
.tab_box {
  margin-top: 20px;
}
.pagination_box {
  margin-bottom: 20px;
}
.pagination_box {
  width: 100%;
  text-align: center;
}
@media screen and (min-width: 600px) {
  .banner {
    width: 100%;
    height: 2.8rem;
    img {
      width: 100%;
      height: 2.8rem;
    }
  }
  .tab_box {
    width: 100%;
    min-height: 500px;
  }
  .el-tabs {
    min-height: 450px;
  }
  .tab_content {
    width: 70%;
    margin: auto;
  }
  .tabcontent_list {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    margin-bottom: 20px;

    .list_1 {
      width: 30%;
      height: 190px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
@media screen and (max-width: 600px) {
  .banner {
    width: 100%;
    height: 8rem;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    img {
      display: none;
    }
  }
  .tab_box {
    width: 100%;
    min-height: 500px;
    padding: 20px;
    box-sizing: border-box;
  }
  .el-tabs {
    min-height: 250px;
  }
  .tab_content {
    width: 100%;
    margin: auto;
  }
  .tabcontent_list {
    width: 100%;
    margin-bottom: 1.5rem;
    padding-top: 0;
    margin-bottom: 1rem;
    padding-bottom: 0.6rem;
    cursor: pointer;
    > div {
      height: 100%;
    }
    .list_1 {
      width: 100%;
      height: 10rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .list_2-box {
      width: 100%;
      margin-top: 0.6rem;
    }
    .list_2 {
      padding-left: 0;
      .news-tit {
        font-size: 16px;
        max-height: 50px;
        overflow: hidden;
        line-height: 25px;
        height: auto;
      }
      .news-np {
        height: auto !important;
        max-height: 20px;
        max-height: 45px;
      }
    }
    .list_3 {
      width: 4rem;
      font-size: 18px;
      height: 3rem;
    }
  }
}
</style>
