<template>
	<group :title="title">
		<checklist v-model="currentValue"  :options="options" @on-change="handleInput"></checklist>
	</group>
</template>

<script type="text/ecmascript-6">
	import Mixin from '../mixin';

	export default {
		name: 'mmt-checkbox-webapp',
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