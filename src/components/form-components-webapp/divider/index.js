import divider from './divider.vue';

if (typeof window !== 'undefined' && window.Vue) {
	// 自动加载至全局组件
	window.Vue.component(divider.name, divider);
}

export default divider;