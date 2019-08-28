import formPreviewWebapp from './views/form-decorate/preview-webapp.vue';
import * as formUtils from './utils/utils';
import formComponentsWebappMap from './components/form-components-webapp';


// 自动安装表单组件
const install = function(Vue) {
	Object.keys(formComponentsWebappMap).forEach(key => {
		Vue.component(key, formComponentsWebappMap[key]);
	});
};

let FormDesign = {
	install,
	formPreviewWebapp, // 预览组件
	formUtils,
};

export default FormDesign;