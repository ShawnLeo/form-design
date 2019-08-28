/* 页面类组件*/
import formDecorate from './views/form-decorate/decorate.vue';
import formPreview from './views/form-decorate/preview.vue';
import formPreviewWebapp from './views/form-decorate/preview-webapp.vue';
const components = {
	formDecorate,
	formPreview,
	formPreviewWebapp
};

/* 所有组件 */
import formComponentsMap from './components/form-components';
import formConfigMap from './components/form-config';
import formComponentsWebappMap from './components/form-components-webapp';
let baseComponents = {...formComponentsMap, ...formConfigMap, ...formComponentsWebappMap};

const install = function(Vue) {
	Object.keys(baseComponents).forEach(key => {
		Vue.component(key, baseComponents[key]);
	});
};

/*工具*/
import * as formUtils from './utils/utils';
import {layoutComponents, formComponents} from './utils/components';

let FormDesign = {
	install,
	...components,
	formUtils,
	layoutComponents, // 布局组件
	formComponents, // 表单组件
	formComponentsWebappMap  // 手机端没有设计器，不需要安装全部组件
};

export default FormDesign;