<template>
	<div class="checkbox-config">

		<Form ref="inputFrom" :model="config"  label-position="top">

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

			<FormItem label="选项" prop="title">

				<CheckboxGroup v-model="config.defaultValue" @on-change="checkboxChange">
					<Checkbox v-for="(item, index)  in config.options" :label="item.value" :key="index">
						<Input v-model="item.label" style="width: 120px"/>
						<Button icon="md-remove" shape="circle" size="small" @click="remove(index)"></Button>
					</Checkbox>
				</CheckboxGroup>

				<Button size="small" type="dashed" @click="addOptions" style="margin-top: 15px;">添加选项</Button>

			</FormItem>

		</Form>

	</div>
</template>
<script>
	import Checkbox from "../../../../node_modules/iview/src/components/checkbox/checkbox.vue";

	export default {
		components: {Checkbox},
		name: 'mmt-checkbox-config',
		props: {
			config: Object,
			info: Object
		},
		computed: {},
		methods: {
			addOptions() {
				let num = Math.floor(Math.random() * (1 - 100) + 100);
				let value = 'option' + '-' + new Date().getTime() + '-' + num;
				this.config.options.push({value: value, label: '选项'});
			},
			remove(index) {
				this.config.options.splice(index, 1);
			},
			checkboxChange(event) {
				this.config.defaultValue = event;
			}
		}
	};
</script>

<style scoped>
	.checkbox-config {
		padding: 20px 15px;
	}
</style>

