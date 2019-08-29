<template>
	<group :title="title">
		<radio v-model="currentValue" :options="options" @on-change="handleInput" :disabled="config.disabled"></radio>
	</group>
</template>

<script type="text/ecmascript-6">
	import Mixin from '../mixin';
//	import {Radio, Group} from 'vux';

	export default {
		name: 'mmt-radio-webapp',
//		components: {
//			Radio, Group
//		},
		mixins: [Mixin],
		data() {
			return {
				currentValue: this.cdata,
				options: []
			};
		},
		computed: {
			title() {
				let label = this.config.label;
				return this.config.require ? label + ' *' : label;
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
			if (this.config.options) {
				this.config.options.forEach(option => this.options.push({key: option.value, value: option.label}));
			}
		}
	};
</script>

<style scoped>
	.row {
		width: 100%;
	}


</style>