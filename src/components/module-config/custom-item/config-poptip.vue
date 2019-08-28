<template>
	<div :class="`${preCls} ${preCls}-container`" :style="positionStyles">
		<div :class="`${preCls}-header`">{{title}}</div>
		<div :class="`${preCls}-body`">
			<slot></slot>
		</div>
		<div  :class="`${preCls}-footer`">
			<!-- <p :class="`${preCls}-message`" v-show="invalidMessage">{{invalidMessage}}</p> -->
			<div :class="`${preCls}-footer-save`">
				<Button type="primary" size="small" @click="onSave">保存</Button>
			</div>
		</div>
		<div :class="`${preCls}-arrow`"></div>
	</div>
</template>

<script>
	const preCls = 'config-poptip';
	export default {
		name: 'ConfigPoptip',
		props: {
			title: {
				type: String,
				default: ''
			},
			top: {
				type: Number,
				default: 0
			},
			left: {
				type: Number,
				default: 390
			}
		},
		data () {
			return {
				preCls
			};
		},
		computed: {
			positionStyles () {
				return {
					top: `${this.top}px`,
					left: `${this.left}px`
				};
			}
		},
		methods: {
			onSave (e) {
				this.$emit('on-save', e);
			}
		}
	};
</script>

<style lang='less'>
	.config-poptip {
		position: absolute;
		background: #FAFAFA;
		color: #333;
		border: 1px solid #E5E5E5;
		font-size: 14px;
		border-radius: 2px;
		box-sizing: border-box;
		box-shadow: 0 2px 6px 0 rgba(0,0,0,.1);
		&-header {
			height: 42px;
			line-height: 42px;
			border-bottom: 1px solid #F2F2F2;
			padding: 0 15px;
		}
		&-body {
			padding: 15px;
			width: 324px;
		}
		&-footer {
			padding: 10px 15px;
			border-top: 1px solid #F2F2F2;
			&-message {
//				.flex-center-between();
			}
			&-save {
				display: flex;
				align-items: center;
				justify-content: flex-end;
//				.flex-center-right();
			}
		}
		&-message {
			color: red;
			font-size: 12px;
		}
		&-arrow {
			position: absolute;
			left: -6px;
			top: 12px;
			height: 0px;
			width: 0px;
			border-top:7px solid transparent;
			border-right: 6px solid #E5E5E5;
			border-bottom: 7px solid transparent;
		}
		&-arrow:after {
			content: '';
			position: absolute;
			top: -6px;
			left: 1px;
			border-top: 6px solid transparent;
			border-right: 5px solid #FAFAFA;
			border-bottom: 6px solid transparent;

		}
	}
</style>