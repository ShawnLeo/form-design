// 布局控件
export const layoutComponents = [{
	'info': {
		'name': '一行两列',
		'key': 'mmt-single-row-two-column',
		'type': 'layout',
		'columns': [{
			'span': 12,
			'list': []
		}, {
			'span': 12,
			'list': []
		}],
		'url': '',
		'icon': ''
	},
	'config': {},
	'cdata': [{}]
}, {
	'info': {
		'name': '一行三列',
		'key': 'mmt-single-row-three-column',
		'type': 'layout',
		'columns': [{
			'span': 8,
			'list': []
		}, {
			'span': 8,
			'list': []
		}, {
			'span': 8,
			'list': []
		}],
		'url': '',
		'icon': ''
	},
	'config': {},
	'cdata': [{}]
}, {
	'info': {
		'name': '明细子表',
		'key': 'mmt-details-sublist',
		'type': 'form-table',
		'columns': [{
			'span': 8,
			'list': []
		}, {
			'span': 8,
			'list': []
		}, {
			'span': 8,
			'list': []
		}],
		'url': '',
		'icon': ''
	},
	'config': {
		"title": "明细子表",
		"require": false
	},
	'cdata': []
}];
// 表单控件
export const formComponents = [{
	'info': {
		'name': '文本框',
		'key': 'mmt-input',
		'type': 'form-item',
		'url': '',
		'icon': ''
	},
	'config': {
		"label": "文本框",
		"vshow": true,
		"require": false,
		"tsize": 'medium',
		"maxLength": 80
	},
	'cdata': ''
}, {
	'info': {
		'name': '数字输入框',
		'key': 'mmt-input-number',
		'type': 'form-item',
		'url': '',
		'icon': ''
	},
	'config': {
		"label": "数字输入框",
		"vshow": true,
		"require": false,
		"tsize": 'medium',
		"precision": 0,
		"max": 80,
		"min": 1,
		"step": '1'
	},
	'cdata': 1
}, {
	'info': {
		'name': '多行文本框',
		'key': 'mmt-textarea',
		'type': 'form-item',
		'url': '',
		'icon': ''
	},
	'config': {
		"label": "多行文本框",
		"vshow": true,
		"require": false,
		"tsize": 'medium',
		"maxLength": 200
	},
	'cdata': ''
}, {
	'info': {
		'name': '单选框',
		'key': 'mmt-radio',
		'type': 'form-item',
		'url': '',
		'icon': ''
	},
	'config': {
		"label": "单选框",
		"vshow": true,
		"require": false,
		"defaultValue": 'option-1565265267954-01',
		"options": [{
			value: 'option-1565265267954-01',
			label: '选项1'
		}]
	},
	'cdata': ''
}, {
	'info': {
		'name': '复选框',
		'key': 'mmt-checkbox',
		'type': 'form-item',
		'url': '',
		'icon': ''
	},
	'config': {
		"label": "复选框",
		"vshow": true,
		"require": false,
		"defaultValue": ['option-1565525687954-01'],
		"options": [{
			value: 'option-1565525687954-01',
			label: '选项1'
		}]
	},
	'cdata': []
}, {
	'info': {
		'name': '下拉框',
		'key': 'mmt-select',
		'type': 'form-item',
		'url': '',
		'icon': '//yun.duiba.com.cn/saas/images/decoration-icons/zj_dlt_normal.png'
	},
	'config': {
		"label": "下拉框",
		"vshow": true,
		"require": false,
		"tsize": 'medium',
		"defaultValue": 'option-1565243717954-01',
		"options": [{
			value: 'option-1565243717954-01',
			label: '选项1'
		}]
	},
	'cdata': ''
}, {
	'info': {
		'name': '日期',
		'key': 'mmt-date-picker',
		'type': 'form-item',
		'url': '',
		'icon': ''
	},
	'config': {
		"label": "日期",
		"vshow": true,
		"require": false,
		"tsize": 'medium',
		"format": 'yyyy-MM-dd HH:mm',
		"type": 'datetime'
	},
	'cdata': ''
// }, {
// 	'info': {
// 		'name': '日期区间',
// 		'key': 'mmt-date-range',
// 		'type': 'form-item',
// 		'url': '',
// 		'icon': ''
// 	},
// 	'config': {
// 		"label": "日期区间",
// 		"vshow": true,
// 		"require": false,
// 		"tsize": 'medium',
// 		"format": 'yyyy-MM-dd HH:mm',
// 		"type": 'datetimerange'
// 	},
// 	'cdata': ''
}, {
	'info': {
		'name': '描述文字',
		'key': 'mmt-label',
		'type': 'form-item',
		'url': '',
		'icon': ''
	},
	'config': {
		"label": "描述文字"
	},
	'cdata': ''
// }, {
// 	'info': {
// 		'name': '分割线',
// 		'key': 'mmt-divider',
// 		'type': 'form-item',
// 		'url': '',
// 		'icon': ''
// 	},
// 	'config': {},
// 	'cdata': ''
}];