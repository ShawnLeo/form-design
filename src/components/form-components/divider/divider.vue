<template>
	<div class="row">
		<div class="widget-content">
			<Divider />
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	//	import Mixin from '../../module-components/mixin';
	export default {
		name: 'mmt-divider',
//		mixins: [Mixin],
		data() {
			return {};
		},
		props: {
			cdata: Object | Array,
			config: Object
		},
		mounted() {
		}
	};
</script>

<style scoped>
	.ivu-divider-horizontal{
		margin: 0;
	}


</style>