require('../style/style.css')
var echarts = require('echarts')
require('echarts-gl');
var myChart = echarts.init(document.getElementById('main'));

var build = function (y,z) {
	var arr = []
	for(var i = -50;i<100;i++){
		arr.push([i,y,Math.random()*z+5])
	}
	return arr;
}
var star = function () {
	var arr = []
	for(var i = -50;i < 100;i++){
		arr.push([i,6,Math.random()*50+15])
	}
	return arr
}
var option = {
	grid3D: {
		environment: '#1b2933',
		boxWidth: 350,
		boxDepth: 25,
		viewControl: {
			alpha: -15,
			beta: -20,
			center: [0,45,0]
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
		data: new Array(50)
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
		data: new Array(6)
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
	series: [
		//buildings
		{
			type: 'bar3D',
			data: build(0,3),
			itemStyle: {
				color: '#3e464c',
				opacity: .7
			}
		},
		{
			type: 'bar3D',
			data: build(2,7),
			itemStyle: {
				color: '#363e44'
			}
		},
		{
			type: 'bar3D',
			data: build(4,10),
			itemStyle: {
				color: '#24313a'
			}
		},
		{
			type: 'bar3D',
			data: build(6,15),
			itemStyle: {
				color: '#1c1f2f'
			}
		},
		{
			type: 'bar3D',
			data: build(8,15),
			itemStyle: {
				color: '#1c1f2f'
			}
		},
		//stars
		{
			type: 'scatter3D',
			data: star(),
			symbolSize: 3,
			itemStyle: {
				color: '#eee'
			}
		},
		{
			type: 'scatter3D',
			data: star(),
			symbolSize: 1.5,
			itemStyle: {
				color: '#fff'
			}
		},
		//moon
		{
			type: 'scatter3D',
			data: [[45,8,35]],
			symbolSize: 90,
			itemStyle: {
				color: '#fff',
				opacity: 1
			}
		},
		{
			type: 'scatter3D',
			data: [[44,7,35]],
			symbolSize: 85,
			itemStyle: {
				color: '#1b2933',
				opacity: 1
			}
		}
	]
};
myChart.setOption(option)