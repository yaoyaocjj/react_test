let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index',
	output: {
		path: path.join(__dirname, '/build'),
		filename: 'bundle.js'
	},

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

		devServer: {
			historyApiFallback: true,
			inline: true,
			contentBase:'./build/',
			port:'8081'
		}
};


