<template>

	<div class="component-container " :class="item.info.key"
		@dragstart="onDragStart($event, item, index)" @dragend="onDragEnd($event, item, index)">

		<Poptip confirm placement="left-start"
			class="delete-poptip" v-show="item.checked"
			title="删除模块？" @on-ok="deleteItem(parents, index)">
			<Button size="small" class="plugin-delete-btn" shape="circle"
				icon="ios-close"></Button>
		</Poptip>

		<div class="table-header" v-if="formTable">
			<span>{{item.config.label}} </span>
			<span style="color: #fb6e52;" v-if="item.config.require">*</span>
		</div>

		<component class="common-component" :is="item.info.key"
			v-if="item.info.key" :config="item.config"></component>

		<div class="plugin-content-hover" @click.stop="selectItem(parents, item, index)"
			:class="{'checked-border':  item.checked}">
		</div>

	</div>
</template>

<script>
	export default {
		name: 'form-item',
		props: {
			item: {
				type: Object
			},
			index: {
				type: Number
			},
			parents: {
				type: Array
			},
			formTable: {
				type: Boolean
			}
		},
		data() {
			return {

			};
		},
		methods: {
			onDragStart(event, item, index) {
				event.target.style.opacity = '0.2';
				this.$emit('onDragStart', item, index);
			},
			// 装饰区组件拖拽 结束 事件
			onDragEnd(event, item, index) {
				event.target.style.opacity = 1;
				this.$emit('onDragEnd', item, index);
			},
			// 删除一个组件
			deleteItem(list, index) {
				this.$emit('deleteItem', list, index);
			},
			// 选中组件
			selectItem(list, item, index) {
				this.$emit('selectItem', list, item, index);
			}
		}
	};
</script>

<style lang="less" scoped>
	@import '../../assets/css/variable.less';
	.component-container { // 表单组件容器
		position: relative;
		box-sizing: border-box;
		min-height: 60px;
		border: 1px solid inherit;
		.common-component {
			padding: 15px 5px;
			cursor: pointer;
			z-index: 997;
		}

		.table-header {
			height: 38px;
			border-bottom: 1px solid #ddd;
			background: #f0f0f0;
			padding-left: 10px;
			font-size: 14px;
			color: #555;
			font-weight: bold;
			line-height: 38px;
		}
		.plugin-content-hover {
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			cursor: move;
			z-index: 996;
			&.checked-border {
				border: 1px dashed @primary-color;
			}
			&:hover {
				border: 1px dashed @primary-color;
			}
		}
		.delete-poptip {
			z-index: 999;
			position: absolute;
			right: -10px;
			top: -10px;
			.plugin-delete-btn {
				cursor: pointer;
				width: 20px;
				height: 20px;
			}
		}
	}

</style>