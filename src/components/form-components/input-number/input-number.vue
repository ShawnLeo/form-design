<template>
	<div class="row">
		<label class="widget-title" v-show="config.vshow">
			<span >{{config.label}} </span>
			<span class="c-danger" v-if="this.config.require">*</span>
		</label>

		<div class="widget-content" :style="positionStyles">
			<InputNumber :element-id="id" v-model="currentValue" :placeholder="`${placeholder}`"
				:max="max" :min="min" :step="step" @input="handleInput" :precision="precision" :style="widgetWidth"/>
		</div>

	</div>
</template>

<script type="text/ecmascript-6">
	import Mixin from '../mixin';

	export default {
		name: 'mmt-input-number',
		mixins: [Mixin],
		data() {
			return {
				currentValue: this.cdata ? Number.parseFloat(this.cdata) : 0
			};
		},
		computed: {
			positionStyles () {
				return {
					marginLeft: this.config.vshow ? '105px' : '0px'
				};
			},
			widgetWidth () {
				let sizes = {"small": "50%", "medium": '75%', "large": "99%"};
				return {
					width: sizes[this.config.tsize]
				};
			},
			placeholder () {
				return this.config.placeholder ? this.config.placeholder : '请输入' + this.config.label;
			},
			step () {
				return this.config.step ? Number.parseFloat(this.config.step) : 1;
			},
			precision () {
				return this.config.precision ? Number.parseInt(this.config.precision) : 0;
			},
			max () {
				return this.config.max ? this.config.max : 480;
			},
			min () {
				return this.config.min ? this.config.min : 0;
			}
		},
		methods: {
			handleInput(event) {
				this.$emit('on-change', event, this.index, this.rowIndex, this.colIndex);
				this.$emit('input', event, this.index, this.rowIndex, this.colIndex);
			}
		},
		props: {},
		mounted() {}
	};
</script>

<style scoped>
	.row {
		width: 100%;
	}
	.widget-title{
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
	.c-danger {
		color: #fb6e52;
	}

	.widget-content {
		position: relative;
		min-height: 30px;
	}


</style>