export default {
	data() {
		return {};
	},
	props: {
		id: {
			type: String
		},
		index: {
			type: Number
		},
		rowIndex: {
			type: Number
		},
		colIndex: {
			type: Number
		},
		config: {
			type: Object,
			default() {
				return {};
			}
		},
		cdata: {
			type: Object | Array
		}
	},
	watch: {},
	created() {},
	methods: {}
};