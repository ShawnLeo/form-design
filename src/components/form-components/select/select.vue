<template>
	<div class="row">
		<label class="widget-title" v-show="config.vshow">
			<span>{{config.label}} </span>
			<span class="c-danger" v-if="this.config.require">*</span>
		</label>

		<div class="widget-content" :style="positionStyles">
			<!--<Input :element-id="id" v-model="currentValue" :placeholder="`${placeholder}`" :maxlength="maxLength"-->
			<!--@input="handleInput" :style="widgetWidth"/>-->
			<Select v-model="currentValue" @on-change="handleInput" :style="widgetWidth" :disabled="config.disabled">
				<Option :value="item.value" v-for="(item, index) in config.options" :key="index">{{item.label}}</Option>
			</Select>
			<input type="hidden" :id="id" :value="currentValue"/>
		</div>

	</div>
</template>

<script type="text/ecmascript-6">
	import Mixin from '../mixin';

	export default {
		name: 'mmt-select',
		mixins: [Mixin],
		data() {
			return {
				currentValue: this.cdata || this.config.defaultValue
			};
		},
		computed: {
			positionStyles() {
				return {
					marginLeft: this.config.vshow ? '105px' : '0px'
				};
			},
			widgetWidth() {
				let sizes = {"small": "50%", "medium": '75%', "large": "99%"};
				return {
					width: sizes[this.config.tsize]
				};
			},
			maxLength() {
				return this.config.maxLength ? this.config.maxLength : 100;
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

	.widget-title {
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