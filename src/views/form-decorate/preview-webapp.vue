<template>
	<div>
		<mmt-form-head-webapp :info="formData.info"></mmt-form-head-webapp>

		<div v-for="(item, ii) in formData.gridList" :key="ii">

			<template v-if="item.info.type === 'form-item'">
				<div class="component-webapp-row component-webapp-container" :class="item.info.key" :key="ii">

					<component class="common-component" :is="item.info.key + '-webapp'" :id="item.info.id" :index="ii"
						v-if="item.info.key" :cdata="item.cdata" :config="item.config"
						@on-change="componentValueChange"></component>

				</div>
			</template>

			<template v-else-if="item.info.type === 'layout'">
				<div class="component-webapp-row " :key="ii" :class="item.info.key" :ref="'component' + ii">

					<div :span="col.span" class="draggable-col" v-for="(col, cindex) in item.info.columns" :key="cindex">

						<div class="component-webapp-container" v-for="(el, i) in  col.list" :key="i">
							<component class="common-component" :is="el.info.key + '-webapp'" :id="item.info.id" :index="ii"
								:rowIndex="cindex" :colIndex="i" :cdata="el.cdata" :config="el.config"
								@on-change="rowComponentValueChange"></component>
						</div>

					</div>

				</div>
			</template>

			<template v-else-if="item.info.type === 'form-table'">
				<div class="component-row table-row" :class="item.info.key" :key="ii">
					<div class="tab1" :style="{width: item.config.disabled ? '100%' : '80%'}">
						<x-table :cell-bordered="false" style="background-color:#fff;">
							<thead>
							<tr>
								<th style="width: 33%;" v-for="(header) in getHeader(item.info.columns)" :key="header.id">{{header.title}}</th>
							</tr>
							</thead>
							<tbody>
							<tr v-for="(data, index) in getData(item.info.columns, item.cdata)" :key="index">
								<td v-for="(dt, ii) in data" :key="ii">{{dt.value}}</td>
							</tr>
							<tr v-if="noData(item.cdata)">
								<td :colspan="item.info.columns.length"> 暂无数据 </td>
							</tr>

							</tbody>
						</x-table>
					</div>
					<div class="tab2" v-if="!item.config.disabled">
						<x-table :cell-bordered="false" style="background-color:#fff;">
							<thead>
							<tr>
								<th>
									<span  class="cell-x-button"
										@click="showPopup(item.info.columns, ii, item.cdata.length)">+</span>
								</th>
							</tr>
							</thead>
							<tbody>
							<tr  v-for="(data, index) in getData(item.info.columns, item.cdata)" :key="index">
								<td>
									<span  class="cell-x-button"
										@click="showPopup(item.info.columns, ii, index)">+</span>
									<span  class="cell-x-button"
										@click="delRow(item.cdata, index)">-</span>
								</td>
							</tr>
							<tr v-if="noData(item.cdata)">
								<td> &nbsp; </td>
							</tr>
							</tbody>
						</x-table>
					</div>

				</div>
			</template>

		</div>

		<!--<div v-transfer-dom>-->
		<div>
			<popup v-model="showPop" position="bottom" :should-rerender-on-show="true">
				<div v-for="(column, index) in formTableRow" :key="index">

					<component class="common-component" :is="column.list[0].info.key + '-webapp'" :id="column.list[0].info.id"
						:index="index"
						v-if="column.list[0].info.key" :cdata="column.list[0].cdata" :config="column.list[0].config"
						@on-change="tableComponentValueChange"></component>

				</div>
				<div class="bottom-button" style="box-sizing: border-box;">
					<x-button type="warn" plain @click.native="showPop = false" style="width: 50%;float: left;">取消</x-button>
					<x-button type="primary" plain @click.native="addRow" style="width: 50%;float: right;">确认</x-button>
				</div>
			</popup>
		</div>

	</div>

</template>

<script>
	// 表单头
	import formHeadWebapp from '../../components/form-components-webapp/form/form.vue';
	export default {
		name: 'form-preview-webapp',
		props: {
			formData: {
				type: Object
			}
		},
//		directives: {
//			TransferDom
//		},
		data() {
			return {
				showPop: false,
				formTableRow: [],
				addDataInfo: {
					gridIndex: 0,
					rowNum: 0,
					data: {}
				}
			};
		},
		components: {
			'mmt-form-head-webapp': formHeadWebapp
		},
		methods: {
			getHeader(columns) {
				let header = [];
				columns.forEach((col) => {
					let item = col.list[0];
					if (item) { // 转化行
						header.push({
							title: item.config.label || item.info.name,
							require: item.config.require,
							id: item.info.id,
							options: item.config.options
						});
					} else {
						header.push({
							title: '#',
							require: false,
							id: false
						});
					}
				});
				return header;
			},
			noData(cdata) {

				if (!cdata) {
					return true;
				}

				if (cdata instanceof Array && cdata.length === 0) {
					return true;
				}

				return false;
			},
			getData(columns, cdata) {

				let datas = [];

				let headers = this.getHeader(columns);

				cdata.forEach((dt) => {

					let data = [];

					for (let i = 0; i < headers.length; i++) {
						let header = headers[i];
						if (header.id) {
							data.push({key: header.id, value: this.getOptionValue(header.options, dt[header.id])});
						} else {
							data.push({key: '', value: ''});
						}
					}

					datas.push(data);
				});
				return datas;
			},
			getOptionValue(options, key) {
				if (!options) {
					return key;
				}
				if (options instanceof String) {
					options = JSON.parse(options);
				}
				let map = {};
				options.forEach((option => {
					map[option.value] = option.label;
				}));
				return map[key];
			},
			getRowData(row, column) {
				console.log(column);
				return row[column.id];
			},
			addRow() {
//				console.log(this.addDataInfo.data);
//				console.log(this.formData.gridList[this.addDataInfo.gridIndex]);
				this.formData.gridList[this.addDataInfo.gridIndex].cdata.splice(this.addDataInfo.rowNum, 0, this.addDataInfo.data);
				this.showPop = false;
				this.addDataInfo = {gridIndex: 0, rowNum: 0, data: {}};
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
			tableComponentValueChange(value, id) {

				console.log(value, id);
				console.log(this.formTableRow[id].list[0].info.id);

				this.addDataInfo.data[this.formTableRow[id].list[0].info.id] = value;
			},
			showPopup(cloumns, ii, index) {
				this.showPop = true;
				this.formTableRow = cloumns;
				this.addDataInfo.gridIndex = ii;
				this.addDataInfo.rowNum = index;
			}
		}
	};
</script>

<style lang="less">

	.cell-x-button {
		border: 1px solid #e0e0e0;
		padding: 4px 8px;
		border-radius: 12px;
	}

	.bottom-button {
		margin-top: 20px;
		button.weui-btn {
			border-radius: 0px;
			&:after {
				border-radius: 0px;
			}
		}

		.weui-btn + .weui-btn {
			margin-top: 0px;
		}
	}

	.table-row {
		white-space: nowrap; //强制不折行
		overflow: hidden; //控制溢出隐藏
		overflow-x: scroll; //设置横向滚动条
		.sublist-title {
			margin-top: 0.77em;
			margin-bottom: 0.3em;
			padding-left: 15px;
			padding-right: 15px;
			color: #999999;
			font-size: 14px;
		}

		.tab1 {
			width: 80%;
			float: left;
			overflow: hidden;
			overflow-x: scroll;

		}
		.tab2 {
			width: 20%;
			float: left;
		}
		.vux-table td, .vux-table th {
			padding: 2px 4px;
			height: 40px;
		}

	}
	/****特殊组件****/
</style>