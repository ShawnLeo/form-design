import select from './select.vue';

if (typeof window !== 'undefined' && window.Vue) {
	// 自动加载至全局组件
	window.Vue.component(select.name, select);
}

export default select;