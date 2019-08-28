<template>
	<div class="content-container">

		<div class="component-list-wrapper">
			<Tabs value="form">
				<TabPane label="布局控件" name="layout">
					<component-list :components="layoutComponents"
						@componentDragEnd="componentDragEnd" @componentDragStart="componentDragStart">
					</component-list>
				</TabPane>

				<TabPane label="表单控件" name="form">
					<div class="component-list form-component-list">
						<component-list :components="formComponents"
							@componentDragEnd="componentDragEnd" @componentDragStart="componentDragStart">
						</component-list>
					</div>
				</TabPane>
			</Tabs>
		</div>

		<div class="edit-area">

			<div class="form-container">

				<mmt-form-head :info="formData.info"></mmt-form-head>

				<div ref="visualContent" class="visual-form-content">
					<draggable v-bind="decorateOption"
						v-model="formData.gridList"
						@dragenter.native="setComponentText"
						@add="addedComponent" @end="dragDecorateComponentEnd" class="drag-container">

						<template v-for="(item, index) in formData.gridList">
							<!--表单控件-->
							<form-item :item="item" :index="index" :parents="formData.gridList" v-if="item.info.type === 'form-item'"
								@onDragStart="onDragStart" @onDragEnd="onDragEnd" @deleteItem="deleteItem" @selectItem="selectItem"
								:key="index"></form-item>

							<!--布局控件-->
							<Row v-else-if="item.info.type === 'layout'" class="layout-row" :key="index" :class="item.info.key">

								<iCol :span="col.span" class="draggable-col" v-for="(col, cindex) in item.info.columns"
									:key="cindex">

									<!--v-bind="decorateOption"-->
									<draggable v-model="col.list" v-bind="decorateColOption"
										@dragenter.native="setComponentText"
										@add="addedColumnsComponent($event, col.list)"
										@end="dragDecorateColComponentEnd(cindex, col.list)" class="draggable-area">


										<template v-for="(el, i) in  col.list">
											<form-item :item="el" :index="i" :parents="col.list"
												@onDragStart="onDragStart" @onDragEnd="onDragEnd" @deleteItem="deleteItem"
												@selectItem="selectItem"
												:key="i"></form-item>
										</template>

									</draggable>

								</iCol>

								<div class="drag-widget">

									<Poptip confirm placement="left-start"
										class="delete-poptip"
										title="删除模块？" @on-ok="deleteItem(formData.gridList, index)">
										<Button size="small" icon="md-trash" style="cursor: move;margin-right: 2px;">删除</Button>
									</Poptip>

									<Button size="small" icon="md-hand">移动</Button>
								</div>

							</Row>

							<!--明细子表-->
							<Row v-else-if="item.info.type === 'form-table'" class="layout-row" :key="index" :class="item.info.key">

								<div class="draggable-table" :style="formTableWidth(item.info.columns)"
									v-for="(col, cindex) in item.info.columns"
									:key="cindex">
									<!--v-bind="decorateOption"-->
									<draggable v-model="col.list" v-bind="decorateTableOption"
										@dragenter.native="setComponentText"
										@add="addedTableComponent($event, col.list)" class="draggable-area" draggable='false'>

										<template v-for="(el, i) in  col.list">
											<form-item :item="el" :index="i" :parents="col.list" :formTable="true"
												@onDragStart="onDragStart" @onDragEnd="onDragEnd"
												@deleteItem="deleteItem(item.info.columns, cindex)" @selectItem="selectItem"
												:key="i"></form-item>
										</template>

									</draggable>

								</div>

								<div class="drag-widget">

									<Button size="small" icon="md-edit" style="margin-right: 2px;">编辑</Button>
									<Button size="small" icon="md-add" style="margin-right: 2px;"
										@click="addColumn(formData.gridList, index)">添加列
									</Button>

									<Poptip confirm placement="left-start"
										class="delete-poptip"
										title="删除模块？" @on-ok="deleteItem(formData.gridList, index)">
										<Button size="small" icon="md-trash" style="margin-right: 2px;">删除</Button>
									</Poptip>

									<Button size="small" icon="md-hand" style="cursor: move;">移动</Button>
								</div>

							</Row>

						</template>

					</draggable>
				</div>

			</div>
		</div>

		<div class="config-area">
			<Tabs :value="configTabValue">
				<TabPane label="控件设置" name="component">

					<component class="common-component" :is="currentItem.info.key + '-config'"
						v-if="currentItem.info" :config="currentItem.config" :info="currentItem.info"></component>

					<Alert show-icon v-else style="margin: 20px"> 请先选择控件</Alert>

				</TabPane>

				<TabPane label="表单设置" name="form">
					<mmt-form-config :formData="formData.info"></mmt-form-config>
				</TabPane>
			</Tabs>
		</div>

	</div>
