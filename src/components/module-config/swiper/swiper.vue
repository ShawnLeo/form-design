<template>
	<div :class="`${preCls}`" class="popup">

		<Form ref="popupFrom" :model="popupFrom">
			<FormItem :label="config.padding.name" prop="padding">
				<RadioGroup v-model="config.padding.value">
					<Radio v-for="(item, index) in ynOption" :label="item.value" :key="index">{{item.title}}</Radio>
				</RadioGroup>
			</FormItem>
			<FormItem :label="config.round.name" prop="round">
				<RadioGroup v-model="config.round.value">
					<Radio v-for="(item, index) in ynOption" :label="item.value" :key="index">{{item.title}}</Radio>
				</RadioGroup>
			</FormItem>
			<FormItem :label="config.showDots.name" prop="showDots">
				<RadioGroup v-model="config.showDots.value">
					<Radio v-for="(item, index) in ynOption" :label="item.value" :key="index">{{item.title}}</Radio>
				</RadioGroup>
			</FormItem>
			<FormItem :label="config.dots.name" prop="dots" v-show="config.showDots.value === 'yes'">
				<RadioGroup v-model="config.dots.value">
					<Radio v-for="(item, index) in dotsOption" :label="item.value" :key="index">{{item.title}}</Radio>
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
				ynOption: [{
					value: 'yes',
					title: '有'
				}, {
					value: 'no',
					title: '无'
				}],
				dotsOption: [{
					value: 'inner',
					title: '图内'
				}, {
					value: 'outer',
					title: '图外'
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
