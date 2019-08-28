<template>
	<div ref="popupMask" class="popup-mask" :class="[{'is-round': config.round.value === 'yes'}]" v-show="cdata.visible">
		<img :src="emptySrc" class="popup-content"/>
		<div class="popup-close" @click="hide"></div>
	</div>
</template>

<script type="text/ecmascript-6">
	import Mixin from '../mixin';
	export default {
		name: 'popup',
		mixins: [Mixin],
		data() {
			return {
				emptySrc: "data:image/png;base64,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"
			};
		},
		computed: {},
		methods: {
			hide() {
				this.cdata.visible = false;
			}
		},
		mounted() {
//			console.log();
//			console.log(this.config);
		}
	};
</script>

<style scoped>

	.popup-mask {
		position: fixed;
		/*position: absolute;*/
		z-index: 997;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, .7);
	}

	.popup-mask .popup-content {
		display: block;
		margin: 1rem auto;
		width: 80%;
		height: 7rem;
	}

	.is-round .popup-content {
		border-radius: .2rem;
	}

	.popup-mask .popup-close {
		width: .7rem;
		height: .7rem;
		margin: 0rem auto;
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAMAAAAPzWOAAAAAk1BMVEUAAAD29vZ/f3+EhIT29vZ/f39/f3+BgYGIiIj////29vb///+AgIB+fn5+fn5+fn6AgIB/f3+AgIB+fn6BgYGCgoJ/f39+fn5/f39+fn5/f39+fn5/f3+AgIB/f3+AgICDg4OBgYGGhob29vb29vb19fX29vb29vb19fX39/f39/f4+Pj39/f////19fV+fn729vaP7z79AAAAL3RSTlMAV/kH2bhfNQ4Frxls2cOuoJCGeCwozO7f3r2qpXRlTiUcFZfz5+KphnhZST8UNT2MkIcAAAJxSURBVFjDnJTbVoMwEEUP0oSoQLkUtVp78961NPz/1zkhqwodOkD3K3Q3c+YESITVRsdlGetNFeISdjpLbIsk0ztMYh/f2R7u4j3GslhdWc9SZXlR5JlaWs/VaoExVHP/uiqjsBVPVCqvnlcYIiyaV9O1AcOs00ZfDKQcPTR/Fp193hzzIYLAsztGuhADS91hns+P8kTP7zUG0Pf02tOZkcyjq8MWg2xdgR5Nr8NVQxmMwChXGgNG6M6RYyS5OwufyOURYzSxy4XthZ9j+CwnO4potwqTULTpqBMIdSwxmIRJqHXtWArqxxYT2VJfitado2E0JqNpoP/bOKeu4wJSumZ/14GCbt+Xn9lbgD6uX14/ruHgP1w5YYtZXddBn+OGHnwBaI+wQsOeEuns6q32Fu4gPjvNoFT2vnyniQT10cIds+/TVHzN6eKt0W/hjlt0WNNFBLGjIxkIFsEBQ1Hs/LYVIFgEB6B8wzJrSwgW0YHS2gxA4nYjWASH308ChFSYEIJFchx/Xlm7BASL6ACW1lbYuFwly0Fw+GQ30C4Z0SI4/F40YumzGAw6kLvOlq0vC+fQON6Zo/M9K5mEd50IZAkbhzmYhY/DgmWO999a7N2IQRiIomjsOuQZmwH6b4+AQMFRdqEAboB232eh8GN5YneObeSJGTYYbKPDxtjLgMLYs4AwoLCASAEMKEoBogQDiqKEPMKAojwq1DKkKNRaxpgMKQeWsTav72RIGZjX2kZ/kyFlx0bXhv7Z/ud6PI9xM/iwR4sech6NWz349Qjaw3CP5S8UhF5Vemnq9a0XyV5pe7nuNb8fHPrp49UjTD8HXeAzlJNcOq7GAAAAAElFTkSuQmCC);
		background-size: 100% 100%;
	}

</style>