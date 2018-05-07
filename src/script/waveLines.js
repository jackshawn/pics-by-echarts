var myChart = require('./common')

var data0 = [];
var data1 = [];
var data2 = [];
var data3 = [];
for (var i = 0; i < 100; i++) {
	data0.push((Math.cos(i/3)*.05)+4.2);
	data1.push((Math.sin(i/3)*.15)+4);
	data2.push((Math.cos(i/4)*.5)+3.5);
	data3.push((Math.sin(i/5)*.8)+3);
}
var option = {
	grid: {
		top: '0',
		left: '0',
		right: '0',
		bottom: '0'
	},
	backgroundColor:'#466f8a',
	xAxis: {
		data: [],
		boundaryGap: false
	},
	yAxis: {
		splitLine: {
			show: false
		},
		max: 10
	},
	series: [
		{
			type: 'line',
			data: data0,
			symbolSize: 0,
			lineStyle:{
				normal:{
					width: 1,
					color: '#677c90'
				}
			}
		},
		{
			type: 'line',
			data: data1,
			symbolSize: 0,
			animationDelay:100,
			lineStyle:{
				normal:{
					width: 1,
					color: '#abb9c7'
				}
			}
		},
		{
			type: 'line',
			data: data2,
			symbolSize: 0,
			animationDelay:200,
			lineStyle:{
				normal:{
					width: 2,
					color: '#99a6b3'
				}
			}
		},
		{
			type: 'line',
			data: data3,
			symbolSize: 0,
			animationDelay:400,
			lineStyle:{
				normal:{
					width: 3,
					color: '#fff'
				}
			}
		}

	],
	animationDuration: 2000
};
myChart.setOption(option);
