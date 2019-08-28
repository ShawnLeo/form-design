# 美美科技表单设计器

### 1.页面装饰器

​	通过**拖拽**组件完成页面设计。


### 2.组件分组列表

​

### 3.组件设计规范

##### 	1. 组件数据

​	info：组件基础信息

​	config：组件相关配置

​	cdata：数据

样例：

```json
{
	"info": {
		"name": "单列图片",
		"key": "single-row-image"
	},
	"config": {
		"padding": {
			"name": "内边距",
			"value": "no"
		},
		"images": {
			"name": "图片",
			"props": {
				"desc": "建议图片宽度为750px，高度为200-950px，支持图片格式jpg/png/gif",
				"limit": "10"
			}
		}
	},
	"cdata": {}
}
```

##### 	2. 注意事项

​


### 4.项目结构

​	