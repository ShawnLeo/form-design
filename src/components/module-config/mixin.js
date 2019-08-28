export default {
	data() {
		return {};
	},
	props: {
		config: {
			type: Object,
			default() {
				return {};
			}
		},
		cdata: {
			type: Object | Array
		}
		// itemConfig: {
		// 	type: Object,
		// 	default() {
		// 		return {};
		// 	}
		// },
		// top: {
		// 	type: Number,
		// 	default: 0
		// },
		// configVisible: {
		// 	type: Boolean,
		// 	default: false
		// }
		// appInfo: {
		// 	type: Object,
		// 	default() {
		// 		return {};
		// 	}
		// }
	},
	computed: {
		// config () {
		// 	return this.item.config;
		// }
	},
	watch: {
		config: {
			deep: true,
			handler: function (value) {
				console.log(value);
				// this.itemCopy = this.item;
				// this.dataJson = dataJson;
			}
		}
		// dataJson: {
		// 	deep: true,
		// 	handler: function (dataJson) {
		// 		console.log(dataJson);
		// 		// this.changeRules(dataJson);
		// 		this.judgeEmptyComponent(dataJson);
		// 	}
		// }
	},
	created() {
		// console.log('config', this.config);
		// console.log('item', this.item);
		// console.log('itemConfig', this.itemConfig);
		// console.log('dataJson', this.dataJson);
		// this.hideFooterZone(false);
	},
	methods: {
		// 根据name获取组件配置
		// filterDataJson(dataJson, name) {
		// 	const data = dataJson.filter(item => item['name'] === name);
		// 	return data.length ? data[0] : {};
		// },
		// filterTargetByUnitId(list, unitId) {
		// 	const data = list.filter((item) => {
		// 		return item.unitId === unitId;
		// 	});
		// 	return data.length ? data[0] : {};
		// },
		// filterConfigItem(configJson, config) {
		// 	let configMaps = {};
		// 	Object.keys(configJson).forEach(item => {
		// 		configMaps[item] = this.filterDataJson(config, item);
		// 	});
		// 	return configMaps;
		// },
		// 隐藏配置窗口底部操作区
		// hideFooterZone(visible) {
		//   let configDialog = findComponentsUpward(this, 'DecorationDialog')[0];
		//   configDialog.hideFooterZone = visible;
		// },
		// deleteItem(index, data, minLength) {
		// 	if (data.length === 1) {
		// 		return;
		// 	}
		// 	if (minLength && data.length === minLength) {
		// 		this.$message.warning(`该模块最少${minLength}项，不可删除!`);
		// 		return;
		// 	}
		// 	data.splice(index, 1);
		// },
		// sortListUp(index, data) {
		// 	let currentItem = data.splice(index, 1)[0];
		// 	data.splice(index - 1, 0, currentItem);
		// },
		// sortListDown(index, data) {
		// 	let currentItem = data.splice(index, 1)[0];
		// 	data.splice(index + 1, 0, currentItem);
		// },
		// changeRules(dataJson) {
		//   const {
		//     unitKey,
		//     unitGroupCode
		//   } = this.item;
		//   let {
		//     rules
		//   } = (validateRules[`group${unitGroupCode}`] || validateRules[unitKey]);
		//   for (const [key, value] of Object.entries(rules)) {
		//     if (value.change) {
		//       value.change(dataJson);
		//     }
		//   }
		// },
		// 根据 emptyProps 判断是否显示自定义空白组件样式
		judgeEmptyComponent() {
			// const {
			// 	unitKey,
			// 	unitGroupCode
			// } = this.item;
			// let {
			// 	emptyProps,
			// 	propsType,
			// 	excludeProps
			// } = (validateRules[unitKey] || validateRules[`group${unitGroupCode}`]);
			// let toString = obj => JSON.stringify(obj);
			// if (propsType === Object && emptyProps) {
			// 	this.itemCopy.isEmptyComponent = true;
			// 	for (const [key, value] of Object.entries(emptyProps)) {
			// 		// 排斥需要鉴定的props
			// 		if (excludeProps && excludeProps.includes(key)) {
			// 			continue;
			// 		}
			// 		if (Array.isArray(value)) {
			// 			if (dataJson[key].length !== value.length) {
			// 				this.itemCopy.isEmptyComponent = false;
			// 			}
			// 		} else if (dataJson[key] !== value) {
			// 			this.itemCopy.isEmptyComponent = false;
			// 		}
			// 	}
			// }
			// if (propsType === Array) {
			// 	if (excludeProps) {
			// 		if (Array.isArray(dataJson) && dataJson.length) {
			// 			let newEmptyProps = [];
			// 			let newDataJson = [];
			// 			for (let i = 0; i < dataJson.length; i++) {
			// 				let item = dataJson[i];
			// 				if (typeOf(item) === 'object') {
			// 					item = JSON.parse(JSON.stringify(item));
			// 					excludeProps.forEach(prop => {
			// 						delete item[prop];
			// 					});
			// 					newDataJson.push(item);
			// 				}
			// 			}
			// 			for (let i = 0; i < emptyProps.length; i++) {
			// 				let item = emptyProps[i];
			// 				if (typeOf(item) === 'object') {
			// 					item = JSON.parse(JSON.stringify(item));
			// 					excludeProps.forEach(prop => {
			// 						delete item[prop];
			// 					});
			// 					newEmptyProps.push(item);
			// 				}
			// 			}
			// 			// console.log(toString(newEmptyProps), toString(newDataJson));
			// 			if (emptyProps && toString(newEmptyProps) !== toString(newDataJson)) {
			// 				this.itemCopy.isEmptyComponent = false;
			// 			}
			// 		}
			// 	} else {
			// 		this.itemCopy.isEmptyComponent = true;
			// 		if (emptyProps && toString(emptyProps) !== toString(dataJson)) {
			// 			this.itemCopy.isEmptyComponent = false;
			// 		}
			// 	}
			// }
		}
	}
};