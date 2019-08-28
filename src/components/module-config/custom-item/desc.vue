<template>
	<div :class="`${preCls}`">
		<p :class="`${preCls}_title`">{{title}}</p>
		<p>{{desc}}</p>
	</div>
</template>

<script>
	const preCls = 'decoration-tips';
	export default {
		data () {
			return {
				preCls
			};
		},
		props: {
			title: {
				type: String,
				default: ''
			},
			desc: {
				type: String,
				default: ''
			}
		}
	};
</script>

<style lang='less'>
	.decoration-tips {
		width: 100%;
		&_title {
			margin-bottom: 10px;
		}
		font-size: 12px;
		color: #666666;
		line-height: 16px;
	}
</style>