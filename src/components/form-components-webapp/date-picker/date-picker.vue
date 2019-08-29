<template>
	<group>
		<datetime :title="title" v-model="currentValue" :placeholder="`${placeholder}`" :format="format"
			@on-confirm="handleInput" :disabled="config.disabled"></datetime>
	</group>
</template>

<script type="text/ecmascript-6">
	import Mixin from '../mixin';
	//	import {Datetime, Group} from 'vux';

	export default {
		name: 'mmt-date-picker-webapp',
//		components: {
//			Datetime, Group
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
			format() {
				let val = 'YYYY-MM-DD';
				switch (this.config.format) {
					case 'yyyy-MM-dd':
						val = 'YYYY-MM-DD';
						break;
					case 'yyyy-MM-dd HH:mm':
						val = 'YYYY-MM-DD HH:mm';
						break;
					case 'yyyy-MM':
						val = 'YYYY-MM';
						break;
				}
				return val;
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
</style>