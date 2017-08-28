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
				loaders: ['style-loader', 'css-loader', 'sass-loader', 'file-loader']
			},
			{
				test: /\.jsx?$/,
				loaders: ['babel-loader']
			},
      {
        test: /\.(gif|png|jpe?g|svg|webp)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader'
        ]
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
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


