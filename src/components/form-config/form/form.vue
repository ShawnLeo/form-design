<template>
	<div class="form-config">

		<Form ref="formFrom" :model="formData">

			<FormItem label="表单标题" prop="round">
				<Input v-model="formData.title" placeholder="请输入表单标题"/>
			</FormItem>

			<FormItem label="表单描述" prop="round">
				<Input v-model="formData.description" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
					placeholder="请输入表单描述" />
			</FormItem>

		</Form>

	</div>
</template>
<script>
	export default {
		name: 'mmt-form-config',
		props: {
			formData: Object
		}
	};
</script>

<style scoped>
	.form-config {
		padding: 20px 15px;
	}
</style>
