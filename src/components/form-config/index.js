import input from './input/input.vue';
import inputNumber from './input-number/input-number.vue';
import textarea from './textarea/textarea.vue';
import select from './select/select.vue';
import datePicker from './date-picker/date-picker.vue';
import dateRange from './date-range/date-range.vue';
import checkbox from './checkbox/checkbox.vue';
import radio from './radio/radio.vue';
import divider from './divider/divider.vue';
import label from './label/label.vue';

// 所有组件
const formConfigComponentsMap = {
	[input.name]: input,
	[inputNumber.name]: inputNumber,
	[textarea.name]: textarea,
	[select.name]: select,
	[datePicker.name]: datePicker,
	[dateRange.name]: dateRange,
	[checkbox.name]: checkbox,
	[radio.name]: radio,
	[divider.name]: divider,
	[label.name]: label
};

export default formConfigComponentsMap;