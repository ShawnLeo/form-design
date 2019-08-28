<template>
	<div class="label-config">

		<Form ref="inputFrom" :model="config">

			<FormItem label="组件Id" v-if="info.id">
				<Input v-model="info.id" disabled/>
			</FormItem>

			<div style="margin-bottom: 10px">描述文字</div>

			<quill-editor ref="myTextEditor"
				:content="config.label"
				:options="editorOption"
				@change="onEditorChange($event)">
			</quill-editor>

		</Form>

	</div>
</template>
<script>
	import {quillEditor} from 'vue-quill-editor';

	import 'quill/dist/quill.core.css';
	import 'quill/dist/quill.snow.css';

	export default {
		name: 'mmt-label-config',
		data() {
			return {
				editorOption: {
					modules: {
						toolbar: [
							[{'size': ['small', false, 'large']}],
							['bold', 'italic'],
							[{'list': 'ordered'}]
						]
					}
				}
			};
		},
		components: {
			quillEditor
		},
		props: {
			config: Object,
			info: Object
		},
		computed: {
			editor() {
				return this.$refs.myTextEditor.quillEditor;
			}
		},
		methods: {
			onEditorChange({editor, html, text}) {
				console.log('editor change!', editor, html, text);
				this.config.label = html;
			}
		}
	};
</script>

<style scoped>
	.label-config {
		padding: 20px 15px;
	}
</style>
