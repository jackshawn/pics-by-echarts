var myChart = require('./common')
var rocket = 'path://M-244.396,44.399c0,0,0.47-2.931-2.427-6.512c2.819-8.221,3.21-15.709,3.21-15.709s5.795,1.383,5.795,7.325C-237.818,39.679-244.396,44.399-244.396,44.399z M-260.371,40.827c0,0-3.881-12.946-3.881-18.319c0-2.416,0.262-4.566,0.669-6.517h17.684c0.411,1.952,0.675,4.104,0.675,6.519c0,5.291-3.87,18.317-3.87,18.317H-260.371z M-254.745,18.951c-1.99,0-3.603,1.676-3.603,3.744c0,2.068,1.612,3.744,3.603,3.744c1.988,0,3.602-1.676,3.602-3.744S-252.757,18.951-254.745,18.951z M-255.521,2.228v-5.098h1.402v4.969c1.603,1.213,5.941,5.069,7.901,12.5h-17.05C-261.373,7.373-257.245,3.558-255.521,2.228zM-265.07,44.399c0,0-6.577-4.721-6.577-14.896c0-5.942,5.794-7.325,5.794-7.325s0.393,7.488,3.211,15.708C-265.539,41.469-265.07,44.399-265.07,44.399z M-252.36,45.15l-1.176-1.22L-254.789,48l-1.487-4.069l-1.019,2.116l-1.488-3.826h8.067L-252.36,45.15z';
var option = {
	grid: {
		left: 0,
		right: 0,
		bottom: 0,
		top: 0
	},
	radar: {
		center: ['12.5%', '47.5%'],
		radius: '20%',
		indicator: [
			{max: 10, name: 'N'},
			{max: 10},
			{max: 10},
			{max: 10, name: 'W'},
			{max: 10},
			{max: 10},
			{max: 10, name: 'S'},
			{max: 10},
			{max: 10},
			{max: 10, name: 'E'},
			{max: 10},
			{max: 10}
		],
		name: {
			textStyle: {
				color:'#333'
			}
		}
	},
	series: [
		//rocket
		{
			type: 'graph',
			data: [
				{
					x: 0,
					y: 100,
					symbol: rocket,
					symbolSize: [180, 300],
					symbolOffset: [50, -0],
					symbolRotate: -45
				},
				{
					x: 0,
					y: 0,
					symbolSize: 0
				},
				{
					x: 100,
					y: 100,
					symbolSize: 0
				}
			],
			bottom: 0,
			top: 0
		},
		//cloud
		{
			type: 'graph',
			data: [
				{
					x: 0,
					y: 0,
					symbolSize: 0
				},
				{
					x: 100,
					y: 100,
					symbolSize: 0
				}
			],
			itemStyle: {
				normal: {
					shadowBlur: 50,
					shadowColor: '#fff'
				}
			},
			bottom: 0,
			top: 0,
			right: 0,
			left: 0
		},
		//hidden pie
		{
			type: 'pie',
			radius: '10%',
			center: ['12.5%', '10%'],
			data: [
				{value: 1, name: 'rocket head'},
				{value: 1, name: 'rocket right wing'},
				{value: 1, name: 'rocket ass'},
				{value: 1, name: 'left wing'},
				{value: 1, name: 'rocket neck'}
			],
			itemStyle: {
				normal: {
					opacity: 0
				}
			}
		},
		//line
		{
			type: 'line',
			data: [4],
			itemStyle: {
				normal: {
					opacity: 0
				}
			}
		},
		{
			type: 'line',
			data: []
		},
		{
			type: 'line',
			data: []
		},
		{
			type: 'line',
			data: []
		},
		// bar
		{
			type: 'bar'
		},
		{
			type: 'bar'
		},
		{
			type: 'bar'
		},
		{
			type: 'bar'
		},
		//logo
		{
			type: 'pictorialBar',
			symbolPosition: 'end',
			data: [
				{
					value: 0
				},
				{
					value: 0
				},
				{
					value: 3.9,
					symbol: rocket,
					symbolSize: [85, 110],
					itemStyle: {
						normal: {
							color: '#666'
						}
					},
					symbolRotate: -10
				}
			]
		},
		{
			type: 'radar',
			symbolSize: 5,
			data: [
				{
					value: [3]
				}
			],
			itemStyle: {
				normal: {
					shadowBlur: 10
				}
			}
		},
		{
			type: 'gauge',
			center: ['10%', '72.5%'],
			radius: '20%',
			axisLine: {
				lineStyle: {
					width: 5
				}
			},
			axisTick: {
				length: 5
			},
			splitLine: {
				length: 10,
				lineStyle: {
					color: 'auto'
				}
			},
			detail: {
				textStyle: {
					fontSize: 24
				}
			},
			pointer: {
				width: 5
			},
			data: [{value: 0}]
		},
		{
			type: 'gauge',
			center: ['20%', '74%'],
			startAngle: 120,
			radius: '12.5%',
			max: 10,
			axisLine: {
				lineStyle: {
					width: 4
				}
			},
			axisLabel: {
				show: false
			},
			axisTick: {
				show: false,
				length: 4
			},
			splitLine: {
				length: 4
			},
			pointer: {
				width: 2
			},
			detail: {
				textStyle: {
					fontSize: 16
				}
			},
			data: [{value: 0}]
		}
	],
	xAxis: {
		data: new Array(20)
	},
	yAxis: {
		splitLine: {
			show: false
		}
	},
	silent: true,
	backgroundColor: 'rgba(52, 195, 231, 0.44)'
};
myChart.setOption(option);
var m = 1;
var before;
var t = function () {
	var position = Math.random() * 50 + 50;
	setTimeout(function () {
		option.series[0].data[0].symbolOffset[0]++;
		option.series[13].data[0].value = (95 + Math.random() * 5).toFixed(1);
		option.series[14].data[0].value = (9 + Math.random()).toFixed(1);
		myChart.setOption(option);
		setTimeout(function () {
			option.series[0].data[0].symbolOffset[0]--;
			option.series[0].data[0].symbolOffset[1]--;
			option.series[13].data[0].value = (95 + Math.random() * 5).toFixed(1);
			option.series[14].data[0].value = (9 + Math.random()).toFixed(1);
			myChart.setOption(option);
			setTimeout(function () {
				option.series[0].data[0].symbolOffset[1]++;
				myChart.setOption(option);
				if (m % 2 == 0) {
					if (((m / 2) | 0) % 2 == 0) {
						option.series[1].data[3].x = 100 - before;
						option.series[1].data[3].y = 100;
						option.series[1].data[3].symbolOffset = [-100, 100];
						option.series[1].data[3].itemStyle.normal.opacity = 0.5;
						
						//radar
						option.series[12].symbolSize = 3
						option.series[12].itemStyle.normal.shadowBlur = 5
						
					} else {
						option.series[1].data[2].x = 0;
						option.series[1].data[2].y = before;
						option.series[1].data[2].symbolOffset = [-100, 100];
						option.series[1].data[2].itemStyle.normal.opacity = 0.5;
						
						//line
						option.series[4].data = []
						option.series[5].data = []
						option.series[6].data = []
						for (var i = 0; i < 5; i++) {
							option.series[4].data.push(2.75 + Math.random() / 4)
							option.series[5].data.push(2.75 + Math.random() / 4)
							option.series[6].data.push(2.75 + Math.random() / 4)
						}
						
						//radar
						option.series[12].symbolSize = 5
						option.series[12].itemStyle.normal.shadowBlur = 10
					}
				} else {
					if (((m / 2) | 0) % 2 == 0) {
						option.series[1].data[2] = {
							x: position,
							y: 0,
							symbolSize: [200, 150],
							symbolRotate: -30,
							itemStyle: {
								normal: {
									color: '#fff',
									opacity: 0
								}
							}
						}
					} else {
						option.series[1].data[3] = {
							x: 100,
							y: 100 - position,
							symbolSize: [200, 150],
							symbolRotate: -30,
							itemStyle: {
								normal: {
									color: '#fff',
									opacity: 0
								}
							}
						}
						//bar
						option.series[7].data = [0]
						option.series[8].data = []
						option.series[9].data = []
						option.series[10].data = []
						for (var i = 0; i < 4; i++) {
							option.series[7].data.push(Math.random() * .6)
							option.series[8].data.push(Math.random() * .6)
							option.series[9].data.push(Math.random() * .6)
							option.series[10].data.push(Math.random() * .6)
						}
					}
					before = position;
				}
				m++
				t();
			}, 50)
		}, 50)
	}, 100)
}
setTimeout(function () {
	//shot
	option.series[0].data[0].x = 50;
	option.series[0].data[0].y = 50;
	myChart.setOption(option);
	//shake
	t()
}, 1000)