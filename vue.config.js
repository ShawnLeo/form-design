module.exports = {
	publicPath: './',
	assetsDir: 'static', // 静态资源地址
	runtimeCompiler: true,
	css: { extract: false }, // css强制内联
	chainWebpack: config => {
		config.module
				.rule('images')
				.use('url-loader')
				.loader('url-loader')
				.tap(options => Object.assign(options, { limit: 102400 })); // 100K以内的图片都内联
	},
	configureWebpack: config => {
		require('vux-loader').merge(config, {
			options: {},
			plugins: [{
				name: 'vux-ui'
			}, {
				name: 'duplicate-style'  // 去除重复css代码
			}]
		});

		if (process.env.NODE_ENV === 'development') {
			config.devtool = 'source-map'; // 开发环境开启source map 方便调试
		}
	}
};
