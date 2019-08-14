<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="collapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <template v-if="type == 1 && item.title != '收银系统'">
            <el-submenu :index="item.index" :key="item.index">
              <template slot="title">
                <i :class="'iconfont ' + item.icon"></i
                ><span slot="title">{{ item.title }}</span>
              </template>
              <el-menu-item
                v-for="(subItem, i) in item.subs"
                :key="i"
                :index="subItem.index"
              >
                <i :class="'iconfont ' + subItem.icon"></i
                ><span slot="title">{{ subItem.title }}</span>
              </el-menu-item>
            </el-submenu>
          </template>
          <template v-if="type == 2 && item.title == '收银系统'">
            <el-submenu :index="item.index" :key="item.index">
              <template slot="title">
                <i :class="'iconfont ' + item.icon"></i
                ><span slot="title">{{ item.title }}</span>
              </template>
              <el-menu-item
                v-for="(subItem, i) in item.subs"
                :key="i"
                :index="subItem.index"
              >
                <i :class="'iconfont ' + subItem.icon"></i
                ><span slot="title">{{ subItem.title }}</span>
              </el-menu-item>
            </el-submenu>
          </template>
        </template>
        <template v-else>
          <template v-if="type == 0">
            <el-menu-item
              :index="item.index"
              :key="item.index"
              v-if="item.title == '总店管理' || item.title == '资料修改'"
            >
              <i :class="'iconfont ' + item.icon"></i
              ><span slot="title">{{ item.title }}</span>
            </el-menu-item>
          </template>
          <template v-if="type == 1">
            <el-menu-item
              :index="item.index"
              :key="item.index"
              v-if="
                item.title != '总店管理' &&
                  item.title != '商品展示' &&
                  item.title != '申请进货单' &&
                  item.title != '收银系统' &&
                  item.title != '库存管理'
              "
            >
              <i :class="'iconfont ' + item.icon"></i
              ><span slot="title">{{ item.title }}</span>
            </el-menu-item>
          </template>
          <template v-if="type == 2">
            <el-menu-item
              :index="item.index"
              :key="item.index"
              v-if="
                item.title != '总店管理' &&
                  item.title != '分店管理' &&
                  item.title != '进货管理' &&
                  item.title != '报废审核' &&
                  item.title != '银行卡' &&
                  item.title != '财务管理'  
              "
            >
              <i :class="'iconfont ' + item.icon"></i
              ><span slot="title">{{ item.title }}</span>
            </el-menu-item>
          </template>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import bus from "../common/bus";
export default {
  data() {
    return {
      collapse: false,
      iconfont: "iconfont",
      items: [
        {
          icon: "iconxitong",
          index: "secondofficeManagement",
          title: "分店管理"
        },
        {
          icon: "iconxitong",
          index: "productShow",
          title: "商品展示"
        },
        {
          icon: "iconxitong",
          index: "applyIncome",
          title: "申请进货单"
        },
        {
          icon: "iconxitong",
          index: "1",
          title: "商品管理",
          subs: [
            {
              icon: "icontimuguanli",
              index: "shopInformation",
              title: "信息类别维护"
            },
            {
              icon: "icontimuguanli",
              index: "shopManagement",
              title: "商品添加"
            },
            {
              icon: "icontimuguanli",
              index: "productList",
              title: "商品列表"
            }
          ]
        },
        {
          icon: "icontimuguanli",
          index: "incomeProcess",
          title: "进货管理"
        },
        {
          icon: "icontimuguanli",
          index: "1",
          title: "收银系统",
          subs: [
            {
              icon: "icontimuguanli",
              index: "cashSystem",
              title: "添加商品"
            },
            {
              icon: "icontimuguanli",
              index: "orderList",
              title: "订单列表"
            }
          ]
        },
        {
          icon: "icontimuguanli",
          index: "stockManagement",
          title: "库存管理"
        },
        {
          icon: "icontimuguanli",
          index: "proScrapList",
          title: "报废审核"
        },
        {
          icon: "icontimuguanli",
          index: "financialSystem",
          title: "财务管理"
        },
        {
          icon: "icontimuguanli",
          index: "HeadofficeManagement",
          title: "总店管理"
        },
        {
          icon: "icontimuguanli",
          index: "cardBinding",
          title: "银行卡"
        },
        {
          icon: "iconweibiaoti3",
          index: "modifyData",
          title: "资料修改"
        }
        // {
        //     icon: 'icon-guanlis',
        //     index: '1',
        //     title: '1',
        //     subs: [
        //         {
        //             icon: 'icon-wangzhan',
        //             index: 'assets',
        //             title: '1-1'
        //         }
        //     ]
        // },
        //  {
        //     icon: 'icon-xinxiguanli',
        //     index: '2',
        //     title: '2',
        //     subs: [
        //         {
        //             icon: 'icon-weibiaoti2010101',
        //             index: 'unitlist',
        //             title: '2-1',
        //         }
        //     ]
        // }
      ],
      type: 0
    };
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace("/", "");
    }
  },
  methods: {},
  created() {
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    bus.$on("collapse", msg => {
      this.collapse = msg;
    });
    if (sessionStorage.type) {
      this.type = sessionStorage.type;
    }
  }
};
</script>

<style scoped>
/* @import url('//at.alicdn.com/t/font_754796_0cgprhtaqo8d.css'); */
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}

.sidebar::-webkit-scrollbar {
  width: 0;
}

.sidebar-el-menu:not(.el-menu--collapse) {
  width: 200px;
}

.sidebar > ul {
  height: 100%;
}

.sidebar .el-menu .iconfont {
  font-size: 20px;
  padding-right: 10px;
}

.sidebar .el-menu .el-menu:nth-of-type(1) .iconfont {
  font-size: 18px;
  padding-right: 10px;
}

.sidebar .el-menu .el-menu-item .icon-xinxiguanli {
  font-size: 18px;
}

.sidebar .el-menu .el-menu-item .icon-shouye {
  font-size: 20px;
  padding-right: 10px;
}
</style>
