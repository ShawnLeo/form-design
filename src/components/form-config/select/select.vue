<template>
	<div class="select-config">

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

				<RadioGroup v-model="config.defaultValue" @on-change="radioChange">

					<Radio v-for="(item, index)  in config.options" :label="item.value" :key="index">
						<Input v-model="item.label" style="width: 100px"/>
						<Button icon="md-remove" shape="circle" size="small" @click="remove(index)"></Button>
						<Button icon="md-key" shape="circle" size="small" @click="setKey(index)"></Button>
					</Radio>

				</RadioGroup>

				<br/>
				<Button size="small" type="dashed" @click="addOptions" style="margin-top: 15px;">添加选项</Button>

			</FormItem>

		</Form>

	</div>
</template>
<script>
	export default {
		name: 'mmt-select-config',
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
			setKey(index) {
				let tempKey = this.config.options[index].value;
				this.$Modal.confirm({
					title: "设置选项key",
					onOk: () => {
						let exist = false;
						for(let i = 0; i < this.config.options.length; i++) {
							if (i === index) {
								continue;
							}
							if (tempKey === this.config.options[i].value) {
								exist = true;
								break;
							}
						}
						if (exist) {
							this.$Message.error("设置失败，选项Key不能重复！");
						} else {
							this.config.options[index].value = tempKey;
							this.$Message.success("设置成功！");
						}
					},
					render: (h) => {
						return h('Input', {
							props: {
								value: this.config.options[index].value,
								autofocus: true,
								placeholder: '请输入选项key'
							},
							on: { input: (val) => { tempKey = val; } }
						});
					}
				});

			},
			radioChange(event) {
				this.config.defaultValue = event;
			}
		}
	};
</script>

<style scoped>
	.select-config {
		padding: 20px 15px;
	}
</style>
