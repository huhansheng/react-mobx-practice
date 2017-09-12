const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		index: './src/index.js',
		common: [
			"mobx",
			"mobx-react",
			"react",
			"react-dom",
			"react-router"
		]
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[hash].js'
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
			    exclude: /node_modules/,
			    use: {
			      loader: 'babel-loader',
			      options: {
			        plugins: ['transform-runtime']
			      }
			    }
			},
			{
				test: /\.(less|css)$/,
				use: ExtractTextPlugin.extract([ 'css-loader', 'less-loader' ])
			}
		]
	},
	devServer: {
		hot: true,
		port: 8080,
		contentBase: './dist',
        proxy: {
            '/api/*': {
                target: 'http://localhost:3004',
                changeOrigin: true,
                secure: false
            }
        },
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		//new CleanWebpackPlugin('dist'),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common',
		}),
		new ExtractTextPlugin({
			filename: 'app.[hash].css'
		}),
		new HtmlWebpackPlugin({
			template: './src/index.ejs'
		}),
	]
}