</template>

<script>
	import draggable from 'vuedraggable';
	import componentList from './component-list.vue';

	import formHead from '../../components/form-components/form/form.vue';
	import formConfig from '../../components/form-config/form/form.vue';
	import formItem from './form-item.vue';

	import {jsonDeepCopy} from '../../utils/utils';
	//	import {directive as clickOutside} from 'v-click-outside-x';
	//	import TransferDom from '../../utils/transfer-dom';

	export default {
		name: 'form-decorate',
//		directives: { clickOutside, TransferDom },
		props: {
			formData: {
				type: Object
			},
			layoutComponents: {
				type: Array
			},
			formComponents: {
				type: Array
			}
		},
		data() {
			return {
				decorateOption: {
					animation: 150,
					group: {
						name: 'component',
						pull: true,
						put: ['icon', 'col-component']
					},
					ghostClass: 'sortable-ghost-custom',
					chosenClass: 'sortable-chosen-custom',
					dragClass: 'sortable-drag-custom'
				},
				decorateColOption: {
					animation: 150,
					group: {
						name: 'col-component',
						pull: true,
						put: ['icon', 'component', 'col-component']
					},
					ghostClass: 'sortable-ghost-custom',
					chosenClass: 'sortable-chosen-custom',
					dragClass: 'sortable-drag-custom'
				},
				decorateTableOption: {
					animation: 150,
					group: {
						name: 'table-component',
						pull: false,
						put: ['icon', 'col-component', 'table-component', 'component']
					},
					ghostClass: 'sortable-ghost-custom',
					chosenClass: 'sortable-chosen-custom',
					dragClass: 'sortable-drag-custom'
				},
				currentItem: {},
				configTabValue: 'form'
//				gridList: this.formData.gridList
			};
		},
		components: {
			draggable,
			'mmt-form-head': formHead, // 表单头
			'mmt-form-config': formConfig, // 表单头配置
			'component-list': componentList,
			'form-item': formItem
		},
		computed: {},
		methods: {
			componentDragStart() {
				this.closeConfigDialogAndUncheckAll();
				this.componentDragging = true;
			},
			componentDragEnd() {
				this.componentDragging = false;
			},
			// 从组件区拖拽组件到装饰区 进入 事件
			setComponentText() {
				if (this.componentDragging) {
					setTimeout(() => {
						const dropedItem = this.$refs.visualContent.getElementsByClassName('sortable-chosen-icon')[0];
						if (dropedItem) {
							dropedItem.innerHTML = '<div style="padding: 20px 0;font-size: 12px;text-align: center;">将组件拖至此处<p>';
						}
					}, 100);
				}
			},
			// 从组件区拖拽组件到装饰区 添加 事件
			addedComponent(evt) {
				console.log('addedComponent......');
				const index = evt.newIndex >= this.formData.gridList.length ? (this.formData.gridList.length - 1) : evt.newIndex;
				let item = this.formData.gridList[index];
				this.formData.gridList.splice(index, 1); // 先删除点 vuedraggable 给创建的对象
				let newItem = jsonDeepCopy(item);
				newItem.checked = true;

				let num = Math.floor(Math.random() * (1 - 100) + 100);
				newItem.info.id = newItem.info.key + '-' + new Date().getTime() + '-' + num;

				this.currentItem = newItem;
				this.configTabValue = 'component';
				this.formData.gridList.splice(index, 0, newItem); // 手动创建对象
			},
			addedColumnsComponent(evt, columns) {
				console.log('addedColumnsComponent......');
				const index = evt.newIndex;
				let item = columns[index];

				columns.splice(index, 1); // 先删除点 vuedraggable 给创建的对象

				if (item.info.type === 'layout') {
					this.$Message.error("不能嵌套布局！");
				} else {
					let newItem = jsonDeepCopy(item);
					newItem.checked = true;
					let num = Math.floor(Math.random() * (1 - 100) + 100);
					newItem.info.id = newItem.info.key + '-' + new Date().getTime() + '-' + num;

					this.currentItem = newItem;
					this.configTabValue = 'component';
					columns.splice(index, 0, newItem); // 手动创建对象
				}

			},
			addedTableComponent(evt, columns) {
				console.log('addedTableComponent......');
				const index = evt.newIndex;
				let item = columns[index];

				columns.splice(index, 1); // 先删除点 vuedraggable 给创建的对象

				if (item.info.type === 'layout') {
					this.$Message.error("不能嵌套布局！");
				} else {
					let newItem = jsonDeepCopy(item);
					newItem.checked = true;
					newItem.config.vshow = false;
					let num = Math.floor(Math.random() * (1 - 100) + 100);
					newItem.info.id = newItem.info.key + '-' + new Date().getTime() + '-' + num;

					this.currentItem = newItem;
					this.configTabValue = 'component';
					columns.splice(index, 0, newItem); // 手动创建对象
				}
			},
			// 装饰区拖拽 结束 事件
			dragDecorateComponentEnd() {
				console.log('dragDecorateComponentEnd......');
				this.dragingFlag = false;
			},
			// 装饰区布局组件拖拽 结束 事件
			dragDecorateColComponentEnd() {
				console.log('dragDecorateColComponentEnd......');
//				columns[cindex-1] = {};
//				console.log(columns);
			},
			// 装饰区组件拖拽 开始 事件
			onDragStart() {
				this.dragingFlag = true;
				this.closeConfigDialogAndUncheckAll();
			},
			// 装饰区组件拖拽 结束 事件
			onDragEnd() {
				this.dragingFlag = false;
			},
			// 删除一个组件
			deleteItem(list, index) {
				this.closeConfigDialogAndUncheckAll();
				list.splice(index, 1);
			},
			// 选中组件
			selectItem(list, item, index) {
				this.closeConfigDialogAndUncheckAll();
				this.currentItem = item;
				this.configTabValue = 'component';
				this.$set(list[index], 'checked', true);
			},
			// 关闭配置框取消选中组件
			closeConfigDialogAndUncheckAll() {
				console.log('closeConfigDialogAndUncheckAll......');
				// 判断有没有正被选中的数据
				if (!this.currentItem.info) {
					return;
				}
				// 清除当前选中
				this.currentItem = {};
				this.configTabValue = 'form';

				this.formData.gridList.forEach(item => {
					item.checked = false;
					item.info.columns && item.info.columns.forEach(column => column.list && column.list.forEach(el => el.checked = false));
				});
			},
			// 增加明细字表列
			addColumn(list, index) {
				let columns = list[index].info.columns;
//				let span = 24 / (columns.length + 1);
//				columns.forEach(col => col.span = span);
				columns.push({'list': []});
			},
			// 计算明细字表列宽度
			formTableWidth(columns) {
				return {
					width: 100 / columns.length + '%'
				};
			},
			// 初始化
			init() {}
		},
		mounted() {
			this.init();
		}
	};
