import popup from './popup.vue';

if (typeof window !== 'undefined' && window.Vue) {
	// 自动加载至全局组件
	window.Vue.component("mmt_" + popup.name, popup);
}

export default popup;