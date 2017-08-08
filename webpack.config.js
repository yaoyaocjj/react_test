// 用于拼接路径
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	// 指定项目入口
	entry: './app/index',

	// 对输出结果描述
	output: {
		// 输出路径
		path: path.join(__dirname, './build'),
		// 输出的文件名
		filename: 'bundle.js'
	},

	// 配置模块使用的加载器
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loaders: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.jsx?$/,
				loaders: ['babel-loader']
			}]
	},

		plugins: [
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, 'index.html')
			})
		],

		// 添加devServer字段,其中字段变动比较大，配置时需要根据文档进行配置
		devServer: {
			historyApiFallback: true,
			inline: true,
			contentBase:'./build/',
			port:'8081'
		}
}

