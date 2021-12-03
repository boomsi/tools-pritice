const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.[hash].js',
    path: path.resolve(__dirname, 'dist'),
	clean: true
  },
 mode: 'production',
 optimization: {
//   usedExports: true,
	runtimeChunk: 'single'
 },
};
