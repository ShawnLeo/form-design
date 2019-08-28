<template>
	<div class="divider-config">

		<Form ref="dividerFrom" :model="config">

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

		</Form>

	</div>
</template>
<script>
	export default {
		name: 'mmt-divider-config',
		props: {
			config: Object
		}
	};
</script>

<style scoped>
	.divider-config {
		padding: 20px 15px;
	}
</style>
