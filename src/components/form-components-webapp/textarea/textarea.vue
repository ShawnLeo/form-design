<template>
	<group :title="title" >
		<x-textarea v-model="currentValue" :placeholder="`${placeholder}`" :max="maxLength"
			@on-change="handleInput"></x-textarea>
	</group>
</template>

<script type="text/ecmascript-6">
	import Mixin from '../mixin';
//	import {XTextarea, Group} from 'vux';

	export default {
		name: 'mmt-textarea-webapp',
//		components: {
//			XTextarea, Group
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
			placeholder() {
				return this.config.placeholder ? this.config.placeholder : '请输入' + this.config.label;
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
		}
	};
</script>

<style scoped>
</style>