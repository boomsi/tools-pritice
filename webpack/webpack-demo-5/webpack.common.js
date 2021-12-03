const webpack = require('webpack')
const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   entry: {
     app: './src/index.js',
   },
   plugins: [
     new HtmlWebpackPlugin({
       title: 'Production',
     }),
	new webpack.DefinePlugin({
		 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
	})
   ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
 };

