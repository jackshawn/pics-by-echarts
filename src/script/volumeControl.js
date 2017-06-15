var myChart = require('./common')
var icon = 'path://M22.485 25.985c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 4.094-4.094 4.094-10.755 0-14.849-0.586-0.586-0.586-1.536 0-2.121s1.536-0.586 2.121 0c2.55 2.55 3.954 5.94 3.954 9.546s-1.404 6.996-3.954 9.546c-0.293 0.293-0.677 0.439-1.061 0.439v0zM17.157 23.157c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 2.534-2.534 2.534-6.658 0-9.192-0.586-0.586-0.586-1.536 0-2.121s1.535-0.586 2.121 0c3.704 3.704 3.704 9.731 0 13.435-0.293 0.293-0.677 0.439-1.061 0.439zM13 30c-0.26 0-0.516-0.102-0.707-0.293l-7.707-7.707h-3.586c-0.552 0-1-0.448-1-1v-10c0-0.552 0.448-1 1-1h3.586l7.707-7.707c0.286-0.286 0.716-0.372 1.090-0.217s0.617 0.519 0.617 0.924v26c0 0.404-0.244 0.769-0.617 0.924-0.124 0.051-0.254 0.076-0.383 0.076z'
var up, down;
var option = {
	title: {
		text: '最糟糕音量控制大赛冠军作品',
		left: 'center',
		top: 20
	},
	xAxis: [{
			data: ['']
		}, {
			data: ['']
		}, {
			data: ['']
		}
	],
	yAxis: [{
			max: 50
		}, {
			max: 50
		}, {
			max: 50
		}
	],
	grid: {
		bottom: '20%'
	},
	series: [
		{
			type: 'pictorialBar',
			symbol: icon,
			symbolSize: 25,
			symbolOffset: [0,40],
			xAxisIndex: 0,
			yAxisIndex: 0,
			data: [0.1],
			z: -10,
			itemStyle:{
				normal: {
					color: '#808080'
				}
			}
		},
		{
			type: 'bar',
			barMaxWidth: 25,
			itemStyle: {
				normal: {
					color: '#a9a9a9'
				}
			},
			xAxisIndex: 0,
			yAxisIndex: 0,
			data: [12],
			silent: false
		},
		{
			type: 'bar',
			barMaxWidth: 13,
			label: {
				normal: {
					show: true,
					position: 'top',
					formatter: function () {
						return option.series[3].data[0].value.toFixed(1) * 10
					}
				}
			},
			itemStyle: {
				normal: {
					color: '#d3d3d3'
				}
			},
			xAxisIndex: 1,
			yAxisIndex: 1,
			data: [10],
			animationDelay: 600,
			silent: false
		},
		{
			type: 'bar',
			barMaxWidth: 13,
			stack: true,
			xAxisIndex: 2,
			yAxisIndex: 2,
			data: [
				{
					value: 10,
					itemStyle: {
						normal: {
							color: '#21dc22'
						}
					}
				},
				{
					value: .3,
					itemStyle: {
						normal: {
							color: '#a9a9a9'
						}
					}
				}
			],
			animationDelay: 1200
		}
	],
	graphic: {
		type: 'polyline',
		left: 'center',
		top: 'center',
		z: -100,
		shape: {
			points: [[0, 0], [0, 10], [20, 10], [20, 75], [25, 75], [25, 10], [45, 10], [45, 0], [0, 0]],
			smooth: 0
		},
		style: {
			fill: '#808080',
			stroke: '#a5a5a5'
		},
		draggable: true,
		ondrag: function (p) {
			var barY = myChart.convertFromPixel({seriesIndex: 1}, [p.event.offsetX, p.event.offsetY])[1]
			
			if (barY < 17.5 && barY > 13.25) {
				option.graphic.left = 'center'
				option.graphic.top = p.event.offsetY
			} else {
				option.graphic.draggable = false
			}
			if(barY>17){
				up = true;
				down = false;
			}
			if(barY<14){
				down = true;
			}
			if(up&&down){
				if(option.series[3].data[0].value<9.5){
					option.series[3].data[0].value += .5;
				}else{
					option.series[3].data[0].value = 10;
				}
				up = false;
				down = false;
			}
			myChart.setOption(option);
		},
		ondragend: function () {
			option.graphic.draggable = true
			myChart.setOption(option);
		}
	}
};

myChart.setOption(option);
setTimeout(function () {
	option.series[1].silent = true;
	option.series[2].silent = true;
	option.graphic.top = myChart.convertToPixel('grid', [0, 14])[1]
	myChart.setOption(option);
	setInterval(function () {
		if(option.series[3].data[0].value> .1){
			option.series[3].data[0].value -= .1
		}else{
			option.series[3].data[0].value = 0
		}
		myChart.setOption(option);
	},200)
}, 2000)
