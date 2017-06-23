var myChart = require('./common')
require('echarts-gl');
var echarts = require('echarts')

var build = function (y, z) {
	var arr = []
	for (var i = -100; i < 100; i++) {
		arr.push([i, y, Math.random() * z])
	}
	return arr;
}
var star = function () {
	var arr = []
	for (var i = -50; i < 50; i++) {
		arr.push([i, 6, Math.random() * 50 + 15])
	}
	return arr
}
var option = {
	
	grid3D: {
		environment: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
			offset: 0, color: '#00aaff' // 天空颜色
		}, {
			offset: 0.7, color: '#998866' // 地面颜色
		}, {
			offset: 1, color: '#998866' // 地面颜色
		}], false),
		boxWidth: 200,
		boxDepth: 200,
		viewControl: {
			// alpha: -15,
			beta: -20,
			center: [0,-100,100]
		}
	},
	xAxis3D: {
		name: '',
		show: false,
		splitLine: {
			show: false
		},
		axisLabel: {
			show: false
		},
		axisTick: {
			show: false
		},
		axisLine: {
			lineStyle: {
				opacity: 0
			}
		},
		data: new Array(20)
	},
	yAxis3D: {
		name: '',
		show: false,
		splitLine: {
			show: false
		},
		axisLabel: {
			show: false
		},
		axisTick: {
			show: false
		},
		axisLine: {
			lineStyle: {
				opacity: 0
			}
		},
		data: new Array(20)
	},
	zAxis3D: {
		name: '',
		show: false,
		splitLine: {
			show: false
		},
		axisLabel: {
			show: false
		},
		axisTick: {
			show: false
		},
		axisLine: {
			lineStyle: {
				opacity: 0
			}
		},
		max: 20
	},
	series: (function () {
		var arr = [];
		for (var i = 0; i < 50; i++) {
			arr.push({
				type: 'bar3D',
				data: build(i * 2, 20),
				itemStyle: {
					color: '#3e464c',
					opacity: 1
				},
				shading: 'realistic'
			})
			
		}
		return arr;
	})()
};
myChart.setOption(option)