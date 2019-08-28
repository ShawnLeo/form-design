import singleRowImage from './single-row-image.vue';

if (typeof window !== 'undefined' && window.Vue) {
	// 自动加载至全局组件
	console.log('aaa');
	window.Vue.component("mmt_" + singleRowImage.name, singleRowImage);
}

export default singleRowImage;