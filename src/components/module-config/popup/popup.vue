<template>
	<div :class="`${preCls}`" class="popup">

		<Form ref="popupFrom" :model="popupFrom">
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
	import Mixin from '../mixin';
	const preCls = 'config-single-row-image';
	export default {
		data() {
			return {
				limit: 20,
				preCls,
				popupFrom: {},
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
		},
		mixins: [Mixin],
		mounted() {},
		watch: {},
		methods: {}
	};
</script>

<style lang='less' scoped>
	.config-content {
		&.popup{

		}
	}
</style>
