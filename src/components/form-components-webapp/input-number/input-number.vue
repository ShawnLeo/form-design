<template>
		<group>
			<x-number :title="title" v-model="currentValue" :fillable="true"
				:max="max" :min="min" :step="step" @on-change="handleInput" button-style="round"></x-number>
		</group>
</template>

<script type="text/ecmascript-6">
	import Mixin from '../mixin';
//	import { XNumber, Group } from 'vux';

	export default {
		name: 'mmt-input-number-webapp',
//		components: {
//			XNumber, Group
//		},
		mixins: [Mixin],
		data() {
			return {
				currentValue: this.cdata
			};
		},
		computed: {
			title() {
				let label = this.config.label;
				return this.config.require ? label + ' *' : label;
			},
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
			max () {
				return this.config.max ? this.config.max : 480;
			},
			min () {
				return this.config.min ? this.config.min : 1;
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


</style>