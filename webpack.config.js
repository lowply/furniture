const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = [
	// es6 compile
	{
		entry: [
			'./src/main.jsx',
		],
		output: {
			path: path.join(__dirname, 'static', 'assets'),
			filename: 'main.js',
		},
		module: {
			loaders: [
				{
					test: /\.jsx$/,
					loader: 'babel-loader',
					exclude: /node_modules/,
					query: {
						cacheDirectory: true,
						presets: ['es2015', 'react']
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
				},
				{
 					test: /\.css$/,
					loader: ExtractTextPlugin.extract("style-loader", "css-loader")
				},
				{
					test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)?$/,
					loader: 'url-loader'
				},
			]
		},
		plugins: [
			new ExtractTextPlugin("main.css")
		],
		devtool: 'source-map',
	},
];
