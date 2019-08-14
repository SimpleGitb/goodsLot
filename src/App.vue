<template>
    <div id="app">
        <transition name="move" mode="out-in">
            <!-- include="application,assetsrecord,assetsresult,baselineobserver,dashboard,baseform,monitorDetails,monitorResult,normalobserver,pushSetting,serverAsset,strategicmanage,tabs,Threatview,unIt,user" -->
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
    </div>
</template>
<style lang="less">
    @import "../static/css/main.css";
    /*深色主题*/
    /*@import "../static/css/theme-green/color-green.css";   浅绿色主题*/

</style>
<script>
    import Vue from 'vue';
    export default {
        data() {
            return {}
        },
        methods: {
            onscorll(){
                window.scroll(0,0);
            }
        },
        mounted() {

        },
        created() {
            // this.$axios.get('api/person').then((res)=>{
            //     if(res.data.data.role !== 1){
            //         window.location.href = '/403'
            //     }
            //     localStorage.role = res.data.data.role;
            // });

        },
        watch: {//使用watch 监听$router的变化
            $route(to, from) {
                window.scroll(0,0);
            }
        },
    };

</script>
