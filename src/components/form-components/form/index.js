import form from './form.vue';

if (typeof window !== 'undefined' && window.Vue) {
	// 自动加载至全局组件
	window.Vue.component(form.name, form);
}

export default form;