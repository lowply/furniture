const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = [
	// es6 compile
	{
		entry: [
			'./src/main.js',
		],
		output: {
			path: path.join(__dirname, 'static', 'assets'),
			filename: 'main.js',
		},
		module: {
			loaders: [
				{
					loader: 'babel-loader',
					exclude: /node_modules/,
					test: /\.js$/,
					query: {
						cacheDirectory: true,
						presets: ['es2015']
					}
				},
			]
		},
	},
	// sass compile
	{
		entry: [
			'./src/main.sass',
		],
		output: {
			path: path.join(__dirname, 'static', 'assets'),
			filename: 'main.css',
		},
		module: {
			loaders: [
				{
 					test: /\.sass$/,
					loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
				}
			]
		},
		plugins: [
			new ExtractTextPlugin("main.css")
		],
		devtool: 'source-map',
	},
];
