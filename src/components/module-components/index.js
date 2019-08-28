import SingleRowImages from './single-row-image/single-row-image.vue';
import DoubleRowImage from './double-row-image/double-row-image.vue';
import Popup from './popup/popup.vue';
import Swiper from './swiper/swiper.vue';

const preCls = 'mmt_';

// 所有组件
const componentsMap = {
	[`${preCls}single-row-image`]: SingleRowImages,
	[`${preCls}double-row-image`]: DoubleRowImage,
	[`${preCls}popup`]: Popup,
	[`${preCls}swiper`]: Swiper
};

export default componentsMap;