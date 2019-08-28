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

module.exports = {
	mode: 'production',
	entry: {
		index: './src/index.js'
	},
	output: {
		filename: 'form-design.min.js',
		path: pathJoin(__dirname, '../dist'),
		library: 'form-design',
		libraryTarget: 'umd',
		libraryExport: 'default',
		umdNamedDefine: true    // 是否将模块名称作为 AMD 输出的命名空间

	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					esModule: true
				}
			},
			{
				test: /\.css$/,
				use: ['vue-style-loader', 'css-loader']
			},{
				test: /\.js$/,
				loader: 'babel-loader',
				// options: {
				// 	presets: ['es2015']
				// },
				include: [resolve('src'), resolve('test')]
			},
			{
				test: /\.less$/,
				loader: 'vue-style-loader!css-loader!postcss-loader!less-loader'
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader'
			}
		]
	},
	plugins: [
		new Webpack.BannerPlugin({banner: '北京鹏润美美科技有限公司'}),
		new CleanWebpackPlugin()//运行前删除dist目录
	]
};