<template>
	<div class="row mmt-radio">

		<label class="widget-title" v-show="config.vshow">
			<span >{{config.label}} </span>
			<span class="c-danger" v-if="this.config.require">*</span>
		</label>

		<div class="widget-content" :style="positionStyles">
			<RadioGroup v-model="currentValue"  @on-change="handleInput">
				<Radio :label="item.value" v-for="(item, index) in config.options" :key="index" :disabled="config.disabled">
					{{item.label}}
				</Radio>
			</RadioGroup>
			<input type="hidden" :id="id" :value="currentValue"/>
		</div>

	</div>
</template>

<script type="text/ecmascript-6">
	import Mixin from '../mixin';

	export default {
		name: 'mmt-radio',
		mixins: [Mixin],
		data() {
			return {
				currentValue: this.cdata || this.config.defaultValue
			};
		},
		computed: {
			positionStyles () {
				return {
					marginLeft: this.config.vshow ? '105px' : '0px'
				};
			}
		},
		methods: {
			handleInput(event) {
				this.$emit('on-change', event, this.index, this.rowIndex, this.colIndex);
				this.$emit('input', event, this.index, this.rowIndex, this.colIndex);
			}
		},
		props: {},
		mounted() {
			// 自动添加默认值
			if (!this.cdata && this.config.defaultValue) {
				this.$emit('on-change', this.config.defaultValue, this.index, this.rowIndex, this.colIndex);
			}
		},
		watch: {
			'config.defaultValue'(val) {
				this.currentValue = val;
			}
		}
	};
</script>

<style scoped>
	.row {
		width: 100%;
	}

	.mmt-radio .widget-title{
		width: 95px;
		float: left;
		margin-top: 5px;
		text-align: right;
		font-size: 14px;
		font-weight: bold;
		color: #555;
		display: block;
		cursor: default;
		word-wrap: break-word;
		word-break: break-all;
	}
	.mmt-radio .c-danger {
		color: #fb6e52;
	}

	.mmt-radio .widget-content {
		position: relative;
		min-height: 30px;
	}
	.mmt-radio .ivu-radio-group{
		font-size: 19px;
	}
</style>