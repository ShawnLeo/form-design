<template>
	<div class="row">
		<label class="widget-label">
			<div class="ql-editor" v-html="config.label"></div>
		</label>
	</div>
</template>

<script type="text/ecmascript-6">
	import Mixin from '../mixin';
	import 'quill/dist/quill.core.css';

	export default {
		name: 'mmt-label',
		mixins: [Mixin],
		data() {
			return {};
		},
		computed: {},
		methods: {},
		props: {},
		mounted() {}
	};
</script>

<style scoped>
	.row {
		width: 100%;
	}
	.widget-label{
		padding-left: 20px;
		margin-top: 5px;
		font-size: 14px;
		color: #555;
		display: block;
		cursor: default;
		word-wrap: break-word;
		word-break: break-all;
	}
</style>