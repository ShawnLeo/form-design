<template>
	<div class="input-config">

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

			<FormItem label="字段最大长度" prop="maxLength">
				<InputNumber v-model="config.maxLength" placeholder="字段最大长度（默认80）"/>
			</FormItem>

		</Form>

	</div>
</template>
<script>
	export default {
		name: 'mmt-input-config',
		props: {
			config: Object,
			info: Object
		},
		computed: {}
	};
</script>

<style scoped>
	.input-config {
		padding: 20px 15px;
	}
</style>
