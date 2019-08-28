<template>
	<div class="date-picker-config">

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

			<FormItem label="占位内容" prop="title">
				<Input v-model="config.placeholder" placeholder="请输入占位内容"/>
			</FormItem>

			<FormItem label="日期格式" prop="format" @on-change="changeFormat">
				<RadioGroup v-model="config.format">
					<Radio label="yyyy-MM-dd HH:mm">年-月-日	时:分</Radio>
					<Radio label="yyyy-MM-dd">年-月-日</Radio>
					<Radio label="yyyy-MM">年-月</Radio>
				</RadioGroup>
			</FormItem>

		</Form>

	</div>
</template>
<script>
	export default {
		name: 'mmt-date-picker-config',
		props: {
			config: Object,
			info: Object
		},
		methods: {
			changeFormat(e) {
				if (e === 'yyyy-MM-dd HH:mm'){
					this.config.type = 'datetime';
				} else {
					this.config.type = 'date';
				}
			}
		},
		computed: {}
	};
</script>

<style scoped>
	.date-picker-config {
		padding: 20px 15px;
	}
</style>

