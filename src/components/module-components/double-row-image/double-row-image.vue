<template>
	<div class="single-image-list" :class="[{'is-round': config.round.value === 'yes'}]">
		<div class="double-row">
			<div class="double-row-container">
				<a href="javascript:;">
					<img :src="emptySrc"
						class="double-row-image">
				</a>
			</div>
			<div class="double-row-container">
				<a href="javascript:;">
					<img :src="emptySrc"
						class="double-row-image">
				</a>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import Mixin from '../mixin';
	export default {
		name: 'double-row-image',
		mixins: [Mixin],
		data() {
			return {
				emptySrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAqgAAAEUCAMAAADQhjT9AAAAXVBMVEX4+vzb6/zc7Pz3+fzc7Pve7frj8vra6/3i8Prh8Prq9Pvw9/zs9frh7vzg7fzv9fzz9/zf7/vt9Pze7fz1+fvo8vzl8vrk8Pvm8fz59e3l9ezt7PvT8N3B6876798vD9VuAAAEzElEQVR42uzBgQAAAACAoP2pF6kCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGD27nU5URgMwDAkfhBATDgIdk/3f5mbiBJbt1PcGWB35n3qpEX5+U6CiBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgP+Mdk4nwL/Off9OqNhS3/fJyzShYlv9tx/f/qJUZy2hYjv98efPH8fkdZpOsaVvU6jateVibaU/Zku3WE9c+rWt1QtOZZ9EofLWkipW1Tsfnavzl3Q2eRAq70pCxeqsL+30AjnPWc6V8+4Ka9OtEpX6n/dD+tnQvQu1TfPgQqhYSwxV/SnJ9LOhm0PVlR3zq7qtSBUriaHOIaoFwxxqNUqn8ivVyUiqeLLBjKq+mlHdKIdHxiVAtH6o6aKlv42dytWRKRXRCqHGOsNfX5V6D7VsPAkaaQJCxRpiqJ2aSNd1qpuKnMSA46BuoR6LDwgVK9JtJ50oke50Kdv2PKad+nCyKjyeQ3VZMTHGFF5WJUC0QqhXpnTaqy7d1KQXxjT8FjUXOy/92g4myAI/MqFiFTHUpulqqUuXXLlReaKeyfQIoQa6OpazI2ensI4Yau01o4tPiFJdN8fZicitXOkkhurpCRdQYXW6VbUnIdRJVZ+kPqVS16e6nhZ9T2rv1PhtPi/FDnSb+wglv/SPF5oEImGuTfNJ14S90pQP9rGPNs/TRvKHGbVLc/+TSh1IrnydgfLTLFegYC9tHpJMxd7606VKb502J7/4n207qtsTknqEis3FUA8XN3VqTe6rnCbUph5tr7Xzpao0bKc5oWIfba6UDzU9jFXf9641B5UefKhKPGP17ZRVrnynclAH3kxhF+3BRyoHz1zO51EOD+R+cr8Vv3GaXiNUbMRVTj+EOhORw58v3esvEuMlVGzCXeqxeg71mZRzk7YgVGxLl2n+cNrUHj5lXPL29qY/TKmEig1oW9bh/P3Z6q9ClVLrt1+/pv1aQsWGdCu34prjJ6GKNx+hvv16u3/zZHpBGkLF+vpBbppB30O9BhgUhdzdj1C1TuIb/7Afx6jYQD8Ud+UtVLkzpbXlUMybLnnk7i9wXxRswA7ZZKiS96Fmlb7eS2qUqynkSJ8JFRtyduL0Q6hN04z2fuX+VOrgPiZeSNAQKragb+b+fKQ+1DiBapsVTZNZ/XTUcN2RULELW1wNVUy5Kodh7jQqC99zUxAqthZDNY/56b53OnlijQ+1IFTswhZLv+zshqIgVOwghnrul3z2agyhYnsxVGMX7Zoxo2IvlQkrv0sWcENhCkOo2EMVJtRhUXx9aQpCxT6qEN8xWeSYGWO4dw/2UPn2Mrdw38EYbjKFjcVQhz5ZxBEqNhdDXXzYqUtCxeZiqDZZyGaEio3FULNKL1QRKrYXl/7jQiz92EuVGV/fUoSKnbjBvGTgXv3YRXXOXjDwD3qxE1e9oKdT7EZ/hZv1AwAAAAAAAAAAAMBv9uBAAAAAAADI/7URVFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWlPTggAQAAABD0/3U7AhUAAACApQBI70RbgQ7h7AAAAABJRU5ErkJggg=="
			};
		},
		props: {
			cdata: Object | Array,
			config: Object
		},
		mounted() {}
	};
</script>

<style scoped>
	.double-row{
		width: 100%;
		padding: .2rem;
		background-color: #fff;
		display: flex;
		justify-content: space-between;
	}
	.double-row-container{
		width: 49%;
	}
	.is-round .double-row-container {
		border-radius: .1rem;
		overflow: hidden;
	}
	.double-row-container a{
		display: block;
		font-size: 0;
	}
	.double-row-image{
		width: 100%;
	}

</style>