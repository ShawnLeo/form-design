<template>
	<div class="form-head">
		<div class="head-info">
			<p class="form-name">{{info.title}}</p>
			<div class="form-description">{{info.description}}</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	//	import Mixin from '../../module-components/mixin';
	export default {
		name: 'mmt-form-head',
//		mixins: [Mixin],
		data() {
			return {};
		},
		props: {
			info: Object
		},
		mounted() {}
	};
</script>

<style scoped>
	.form-head {
		padding: 20px 10px 12px;
		position: relative;
		word-wrap: break-word;
		word-break: break-all;
		box-sizing: content-box;
		border: 1px solid #e5e5e5;
	}

	.form-head .head-info {
		position: relative;
		z-index: 1;
	}

	.form-head .form-name {
		font-size: 20px;
		font-weight: bold;
		margin-bottom: 0;
		overflow: hidden;
		padding: 5px 10px;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.form-head .form-description {
		color: #666;
		padding: 5px 10px;
	}

	.form-head .form-description p {
		margin: 0;
	}
</style>