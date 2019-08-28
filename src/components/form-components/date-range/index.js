import doubleRowImage from './date-range.vue';

if (typeof window !== 'undefined' && window.Vue) {
	// 自动加载至全局组件
	window.Vue.component("mmt_" + doubleRowImage.name, doubleRowImage);
}

export default doubleRowImage;