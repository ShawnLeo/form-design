<template>
	<div class="form-preview">
		<mmt-form-head :info="formData.info"></mmt-form-head>

		<template v-for="(item, ii) in formData.gridList">

			<template v-if="item.info.type === 'form-item'">

				<div class="component-row component-container" :class="item.info.key" :key="ii">

					<component class="common-component" :is="item.info.key" :id="item.info.id" :index="ii"
						v-if="item.info.key" :cdata="item.cdata" :config="item.config"
						@on-change="componentValueChange"></component>

				</div>
			</template>

			<template v-else-if="item.info.type === 'layout'">
				<Row class="component-row layout-row" :key="ii" :class="item.info.key" :ref="'component' + ii">

					<iCol :span="col.span" class="draggable-col" v-for="(col, cindex) in item.info.columns" :key="cindex">

						<div class="component-container" v-for="(el, i) in  col.list" :key="i">
							<component class="common-component" :is="el.info.key" :cdata="el.cdata" :index="ii" :rowIndex="cindex"
								:colIndex="i" :config="el.config" @on-change="rowComponentValueChange"></component>
						</div>

					</iCol>

				</Row>
			</template>

			<template v-else-if="item.info.type === 'form-table'">
				<div class="component-row table-row" :class="item.info.key" :key="ii">
					<Table :columns="getColumn(item.info.columns, item.cdata, item.config)" :data="item.cdata">

						<template slot-scope="{ row, index }" :slot="column.id"
							v-for="(column, fi) in getColumn(item.info.columns, item.cdata, item.config)">
							<component class="common-component" :is="column.mmtKey"
								:id="column.id + '-' + index" :cdata="row[column.id]" :key="fi"
								v-if="column.mmtKey" @on-change="tableComponentValueChange(ii, column.id, index, fi)"
								:config="column.config"></component>

						</template>

						<template slot-scope="{ row, index }" slot="action">
							<Button type="error" @click="delRow(item.cdata, index)" size="small">删除</Button>
							<Button type="info" @click="addRow(item.cdata, index)" size="small">插入</Button>
						</template>

					</Table>
				</div>

			</template>
		</template>

	</div>
</template>

<script>

	// 表单头
	import formHead from '../../components/form-components/form/form.vue';

	export default {
		name: 'form-preview-webapp',
		props: {
			formData: {
				type: Object
			}
		},
		components: {
			'mmt-form-head': formHead
		},
		methods: {
			getColumn(columns, cdata, config) {
				let tableColumns = [];
				columns.forEach((col, index) => {
					let item = col.list[0];
					if (item) { // 转化行
						tableColumns.push({
//							title: item.config.label || item.info.name,
							renderHeader: (h) => {
								let headers = [];
								if (item.config.require) {
									headers.push(h('span', {
										style: {
											color: '#fb6e52'
										}
									}, '* '));
								}
								headers.push(h('span', {}, item.config.label || item.info.name));
								return h('div', headers);
							},
							slot: item.info.id,
							id: item.info.id,
							mmtKey: item.info.key,
							list: col.list,
							config: item.config
						});
					} else { // 空行
						tableColumns.push({
							title: '',
							id: index,
							mmtKey: '',
							config: {}
						});
					}
				});

				if (config && !config.disabled) {
					tableColumns.push({
						title: '操作',
						slot: 'action',
						align: 'center',
//					fixed: 'right',
						width: '100',
						renderHeader: (h) => {
							return h('div', [
								h('Button', {
									props: {
										shape: 'circle',
										size: 'small',
										icon: 'md-add'
									},
									on: {
										click: () => {
											cdata.push({});
										}
									}
								})
							]);
						}
					});
				}
//				console.log(this.formData);
				return tableColumns;
			},
			getRowData(row, column) {
				console.log(column);
				return row[column.id];
			},
			addRow(cdata, index) {
				cdata.splice(index, 0, {});
			},
			delRow(cdata, index) {
				cdata.splice(index, 1);
			},
			componentValueChange(e, index) {
				this.formData.gridList[index].cdata = e;
			},
			rowComponentValueChange(e, index, rowIndex, colIndex) {
				this.formData.gridList[index].info.columns[rowIndex].list[colIndex].cdata = e;
			},
			tableComponentValueChange(ii, id, index) {
				setTimeout(() => {
					this.formData.gridList[ii].cdata[index][id] = document.getElementById(id + '-' + index).value;
				}, 500);
			}
		}
	};
</script>

<style lang="less">

	.component-row {
		border: 1px solid #e5e5e5;
		border-bottom: none;
		&:last-child {
			border-bottom: 1px solid #e5e5e5;
		}
	}

	.table-row {
		border: none;
		overflow: visible;
		.ivu-table-wrapper {
			overflow: visible;
			.ivu-table {
				overflow: visible;
				.ivu-table-cell {
					overflow: visible;
				}
			}
		}
	}

	.form-head {
		background: #f5f5f5;
	}

	.component-container {
		/*border: 1px solid #e5e5e5;*/
		/*border-top: none;*/
		.common-component {
			padding: 15px 5px;
		}
		&:last-child {
			/*border: 1px solid #e5e5e5;*/
		}
	}

	.layout-row {
		.draggable-col {
			border-right: 1px solid #e5e5e5;
			.component-container {
				border-bottom: 1px solid #e5e5e5;
				/*border-top: none;*/
				/*border-left: none;*/
				/*border-bottom: none;*/
				&:last-child {
					border-bottom: none;
				}
			}
			&:last-child {
				border-right: none;
			}
		}
		/*border-bottom: none;*/

	}

	.mmt-details-sublist {
		.ivu-table-cell {
			padding-left: 5px;
			padding-right: 5px;
		}
	}

	/****特殊组件****/

</style>