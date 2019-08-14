import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    // mode: 'history',
    routes: [{
            path: '/',
            redirect: '/defaultPage'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: {
                title: '自述文件'
            },
            name: 'home',
            children: [
                {
                    path: '/defaultPage',
                    component: resolve => require(['../components/home/defaultPage.vue'], resolve),
                    meta: {
                        title: '首页',
                        permission: true,
                        keepAlive: true
                    },
                    name: 'defaultPage'
                },
                {
                    path: '/productCenter',
                    component: resolve => require(['../components/product/productCenter.vue'], resolve),
                    meta: {
                        title: '产品中心',
                        permission: true,
                        keepAlive: true
                    },
                    name: 'productCenter'
                },
                {
                    path: '/about_us',
                    component: resolve => require(['../components/about/aboutUs.vue'], resolve),
                    meta: {
                        title: '关于我们',
                        permission: true,
                        keepAlive: true
                    },
                    name: 'about_us'
                },
                {
                    path: '/news',
                    component: resolve => require(['../components/news/news.vue'], resolve),
                    meta: {
                        title: '新闻动态',
                        permission: true,
                        keepAlive: true
                    },
                    name: 'news'
                },
				{
				    path: '/news_detail',
				    component: resolve => require(['../components/news/newsDetail.vue'], resolve),
				    meta: {
				        title: '新闻详情',
				        permission: true,
				        keepAlive: true
				    },
				    name: 'news'
				},
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve),
            name: 'login'
        },
        {
            path: '/404',
            component: resolve => require(['../components/page/404.vue'], resolve)
        },
        {
            path: '/403',
            component: resolve => require(['../components/page/403.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
    ],
	scrollBehavior (to, from, savedPosition) {
	 return { x: 0, y: 0 }
	}
})
