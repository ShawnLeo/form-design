<template>
	<div class="component-list">

		<draggable v-model="components" v-bind="componentDragOption"
			@start="componentDragStart" @end="componentDragEnd"
			slot="content" class="component-list-item-content">

			<div class="component-list-item" @dragstart="dragStart" @dragend="onDragEnd"
				v-for="(item, index) in components" :key="index">
				<img src="../../assets/images/component-normal.png" class="component-list-item-img">
				<span class="component-list-item-text ">{{item.info.name}}</span>
			</div>

		</draggable>

	</div>
</template>

<script type="text/ecmascript-6">
	import draggable from 'vuedraggable';

	export default {
		name: 'component-list',
		components: {
			draggable
		},
		props: {
			components: {
				type: Array
			}
		},
		data() {
			return {
				componentDragEl: '',  // 记录被拖拽组件
				componentContentCopy: '', // 备份被拖拽组件html
				componentDragOption: {
					animation: 150,
					group: {
						name: 'icon',
						pull: 'clone',
						put: false
					},
					sort: false,
					chosenClass: 'sortable-chosen-icon',
					setData: (/** DataTransfer */dataTransfer, /** HTMLElement */dragEl) => {
						this.componentDragEl = dragEl;
						this.componentContentCopy = dragEl.innerHTML;
						// dataTransfer.dragStart(document.getElementById('panel'), 100, 1000); // `dataTransfer` object of HTML5 DragEvent
					}
				}
			};
		},
		methods: {
			// 组件区拖拽 开始 事件
			componentDragStart() {
				this.$emit('componentDragStart');
			},
			// 组件区拖拽 结束 事件
			componentDragEnd() {
				this.componentDragEl.innerHTML = this.componentContentCopy;
				this.$emit('componentDragEnd');
			},
			// 拖拽 开始 事件
			dragStart(event) {
//				console.log('dragStart......');
//				this.dragingFlag = true;
//				this.closeConfigDialogAndUncheckAll();
				event.target.style.opacity = '0.2';
			},
			// 装饰区组件拖拽 结束 事件
			onDragEnd(event) {
				event.target.style.opacity = 1;
			}

		}
	};
</script>

<style lang="less" scoped>
	@import '../../assets/css/variable.less';
	.component-list-item-content {
		display: flex;
		margin-left: 5px;
		flex-wrap: wrap;
		.component-list-item {
			width: 100px;
			height: 100px;
			cursor: pointer;
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;
			&:hover {
				background-color: #FFFAF0;
			}
			&.sortable-chosen-icon {
				border: 1px dashed @primary-color;
			}
			.component-list-item-img {
				width: 24px;
				border-style: none;
			}
			.component-list-item-text {
				margin-top: 30px;
				color: #666;
			}
		}
	}
</style>