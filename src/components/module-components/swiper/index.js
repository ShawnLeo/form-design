import swiper from './swiper.vue';

if (typeof window !== 'undefined' && window.Vue) {
	// 自动加载至全局组件
	window.Vue.component("mmt_" + swiper.name, swiper);
}

export default swiper;