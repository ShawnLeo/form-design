import radio from './checkbox.vue';

if (typeof window !== 'undefined' && window.Vue) {
	// 自动加载至全局组件
	window.Vue.component(radio.name, radio);
}

export default radio;