<template>
	<div :class="[preCls, {'is-padding': config.padding.value === 'yes'}, {'is-round': config.round.value === 'yes'}]">
		<div :class="[preCls + '-list']" ref="swiperContainer" :name="preCls" :style="{height: xheight}">
			<div :class="[preCls + '-list-item']" v-for="(item) in cdata" :key="item.img">
				<div :class="[preCls + '-img']" :style="{backgroundImage: buildBackgroundUrl(item)}"></div>
				<p :class="[preCls + '-desc']"></p>
			</div>
			<div :class="[preCls + '-list-item']" v-for="(item) in copyItems" :key="item.img">
				<div :class="[preCls + '-img']" :style="{backgroundImage: buildBackgroundUrl(item)}"></div>
				<p :class="[preCls + '-desc']"></p>
			</div>
		</div>
		<div :class="[preCls + '-dots', preCls + '-indicator', preCls + `-indicator-${dots}`]" v-show="showDots">
			<a href="javascript:" v-for="key in cdata.length" :key="key">
				<i :class="[{'active': key - 1 === activeIndex}, preCls + '-icon-dot']"></i>
			</a>
		</div>
	</div>
</template>

<script>
	const preCls = 'swiper';
	import Mixin from '../mixin';
	export default {
		name: "swiper",
		mixins: [Mixin],
		computed: {
			xheight () {
				return this.config.height ?  parseInt(this.config.height.value, 10) : '3.2rem';
			},
			showDots () {
				return this.config.showDots.value === 'yes';
			},
			dots () {
				return this.config.dots.value;
			}
		},
		data() {
			return {
				timer: null, //定时器
				preCls: preCls,
				activeIndex: 0,  // 激活项
				current: 0, // 实际激活项
				xwidth: 0,
				start: {
					x: 0
				},
				$container: {},
				$items: [],
				threshold: 80,
				interval: 3000,
				duration: 500,
				loop: true,
				positions: [], // 相对位置
				offsets: [], // 偏移量
				copyItems: [],
				emptySrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAqgAAAEUCAMAAADQhjT9AAAAXVBMVEX4+vzb6/zc7Pz3+fzc7Pve7frj8vra6/3i8Prh8Prq9Pvw9/zs9frh7vzg7fzv9fzz9/zf7/vt9Pze7fz1+fvo8vzl8vrk8Pvm8fz59e3l9ezt7PvT8N3B6876798vD9VuAAAEzElEQVR42uzBgQAAAACAoP2pF6kCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGD27nU5URgMwDAkfhBATDgIdk/3f5mbiBJbt1PcGWB35n3qpEX5+U6CiBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgP+Mdk4nwL/Off9OqNhS3/fJyzShYlv9tx/f/qJUZy2hYjv98efPH8fkdZpOsaVvU6jateVibaU/Zku3WE9c+rWt1QtOZZ9EofLWkipW1Tsfnavzl3Q2eRAq70pCxeqsL+30AjnPWc6V8+4Ka9OtEpX6n/dD+tnQvQu1TfPgQqhYSwxV/SnJ9LOhm0PVlR3zq7qtSBUriaHOIaoFwxxqNUqn8ivVyUiqeLLBjKq+mlHdKIdHxiVAtH6o6aKlv42dytWRKRXRCqHGOsNfX5V6D7VsPAkaaQJCxRpiqJ2aSNd1qpuKnMSA46BuoR6LDwgVK9JtJ50oke50Kdv2PKad+nCyKjyeQ3VZMTHGFF5WJUC0QqhXpnTaqy7d1KQXxjT8FjUXOy/92g4myAI/MqFiFTHUpulqqUuXXLlReaKeyfQIoQa6OpazI2ensI4Yau01o4tPiFJdN8fZicitXOkkhurpCRdQYXW6VbUnIdRJVZ+kPqVS16e6nhZ9T2rv1PhtPi/FDnSb+wglv/SPF5oEImGuTfNJ14S90pQP9rGPNs/TRvKHGbVLc/+TSh1IrnydgfLTLFegYC9tHpJMxd7606VKb502J7/4n207qtsTknqEis3FUA8XN3VqTe6rnCbUph5tr7Xzpao0bKc5oWIfba6UDzU9jFXf9641B5UefKhKPGP17ZRVrnynclAH3kxhF+3BRyoHz1zO51EOD+R+cr8Vv3GaXiNUbMRVTj+EOhORw58v3esvEuMlVGzCXeqxeg71mZRzk7YgVGxLl2n+cNrUHj5lXPL29qY/TKmEig1oW9bh/P3Z6q9ClVLrt1+/pv1aQsWGdCu34prjJ6GKNx+hvv16u3/zZHpBGkLF+vpBbppB30O9BhgUhdzdj1C1TuIb/7Afx6jYQD8Ud+UtVLkzpbXlUMybLnnk7i9wXxRswA7ZZKiS96Fmlb7eS2qUqynkSJ8JFRtyduL0Q6hN04z2fuX+VOrgPiZeSNAQKragb+b+fKQ+1DiBapsVTZNZ/XTUcN2RULELW1wNVUy5Kodh7jQqC99zUxAqthZDNY/56b53OnlijQ+1IFTswhZLv+zshqIgVOwghnrul3z2agyhYnsxVGMX7Zoxo2IvlQkrv0sWcENhCkOo2EMVJtRhUXx9aQpCxT6qEN8xWeSYGWO4dw/2UPn2Mrdw38EYbjKFjcVQhz5ZxBEqNhdDXXzYqUtCxeZiqDZZyGaEio3FULNKL1QRKrYXl/7jQiz92EuVGV/fUoSKnbjBvGTgXv3YRXXOXjDwD3qxE1e9oKdT7EZ/hZv1AwAAAAAAAAAAAMBv9uBAAAAAAADI/7URVFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWlPTggAQAAABD0/3U7AhUAAACApQBI70RbgQ7h7AAAAABJRU5ErkJggg=="
			};
		},
		methods: {
			_initPosition () {
				this.positions = [];
				for (let i = 0; i < this.$items.length; i++) {
					this.positions.push(i);
				}
			},
			_movePosition (position) {
				if (position > 0) {
					let firstIndex = this.positions.splice(0, 1);
					this.positions.push(firstIndex[0]);
				} else if (position < 0) {
					let lastIndex = this.positions.pop();
					this.positions.unshift(lastIndex);
				}
			},
			_setOffset() {
				let _this = this;
				let index = this.positions.indexOf(this.current);
				this.offsets = [];
				this.$items.forEach(function ($item, key) {
					_this.offsets.push((key - index) * _this.xwidth);
				});
			},
			_setTransform(offset) {
				let _this = this;
				offset = offset || 0;

				this.$items.forEach(function ($item, key) {
					let distance = _this.offsets[key] + offset;
					let transform = `translate3d(${distance}px, 0, 0)`;
					$item.style.webkitTransform = transform;
					$item.style.transform = transform;
				});
			},
			_setTransition (duration) {
				duration = duration || this.duration;
				let transition = duration === 'none' ? 'none' : duration + 'ms';
				this.$items.forEach(function ($item) {
					$item.style.webkitTransition = transition;
					$item.style.transition = transition;
				});
			},
			_getDistance (distance) {
				if(this._loop()) {
					return distance;
				}

				if (distance > 0 && this.current === 0) {
					return 0;
				} else if (distance < 0 && this.current === this.$items.length - 1) {
					return 0;
				} else {
					return distance;
				}
			},
			_loop () {
				return this.loop && this.$items.length >= 3;
			},
			loopRender() {
				if(!this._loop()) {
					return;
				}

				if (this.offsets[this.offsets.length - 1] === 0) { // 最后一个，把第一个加在后面
					this.$container.appendChild(this.$items[0]);
					this._movePosition(1);
				} else if (this.offsets[0] === 0){ // 第一个，把最后一个加在前面
					this.$container.insertBefore(this.$items[this.$items.length - 1], this.$container.firstChild);
					this._movePosition(-1);
				}
				this.$items = this.$el.querySelectorAll('.' + preCls + '-list-item');
				this._setOffset();
				this._setTransform();
			},
			_moveIndex(index) {
				this.current = index;

				this.activeIndex = (this.current + this.cdata.length) % this.cdata.length; // 防止 -1

				if (this.current >= this.$items.length) {
					this.current = 0;
				} else if (this.current < 0){
					this.current = this.$items.length - 1;
				}
			},
			_touchstart(e) {
				this.stop();
				this.start.x = e.changedTouches[0].pageX;
				this._setTransition('none');
			},
			_touchmove(e) {
				let moveX = e.targetTouches[0].pageX - this.start.x;
				this._setTransform(moveX);
				e.preventDefault();
			},
			_touchend(e) {
				let distance = e.changedTouches[0].pageX - this.start.x;
				distance = this._getDistance(distance);
				if (distance > this.threshold) {
					this.move(-1);
				} else if (distance < -this.threshold) {
					this.move(1);
				} else {
					this.move(0);
				}
			},
			buildBackgroundUrl(item) {
				return item.img ? `url(${item.img})` : `url(${this.emptySrc})`;
			},
			bind() {
				this.$container.addEventListener('touchstart', this._touchstart, false);
				this.$container.addEventListener('touchmove', this._touchmove, false);
				this.$container.addEventListener('touchend', this._touchend, false);
			},
			move (num) {
				this.go(this.current + num);
			},
			go (index) {
				this.stop();

				this._moveIndex(index);
				this._setOffset();
				this._setTransition();
				this._setTransform();
				this.loopRender();
				this.play();
			},
			play() {
				this.stop();
				if (this && this._isDestroyed) { // 组件被销毁就不执行了
					return;
				}
				this.timer = setTimeout(() => {
					this.move(1);
				}, this.interval);
			},
			stop () {
				this.timer && clearTimeout(this.timer);
			},
			towItem() {
				// 两条数据
				if (this.cdata.length === 2 && this.loop) {
					this.copyItems = this.cdata;
				} else {
					this.copyItems = [];
				}
			},
			init() {
				this.towItem();
				this.$nextTick(() => {
					this.$container = this.$refs.swiperContainer;
					this.xwidth = this.$el.querySelectorAll('.' + preCls + '-list')[0].offsetWidth;
					this.$items = this.$el.querySelectorAll('.' + preCls + '-list-item');
					this._initPosition();
					this._setOffset();
					this._setTransform();
					this.loopRender();

					this.bind();
					this.play();
				});
			}
		},
		mounted() {
			this.init();
		},
		watch: {
			cdata () {
				this.stop();
				this.init();
			}
		},
		destroy () {
			console.log('destroy....');
			this.stop();
		}
	};
