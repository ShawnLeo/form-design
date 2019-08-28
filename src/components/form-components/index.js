import input from './input/input.vue';
import inputNumber from './input-number/input-number.vue';
import radio from './radio/radio.vue';
import select from './select/select.vue';
import checkbox from './checkbox/checkbox.vue';
import datePicker from './date-picker/date-picker.vue';
import dateRange from './date-range/date-range.vue';
import divider from './divider/divider.vue';
import textarea from './textarea/textarea.vue';
import label from './label/label.vue';

// 所有组件
const formComponentsMap = {
	[input.name]: input,
	[inputNumber.name]: inputNumber,
	[checkbox.name]: checkbox,
	[select.name]: select,
	[datePicker.name]: datePicker,
	[dateRange.name]: dateRange,
	[divider.name]: divider,
	[textarea.name]: textarea,
	[radio.name]: radio,
	[label.name]: label
};

export default formComponentsMap;