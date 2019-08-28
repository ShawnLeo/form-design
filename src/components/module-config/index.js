import SingleRowImages from './single-row-image/single-row-image.vue';
import DoubleRowImage from './double-row-image/double-row-image.vue';
import popup from './popup/popup.vue';
import swiper from './swiper/swiper.vue';

const preCls = 'mmt_';

// 所有组件
const configComponentsMap = {
	[`${preCls}single-row-image`]: SingleRowImages,
	[`${preCls}double-row-image`]: DoubleRowImage,
	[`${preCls}popup`]: popup,
	[`${preCls}swiper`]: swiper
};

export default configComponentsMap;