</script>

<style lang='less' scoped>
	@preCls: swiper;

	.@{preCls}{
		width: 100%;
		background-color: #ffffff;
		&-list{
			position: relative;
			overflow: hidden;
			&-item {
				position: absolute;
				bottom: 10px;
				top: 0;
				left: 0;
				list-style: none;
				width: 100%;
				height: 100%;
				.swiper-img{
					width: 100%;
					height: 100%;
					background: center center no-repeat;
					background-size: cover;
				}
				.swiper-desc{
					position: absolute;
					left: 0;
					right: 0;
					bottom: 0;
				}
			}
		}
		&-dots{
			position: relative;
			height: .38rem;
			width: 100%;
			text-align: center;
			a{
				margin-left: .15rem;
			}
			.@{preCls}-icon-dot {
				display: inline-block;
				vertical-align: middle;
				width: .12rem;
				height: .12rem;
				border-radius: .06rem;
				background-color: #d0cdd1;
				&.active{
					background-color: #04BE02;
				}
			}
			&.@{preCls}-indicator-inner{
				float: left;
				margin-bottom: -.38rem;
				top: -.4rem;
			}
			&.@{preCls}-indicator-outer{
				top: 0rem;
			}
		}
	}
	.is-padding{
		.@{preCls}-list-item {
			padding: .2rem;
			.swiper-desc{
				left: .2rem;
				right: .2rem;
				bottom: .2rem;
			}
		}
		.@{preCls}-indicator-inner{
			float: left;
			top: -.57rem!important;
		}
		.@{preCls}-indicator-outer{
			top: -.12rem;
		}
	}

	.is-round{
		.@{preCls}-list-item {
			.swiper-img{
				border-radius: .2rem;
				overflow: hidden;
			}
		}
	}

</style>