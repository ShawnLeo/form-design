/**
 * 公共工具包
 * Created by Shawn on 2017/6/25.
 */

let loadedJSCache = {};

/**
 * 异步加载远程组件
 *
 * @param src
 */
export const asyncLoadJs = (src) => {
	// 判断js是否已经加载过了，不重复加载js
	let testScriptTag;
	if (!loadedJSCache[src]) {
		testScriptTag = document.createElement('script');
		testScriptTag.src = src;
		document.body.appendChild(testScriptTag);
	} else {
		return new Promise(resolve => {
			resolve();
		});
	}
	// 创建并一个加载JS用的promise
	return new Promise((resolve, reject) => {
		// 加载成功
		testScriptTag.addEventListener('load', () => {
			// 第一次加载的js加入缓存判断
			loadedJSCache[src] = true;
			resolve();
		});
		// 加载失败
		testScriptTag.addEventListener('error', error => {
			console.log(error);
			reject(error);
		});
	});
};

export const install = (key, component) => {
	if (!key || !component) {
		return;
	}
	// 自动加载组件
	window.Vue.component(key, component);
};

/**
 * rem
 */
export const rem = () => {
	let deviceWidth = document.documentElement.clientWidth;

	if(deviceWidth > 750) {
		deviceWidth = 7.5 * 50;
	}

	document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
};

/**
 * json对象深拷贝
 * @param json
 */
export function jsonDeepCopy(json) {
	return JSON.parse(JSON.stringify(json));
}

/**
 * 表单校验
 *
 * @param formData
 * @param callback
 */
export function formValicdate(formData, callback) {
	for (let i = 0; i < formData.gridList.length; i++) {
		let formItem = formData.gridList[i];

		switch (formItem.info.type) {
			case 'form-item':
				if (required(formItem)) {
					callback(false, formItem);
					return;
				}
				break;
			case 'form-table':
				// let cdata = ;
				if (formItem.config.require && formItem.cdata.length < 1) {
					callback(false, formItem);
					return ;
				}
				for (let j = 0; j < formItem.info.columns.length; j++) {
					let colItem = formItem.info.columns[j];
					let colListItem = colItem.list[0];

					if (!colListItem) {
						continue;
					}

					if (colListItem.config.require) {

						for (let k = 0; k < formItem.cdata.length; k++) {
							let value = formItem.cdata[k][colListItem.info.id];
							// let value = formItem.cdata[k][colListItem.info.id] ? formItem.cdata[k][colListItem.info.id].trim() : false;

							if (!value) {
								callback(false, colListItem);
								return ;
							}

							if (value instanceof String && !(value.trim())) {
								callback(false, colListItem);
								return ;
							}

							if (value instanceof Array && value.length < 1) {
								callback(false, colListItem);
								return ;
							}
							// if ((item.cdata instanceof String) && !(item.cdata.trim())) {
							// 	return true;
							// }
							//
							// if ((item.cdata instanceof Array) && item.cdata.length < 1) {
							// 	return true;
							// }

						}
					}
				}

				break;
			case 'layout':
				for (let j = 0; j < formItem.info.columns.length; j++) {
					let colItem = formItem.info.columns[j];
					let list = colItem.list;
					for (let k = 0; k < list.length; k++) {
						let colListItem = list[k];
						if (required(colListItem)) {
							callback(false, colListItem);
							return;
						}
					}
				}
				break;
		}
		console.log(formItem);
	}
	callback(true);
}

let required = (item) => {
	if (item.config.require ) {
		if (!item.cdata){ // 没有数据
			return true;
		}

		if ((item.cdata instanceof String) && !(item.cdata.trim())) {
			return true;
		}

		if ((item.cdata instanceof Array) && item.cdata.length < 1) {
			return true;
		}
	}

	return false;
};