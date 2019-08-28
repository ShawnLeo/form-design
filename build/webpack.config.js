/**
 * 远程组件打包
 */
const Webpack = require('webpack');
const {join: pathJoin} = require('path');
// const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");

function resolve(dir) {
	return pathJoin(__dirname, '../', dir);
}

console.log(process.env.ENV_VERSION);

// const maps = require(resolve('src/components/module-components/map.json'));

module.exports = {
	mode: 'production',
	entry: {
		index: './src/index.js'
		// decorate: './src/views/form-decorate/decorate.js',
		// preview: './src/views/form-decorate/preview.js'
	},

	// entry: () => {
	// 	// 所有要发布的组件
	// 	let entries = {};
	// 	for (let i in maps) {
	// 		entries[i] = resolve(maps[i]);
	// 	}
	// 	return entries;
	// },
	output: {
		filename: 'form-design.min.js',
		path: pathJoin(__dirname, '../dist'),
		library: 'form-design',
		libraryTarget: 'umd',
		libraryExport: 'default',
		umdNamedDefine: true    // 是否将模块名称作为 AMD 输出的命名空间

	},
	// devtool:'#eval-source-map',//设置source map选项
	// optimization: {
	// 	splitChunks: {
	// 		chunks: 'all' // initial(初始块)、async(按需加载块)、all(全部块)
	// 	}
	// },
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					// loaders: {
					// 	less: {
					// 		loader: ['vue-style-loader', 'less-loader'],
					// 		options:{
					// 			sourceMap: false
					// 		}
					// 	}
					// },
					esModule: true
				}
			},
			{
				test: /\.css$/,
				use: ['vue-style-loader', 'css-loader']
			},{
				test: /\.js$/,
				loader: 'babel-loader',
				include: [resolve('src'), resolve('test')]
				// options: {
				// 	plugins: [
				// 		'add-module-exports',
				// 	],
				// }
			},
			{
				test: /\.less$/,
				loader: 'vue-style-loader!css-loader!postcss-loader!less-loader'
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader'
				// options: {
				// 	limit: 10000,
				// 	name: utils.assetsPath('img/[name].[hash:7].[ext]')
				// }
			}
		]
	},
	plugins: [
		new Webpack.BannerPlugin({banner: '北京鹏润美美科技有限公司'}),
		// new VueLoaderPlugin(),
		new CleanWebpackPlugin()//运行前删除dist目录
	]
};