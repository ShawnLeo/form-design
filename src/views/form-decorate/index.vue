<template>
	<div class="form-decorate">
		<div class="top-container">
			<div style="font-size: 22px;float: left;color: #ffffff;">表单设计器</div>
			<div style="float: right">

				<Button type="primary" @click="save" v-if="viewType === 'edit'">保存</Button>
				<Button type="primary" @click="saveData" v-else>保存数据</Button>

				<Button type="success" @click="preview('preview')" style="margin-left: 10px;" v-if="viewType === 'edit'">预览
				</Button>
				<Button type="success" @click="exitPreview" style="margin-left: 10px;" v-else>返回编辑</Button>
			</div>
			<div style="clear: both;"></div>

		</div>

		<div class="decorate-container" v-if="viewType === 'edit'">
			<form-decorate :formData="formData" :layoutComponents="layoutComponents"
				:formComponents="formComponents"></form-decorate>
		</div>

		<div class="preview-container" v-else-if="viewType === 'preview'">
			<form-preview :formData="formData"></form-preview>

			<div class="form-viewport-opt">
				<a class="view_type exit" @click="exitPreview">
					<Icon type="md-exit"/>
				</a>
				<a class="view_type exit" style="border-top: 1px solid #ebebeb;" @click="preview('preview')">
					<Icon type="md-desktop"/>
				</a>
				<a class="view_type exit" style="border-top: 1px solid #ebebeb;" @click="preview('previewWebapp')">
					<Icon type="md-phone-portrait"/>
				</a>
			</div>
		</div>

		<div class="preview-webapp-container" v-else-if="viewType === 'previewWebapp'">

			<div class="form-preview-mobile">
				<div class="mobile-hd"></div>
				<div class="mobile-content">
					<div class="status-bar"></div>
					<form-preview-webapp :formData="formData"></form-preview-webapp>
				</div>
				<div class="mobile-foot"></div>
			</div>

			<div class="form-viewport-opt">
				<a class="view_type exit" @click="exitPreview">
					<Icon type="md-exit"/>
				</a>
				<a class="view_type exit" style="border-top: 1px solid #ebebeb;" @click="preview('preview')">
					<Icon type="md-desktop"/>
				</a>
				<a class="view_type exit" style="border-top: 1px solid #ebebeb;" @click="preview('previewWebapp')">
					<Icon type="md-phone-portrait"/>
				</a>
			</div>
		</div>

	</div>
</template>

<script type="text/ecmascript-6">

	import formComponentsMap from '../../components/form-components';
	import formComponentsWebappMap from '../../components/form-components-webapp';
	import formConfigComponentsMap from '../../components/form-config';
	import {layoutComponents, formComponents} from '../../utils/components';
	import {formValicdate, install} from '../../utils/utils';
	import formDecorate from './decorate.vue';
	import formPreview from './preview.vue';
	import formPreviewWebapp from './preview-webapp.vue';
	import '../../utils/vux';

	export default {
		components: {
			formDecorate, formPreview, formPreviewWebapp
		},
		data() {
			return {
				layoutComponents: layoutComponents,
				formComponents: formComponents,
				viewType: 'edit',
				formData: {
					info: {
						title: '',
						description: ''
					},
					gridList: []
				}
			};
		},
		methods: {
			// 保存装饰区内容
			save() {
				window.localStorage.setItem("grid-list", JSON.stringify(this.formData.gridList));
				window.localStorage.setItem("form-data", JSON.stringify(this.formData.info));
				this.$Message.success('保存成功!');
			},// 保存装饰区内容
			saveData() {
				formValicdate(this.formData, (valid, errorItem) => {
					if (valid) {
						window.localStorage.setItem("grid-list", JSON.stringify(this.formData.gridList));
						window.localStorage.setItem("form-data", JSON.stringify(this.formData.info));
						this.$Message.success('保存成功!');
					} else {
						if (errorItem.info.type === 'form-table') {
							this.$Message.error("请添加子表信息");
						} else {
							this.$Message.error(errorItem.config.label + "为必填项");
						}
					}
				});
			},
			// 保存预览
			preview(viewType) {
				this.viewType = viewType;
			},
			// 返回编辑
			exitPreview() {
				this.viewType = 'edit';
			},
			init() {
				let list = [];
				let componentsMap = {...formComponentsMap, ...formComponentsWebappMap};

				list = list.concat(formComponents).concat(layoutComponents);
				list.forEach(item => {
					// 加载组件
					install(item.info.key, componentsMap[item.info.key]);
					install(item.info.key + '-webapp', componentsMap[item.info.key + '-webapp']);
					// 加载组件对应的配置组件
					install(item.info.key + '-config', formConfigComponentsMap[item.info.key + '-config']);
					// 远程加载
					// asyncLoadJs(item.info.url, componentsMap);
				});

				// TODO 获取本地保存的数据
				this.formData.gridList = window.localStorage.getItem("grid-list") ? JSON.parse(window.localStorage.getItem("grid-list")) : [];
				this.formData.info = window.localStorage.getItem("form-data") ? JSON.parse(window.localStorage.getItem("form-data")) : {};
			}
		},
		mounted() {
			this.init();
		}
	};
