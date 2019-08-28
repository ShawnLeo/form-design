import inputNumber from './input-number.vue';

if (typeof window !== 'undefined' && window.Vue) {
	// 自动加载至全局组件
	window.Vue.component(inputNumber.name, inputNumber);
}

export default inputNumber;