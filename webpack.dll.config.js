const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
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
        publicPath: 'dist/',
        filename: '[name].[chunkhash].js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist/common.*.js']),
        new webpack.DllPlugin({
            path: 'manifest.json',
            name: '[name]_[chunkhash]',
            context: __dirname,
        })
    ]
}