</script>

<style lang="less">
	@import '../../assets/css/variable.less';

	.content-container {
		display: flex;
		.ivu-tabs-nav {
			.ivu-tabs-tab {
				padding: 16px;
			}
		}
		.component-list-wrapper {
			flex: 1;
			overflow-x: hidden;
			min-height: 900px;
			background: #f5f5f5;
			border: 1px solid #e5e5e5;
			box-shadow: 0 2px 6px 0 rgba(0, 0, 0, .1);
		}

		.edit-area {
			overflow-x: hidden;
			padding: 20px 20px;
			flex: 3;
			.form-container {
				width: 100%;
				position: relative;
				background: #f5f5f5;
				border: 1px solid #e5e5e5;
				box-shadow: 0 2px 6px 0 rgba(0, 0, 0, .1);
				.special-icons {
					position: absolute;
					font-size: 12px;
					left: -30px;
					width: 30px;
					span {
						width: 20px;
						line-height: 1.3em;
						padding: 5px 0;
						background-color: #ddf3f2;
						color: #29b6b0;
						border-radius: 2px;
						display: inline-block;
						text-align: center;
						margin-bottom: 10px;
						cursor: pointer;
						&.visible {
							background-color: #ededed;
							color: #333;
						}
					}
				}
				.visual-form-content {
					width: 100%;
					min-height: 600px;
					position: relative;
					.drag-container {
						min-height: 600px;
						.sortable-ghost-custom {
							border: 1px dashed @primary-color;
							opacity: 0.8;
							width: 100%;
						}
						.layout-row { // 布局组件容器
							.draggable-col {
								border: 1px solid #E5E5E5;
								padding: 1px;
								min-height: 58px;
								.draggable-area {
									min-height: 60px;
								}
							}
							.drag-widget {
								position: absolute;
								right: 0px;
								bottom: 0px;
								z-index: 997;
							}
							.draggable-table {
								border: 1px solid #E5E5E5;
								padding: 1px;
								float: left;
								flex: 0 0 auto;
								min-height: 98px;
								.draggable-area {
									min-height: 98px;
								}
							}
						}
					}
					.sortable-drag-custom {
						opacity: 1 !important;
						.component-container {
							border: none;
						}
						.plugin-delete-icon {
							display: none;
						}
					}

				}
			}
		}

		.config-area {
			flex: 1;
			background: #f5f5f5;
			border: 1px solid #e5e5e5;
			box-shadow: 0 2px 6px 0 rgba(0, 0, 0, .1);
		}
	}

	/****特殊组件****/
	.mmt-divider {
		padding: 29px 0px !important;
	}

</style>