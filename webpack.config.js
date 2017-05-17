var path = require('path')
var webpack = require('webpack')
var htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	entry: {
		cityNight: './src/script/cityNight.js',
		river: './src/script/river.js',
		suck: './src/script/suck.js',
		lowPolyAnimals: './src/script/lowPolyAnimals.js',
		pyramid: './src/script/pyramid.js',
		movies: './src/script/movies.js',
		rocket: './src/script/rocket.js',
		flappyBird: './src/script/flappyBird.js',
		echarts: 'echarts'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].js'
	},
	plugins: [
		new htmlWebpackPlugin({
			template: 'index.html',
			filename: 'index.html',
			inject: false
		}),
		new htmlWebpackPlugin({
			template: 'template.html',
			filename: 'html/cityNight.html',
			chunks: ['manifest','echarts','cityNight']
		}),
		new htmlWebpackPlugin({
			template: 'template.html',
			filename: 'html/river.html',
			chunks: ['manifest','echarts','river']
		}),
		new htmlWebpackPlugin({
			template: 'template.html',
			filename: 'html/suck.html',
			chunks: ['manifest','echarts','suck']
		}),
		new htmlWebpackPlugin({
			template: 'template.html',
			filename: 'html/lowPolyAnimals.html',
			chunks: ['manifest','echarts','lowPolyAnimals']
		}),
		new htmlWebpackPlugin({
			template: 'template.html',
			filename: 'html/pyramid.html',
			chunks: ['manifest','echarts','pyramid']
		}),
		new htmlWebpackPlugin({
			template: 'template.html',
			filename: 'html/movies.html',
			chunks: ['manifest','echarts','movies']
		}),
		new htmlWebpackPlugin({
			template: 'template.html',
			filename: 'html/rocket.html',
			chunks: ['manifest','echarts','rocket']
		}),
		new htmlWebpackPlugin({
			template: 'template.html',
			filename: 'html/flappyBird.html',
			chunks: ['manifest','echarts','flappyBird']
		}),
		new webpack.optimize.CommonsChunkPlugin({
			names: ['echarts', 'manifest']
		})
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader"
					}
				]
			}
		]
	},
	devServer: {
		port: 8080
	}
}