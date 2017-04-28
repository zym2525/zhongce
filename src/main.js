// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import goods from './components/goods/goods';
import ratings from './components/ratings/ratings';
import seller from './components/seller/seller';

import './common/stylus/index.styl';

Vue.config.productionTip = false;

Vue.use(VueRouter);

let routes = [{
	path: '/',
	name: 'index',
	component: App,
	children: [{
			path: '/goods',
			component: goods
		},
		{
			path: '/ratings',
			component: ratings
		},
		{
			path: '/seller',
			component: seller
		}
	]
}];

let router = new VueRouter({
	'linkActiveClass': 'active',
	routes
});

let app = new Vue({
	router,
	template: '<router-view></router-view>'
}).$mount('#app');
	router.push('/goods');
	export default app;