<template>
	<div class="row">
		<label class="widget-title" v-show="config.vshow">
			<span >{{config.label}} </span>
			<span class="c-danger" v-if="this.config.require">*</span>
		</label>

		<div class="widget-content" :style="positionStyles">
			<!--<Input :element-id="id" v-model="currentValue" :placeholder="`${placeholder}`" :maxlength="maxLength"-->
			<!--@input="handleInput" :style="widgetWidth"/>-->
			<DatePicker :element-id="id" :type="type" :start-date="startDate" placement="bottom-end" :format="config.format"
				v-model="currentValue" :placeholder="placeholder" @on-change="handleInput" :style="widgetWidth"></DatePicker>

		</div>

	</div>
</template>

<script type="text/ecmascript-6">
	import Mixin from '../mixin';

	export default {
		name: 'mmt-date-picker',
		mixins: [Mixin],
		data() {
			return {
				currentValue: this.cdata
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
				return this.config.placeholder ? this.config.placeholder : '请选择' + this.config.label;
			},
			type () {
				return this.config.type ? this.config.type : 'date';
			},
			startDate () {
				return this.config.startDate ? this.config.startDate : new Date();
//			},
//			options: {
//				disabledDate (date) {
//					return date && date.valueOf() < Date.now() - 86400000;
//				}
			}
		},
		methods: {
			handleInput(event) {
				console.log(event);
				this.$emit('on-change', event, this.index, this.rowIndex, this.colIndex);
				this.$emit('input', event, this.index, this.rowIndex, this.colIndex);
			}
		},
		props: {},
		mounted() {
		}
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