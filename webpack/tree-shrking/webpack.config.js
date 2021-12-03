const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: "[name].[contenthash].js",
			clean: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'test'
		})
	],
	optimization: {
		usedExports: true
	}
}
