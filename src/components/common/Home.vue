<template>
  <div class="wrapper">
    <!-- <v-sidebar></v-sidebar> -->
    <v-head></v-head>
    <!-- <el-scrollbar style="height:100%"> -->
    <!-- <div style="width:100%;height:100%;overflow: auto;-webkit-overflow-scrolling: touch;"> -->
    <!-- <a name="firstAnchor">买的</a> -->
    <div class="content-box">
      <!-- <v-tags></v-tags> -->
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
    <v-footer></v-footer>
    <!-- </div> -->
    <!-- </el-scrollbar> -->

    <!-- <el-scrollbar style="height:100%">

        </el-scrollbar> -->
  </div>
</template>

<script>
import vHead from "./Header.vue";
import vSidebar from "./Sidebar.vue";
import vTags from "./Tags.vue";
import bus from "./bus";
import vFooter from "./Footer.vue";
export default {
  data () {
    return {
      tagsList: [],
      collapse: false
    };
  },
  components: {
    vHead,
    vSidebar,
    vTags,
    vFooter
  },
  created () {
  },
  mounted () {

  },
  watch: {
    $route (to, form) {
      window.scroll(0, 0);
    }
  },
  methods: {
  },
};
</script>
<style scoped>
.content {
  /* padding:15px; */
  width: 100%;
  /* overflow-x: hidden; */
  overflow: auto;
}
.wrapper {
  min-height: 100%;
}
.content-box {
  padding-top: 1rem;
}
@media screen and (max-width: 600px) {
  .content-box {
    padding-top: 100px;
  }
}
</style>

