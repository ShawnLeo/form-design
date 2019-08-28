<template>
	<config-poptip
			class="config-config-container"
			v-if="visible" :top="top" :left="left" :title="item.info.name"
			@on-save="onSave">
		<component :is="actCmp" :config="item.config" :cdata="item.cdata" class="config-content"></component>

	</config-poptip>
</template>

<script>
	import ConfigPoptip from './custom-item/config-poptip';
	import  configComponentsMap from './index';

	export default {
		name: 'ConfigDialog',
		components: {
			ConfigPoptip
		},
//		mixins: [ Emitter ],
		props: {
			item: {
				type: Object,
				default () {
					return {};
				}
			},
			top: {
				type: Number,
				default: 0
			},
			left: {
				type: Number,
				default: 390
			},
			visible: {
				type: Boolean,
				default: false
			}
		},
		data () {
			return {
				configComponentsMap
			};
		},
		computed: {
			actCmp () {
				return this.configComponentsMap[this.item.info.key];
			}
		},

		methods: {
			// 保存数据
			onSave () {
				this.$emit('on-save');
			}
		},

		created () {
//			this.$on('open-upload-dialog', this.openUpLoad);
//			this.$on('open-link-dialog', this.openLink);
//			this.$on('on-save-data', this.saveData);
		}
	};
</script>

<style lang='less'>
	.config-config-container {
		.config-content{
			.ivu-form-item{
				margin-bottom: 10px;
			}
		}
	}
</style>