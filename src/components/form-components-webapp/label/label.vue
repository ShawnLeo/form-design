<template>
	<group>
		<card>
			<p slot="content" class="ql-editor card-padding" v-html="config.label"></p>
		</card>
	</group>
</template>

<script type="text/ecmascript-6">
	import Mixin from '../mixin';
//	import {Card, Group} from 'vux';
	import 'quill/dist/quill.core.css';

	export default {
		name: 'mmt-label-webapp',
//		components: {
//			Card, Group
//		},
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
	.card-padding {
		padding: 15px;
		font-size: 15px;
	}
</style>