<template>
	<div class="input-number-config">

		<Form ref="inputFrom" :model="config" label-position="top">

			<FormItem label="组件Id" v-if="info.id">
				<Input v-model="info.id" disabled/>
			</FormItem>

			<FormItem label="文本标题" prop="title">
				<Input v-model="config.label" placeholder="请输入表单标题"/>
			</FormItem>

			<FormItem label="控件大小（pc端）" prop="tsize">
				<RadioGroup v-model="config.tsize">
					<Radio label="small">小尺寸</Radio>
					<Radio label="medium">标准大小</Radio>
					<Radio label="large">大尺寸</Radio>
				</RadioGroup>
			</FormItem>

			<FormItem label="必填项" prop="require">
				<Checkbox v-model="config.require" label="true"> 这个是必填项 </Checkbox>
			</FormItem>

			<!--<FormItem label="精度（小数位个数）" prop="precision">-->
				<!--<Input v-model="config.precision" placeholder="精度（小数位个数）"/>-->
			<!--</FormItem>-->

			<FormItem label="步伐" prop="step">
				<Input v-model="config.step" @input="calcPrecision" placeholder="每次改变的步伐，可以是小数"/>
			</FormItem>

			<FormItem label="最小值" prop="min">
				<InputNumber v-model="config.min" placeholder="字段最小值"/>
			</FormItem>

			<FormItem label="最大值" prop="max">
				<InputNumber v-model="config.max" placeholder="字段最大值"/>
			</FormItem>

		</Form>

	</div>
</template>
<script>
	export default {
		name: 'mmt-input-number-config',
		props: {
			config: Object,
			info: Object
		},
		methods: {
			calcPrecision(e) {
				let reg = /^\d+(\.\d+)?$/;
				if (!reg.test(e)) {
					this.$Message.error("输入错误！");
					return;
				}
				let a = e.toString().split(".");
				if (a.length > 1) {
					this.config.precision = a[1].length;   // 设置精度
				} else {
					this.config.precision = 0;
				}
			}
		},
		computed: {}
	};
</script>

<style scoped>
	.input-number-config {
		padding: 20px 15px;
	}
</style>
