<template>
	<div class="form-table-config">

		<Form ref="formTableFrom" :model="config">

			<!--<FormItem label="子表名称" prop="title">-->
				<!--<Input v-model="config.label" placeholder="请输入子表名称"/>-->
			<!--</FormItem>-->
			<FormItem label="必填项" prop="require">
				<Checkbox v-model="config.require" label="true"> 这个是必填项 </Checkbox>
			</FormItem>

		</Form>

	</div>
</template>
<script>
	export default {
		name: 'mmt-details-sublist-config',
		props: {
			config: Object
		}
	};
</script>

<style scoped>
	.form-table-config {
		padding: 20px 15px;
	}
</style>