</script>

<style lang="less">
	.top-container {
		padding: 20px;
		box-shadow: 0 1px 0 0 #f2f2f2;
		background-color: #222430;
		color: #878997;
	}

	.preview-container {
		width: 800px;
		padding: 10px;
		min-height: 700px;
		margin: 20px auto;
		border: 1px solid #e5e5e5;
		position: relative;
		box-shadow: 0 2px 6px 0 rgba(0, 0, 0, .1);
		.form-viewport-opt {
			position: absolute;
			top: 106px;
			right: -41px;
			background-color: #fff;
			border-radius: 0 3px 3px 0;
			box-shadow: 1px 0px 5px rgba(0, 0, 0, 0.3);
			transition: right ease-in-out 0.5s;
			z-index: 1001;
			display: block;
			.view_type {
				display: block;
				width: 40px;
				height: 40px;
				line-height: 40px;
				text-align: center;
				color: #999;
				font-size: 25px;
				cursor: pointer;
				background: transparent;
				text-decoration: none;
			}
		}

	}

	.preview-webapp-container {
		width: 375px;
		height: 680px;
		background-color: #F4F7FA;
		border-top-left-radius: 40px;
		border-top-right-radius: 40px;
		border-bottom-left-radius: 50px;
		border-bottom-right-radius: 50px;
		margin: 20px auto;
		box-shadow: 1px 2px 20px rgba(0, 0, 0, 0.2);
		z-index: 500;
		position: relative;
		.form-preview-mobile {
			* {
				box-sizing: content-box !important;
			}

			.mobile-hd {
				height: 80px;
				position: relative;
			}

			.mobile-hd:before {
				position: absolute;
				content: "";
				width: 11px;
				height: 11px;
				border-radius: 50%;
				border: 1px solid #DFE0E1;
				left: 50%;
				margin-left: -5px;
				top: 27px;
				transform: scale(1.5);
			}
			.mobile-hd:after {
				width: 40px;
				height: 8px;
				border: 1px solid #DFE0E1;
				position: absolute;
				content: "";
				bottom: 22px;
				left: 50%;
				margin-left: -20px;
				border-radius: 22px;
				transform: scale(1.5);
			}

			.mobile-content {
				height: 520px;
				background-color: rgb(247, 247, 247);;
				margin: 0 20px;
				border: 1px solid #E2E3E4;
				overflow-y: scroll;
				overflow-x: hidden;
			}

			.mobile-content .status-bar {
				background-image: url(../../assets/images/form-preview-mobilehd.png);
				background-size: 320px 14px;
				height: 14px;
				width: 320px;
				margin: 5px 0 0 0;
			}

			.mobile-foot {
				height: 80px;
				position: relative;
			}

			.mobile-foot:after {
				position: absolute;
				content: "";
				width: 30px;
				height: 30px;
				border: 1px solid #DFE0E1;
				border-radius: 50%;
				margin-left: -15px;
				left: 50%;
				top: 24px;
				transform: scale(1.5);
			}

		}
		.form-viewport-opt {
			position: absolute;
			top: 106px;
			right: -41px;
			background-color: #fff;
			border-radius: 0 3px 3px 0;
			box-shadow: 1px 0px 5px rgba(0, 0, 0, 0.3);
			transition: right ease-in-out 0.5s;
			z-index: 1001;
			display: block;
			.view_type {
				display: block;
				width: 40px;
				height: 40px;
				line-height: 40px;
				text-align: center;
				color: #999;
				font-size: 25px;
				cursor: pointer;
				background: transparent;
				text-decoration: none;
			}
		}
	}


</style>