<template>
	<div :class="`${preCls}`">

		<Form ref="singleRowImagesFrom" :model="singleRowImagesFrom">
			<FormItem :label="config.padding.name" prop="padding">
				<RadioGroup v-model="config.padding.value">
					<Radio v-for="(item, index) in paddingOptions" :label="item.value" :key="index">{{item.title}}</Radio>
				</RadioGroup>
			</FormItem>
			<FormItem :label="config.round.name" prop="round">
				<RadioGroup v-model="config.round.value">
					<Radio v-for="(item, index) in paddingOptions" :label="item.value" :key="index">{{item.title}}</Radio>
				</RadioGroup>
			</FormItem>
		</Form>

		<description title="上传图片" :desc="config.images.props.desc"/>

	</div>
</template>
<script>
	import Description from '../custom-item/desc.vue';
	//	import Item from '../config-components/item';
	//	import AddImg from '../../config-components/add-img';
	//	import AddItem from '../../config-components/add-item';
	//	import LinkForm from '../../config-components/link-form';
	//	import TextForm from '../../config-components/text-form';
	//	import FormLabel from '../../config-components/form-label';
	import Mixin from '../mixin';
	//	import Emitter from '@/mixins/emitter';
	const preCls = 'config-single-row-image';
	export default {
		data() {
			return {
				limit: 20,
				preCls,
				singleRowImagesFrom: {},
				paddingOptions: [{
					value: 'yes',
					title: '有'
				}, {
					value: 'no',
					title: '无'
				}]
			};
		},
		components: {
			Description
//			Item
//			AddImg,
//			AddItem,
//			LinkForm,
//			TextForm,
//			FormLabel
		},
		mixins: [Mixin],
		mounted() {
//			this.padding = this.dataJson[0].padding || 'yes';
		},
		watch: {
//			padding(val) {
//				this.dataJson = this.dataJson.map(item => {
//					item.padding = val;
//					return item;
//				});
//			},
//			dataJson() {
//				this.padding = this.dataJson[0].padding || 'yes';
//			}
		},
		methods: {
//			imageChange(image) {
//				console.log(image);
//			},
//			addItem() {
//				let emptyItem = {
//					title: '',
//					image: '',
//					url: '',
//					padding: this.padding
//				};
//				if (this.dataJson.length >= this.limit) {
//					return;
//				}
//				this.dataJson.push(emptyItem);
//			}
		}
	};
</script>

<style lang='less' scoped>
	.config-content {
		&.single-row-image{

		}
		/*&-item {*/
		//			.flex-center-left();
		/*}*/
		/*&-text {*/
		/*width: 166px;*/
		/*margin-left: 10px;*/
		/*}*/
	}
</style>
