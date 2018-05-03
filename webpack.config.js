var path = require('path')
var webpack = require('webpack')
var htmlWebpackPlugin = require('html-webpack-plugin')
var fs = require('fs')
var join = require('path').join

// 获取js文件名
var findSync = function(startPath) {
    let result = [];
    let files = fs.readdirSync(startPath);
    files.forEach((val, index) => {
        let fPath = join(startPath, val);
        let stats = fs.statSync(fPath);
        if(stats.isFile() && val !== 'common.js') {
            result.push(val.substr(0, val.length - 3));
        }
    });
    return result;
}
let pages = findSync('src/script/');

module.exports = {
	entry: (function() {
		var result = {
			echarts: 'echarts'
		}
		pages.forEach(function(i) {
			result[i] = './src/script/' + i + '.js'
        })
		return result
    })(),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].js'
	},
    plugins: (function() {
		var result = [
            new htmlWebpackPlugin({
                template: 'index.html',
                filename: 'index.html',
                inject: false
            }),
            new webpack.optimize.CommonsChunkPlugin({
                names: ['echarts', 'manifest']
            })
		]
        pages.forEach(function(i) {
            result.push(new htmlWebpackPlugin({
                template: 'template.html',
                filename: 'html/' + i + '.html',
                chunks: ['manifest','echarts', i]
            }))
        })
        return result
    })(),
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
		port: 8080,
		disableHostCheck: true,
		open: true
	}
}