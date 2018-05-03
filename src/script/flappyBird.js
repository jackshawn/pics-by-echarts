var myChart = require('./common')

var bird = 'image://https://raw.githubusercontent.com/jackshawn/pics-by-echarts/master/img/bird.png';

var option = {
	title: {
		text: '按空格键进行游戏',
		left: 'center',
		textStyle: {
			color: '#fff'
		},
		z: 9
	},
	grid: {
		left: 0,
		right: 0,
		bottom: 0,
		top: 0
	},
	xAxis: [
		{
			data: [],
			show: false
		},
		{
			data: [],
			show: false
		},
		{
			data: [],
			show: false
		},
		{
			data: [],
			boundaryGap: false,
			show: false
		},
		{
			data: [],
			show: false
		}
	
	],
	yAxis: [
		{
			splitLine: false,
			max: 0,
			min: -100
		},
		{
			splitLine: false,
			max: 100
		},
		{
			splitLine: false,
			max: 100
		},
		{
			splitLine: false,
			max: 50
		},
		{
			splitLine: false,
			max: 50
		}
	],
	series: [
		{
			name: 'bird',
			type: 'pictorialBar',
			symbolPosition: 'end',
			data: (function () {
				var arr = new Array(200).fill(0)
				arr[50] = {
					value: 50,
					symbol: bird,
					symbolSize: 50,
					symbolOffset: ['-75%', '-50%']
				}
				return arr
			})(),
			xAxisIndex: 2,
			yAxisIndex: 2,
			zlevel: 2,
			animationDelay: function (idx) {
				return idx + 2000
			}
		},
		{
			name: 'topBar',
			type: 'bar',
			data: new Array(200),
			xAxisIndex: 0,
			yAxisIndex: 0,
			animation: true,
			z: 5
		},
		{
			name: 'bottomBar',
			type: 'bar',
			data: new Array(200),
			xAxisIndex: 1,
			yAxisIndex: 1,
			animation: true,
			z: 5
		},
		{
			name: 'cloudsBottom',
			type: 'line',
			data: [15, 15],
			xAxisIndex: 3,
			yAxisIndex: 3,
			animation: true,
			showSymbol: false,
			areaStyle: {
				normal: {
					color: '#fff',
					opacity: 1
				}
			},
			lineStyle: {
				normal: {
					color: '#fff'
				}
			},
			animationDelay: 700,
			animationDuration: 1550
		},
		{
			name: 'clouds',
			type: 'graph',
			xAxisIndex: 3,
			yAxisIndex: 3,
			data: (function () {
				var arr = [
					{
						x: 0,
						y: 0,
						symbolSize: 0
					},
					{
						x: 150,
						y: 100,
						symbolSize: 0
					}
				]
				for (var i = 0; i < 15; i++) {
					arr.push({
						x: i * 10,
						y: 70,
						symbolSize: 100 + 75 * Math.random()
					})
				}
				return arr;
			})(),
			itemStyle: {
				normal: {
					color: '#fff',
					borderWidth: 0
				}
			},
			silent: true,
			left: -100,
			right: -100,
			bottom: 0,
			top: 0,
			animation: true,
			animationDelay: function (idx) {
				return idx * 100 + 500
			}
		},
		{
			name: 'buildings',
			step: 'middle',
			type: 'line',
			data: (function () {
				var arr = [];
				for (var i = 0; i < 100; i++) {
					arr.push(10 + 5 * Math.random())
				}
				return arr
			})(),
			lineStyle: {
				normal: {
					color: '#bcd1c0'
				}
			},
			areaStyle: {
				normal: {
					color: '#c7e6c7',
					opacity: 1
				}
			},
			symbolSize: 0,
			xAxisIndex: 4,
			yAxisIndex: 4,
			animation: true,
			z: 3,
			animationDelay: 800,
			animationDuration: 1500
		},
		{
			name: 'bushesBottom',
			type: 'line',
			data: [5, 5],
			xAxisIndex: 3,
			yAxisIndex: 3,
			animation: true,
			showSymbol: false,
			lineStyle: {
				normal: {
					color: '#87e189',
					opacity: 1
				}
			},
			areaStyle: {
				normal: {
					color: '#87e189',
					opacity: 1
				}
			},
			z: 4,
			animationDelay: 300
		},
		{
			name: 'bushes',
			type: 'graph',
			xAxisIndex: 3,
			yAxisIndex: 3,
			data: (function () {
				var arr = [
					{
						x: 0,
						y: 0,
						symbolSize: 0
					},
					{
						x: 150,
						y: 100,
						symbolSize: 0
					}
				]
				for (var i = 0; i < 15; i++) {
					arr.push({
						x: i * 10,
						y: 90,
						symbolSize: 100 + 75 * Math.random()
					})
				}
				return arr;
			})(),
			itemStyle: {
				normal: {
					color: '#87e189',
					borderWidth: 0
				}
			},
			silent: true,
			left: -100,
			right: -100,
			bottom: 0,
			top: 0,
			z: 4,
			animation: true,
			animationDelay: function (idx) {
				return idx * 100
			}
		},
		{
			name: 'ground',
			type: 'line',
			data: [1, 1],
			xAxisIndex: 3,
			yAxisIndex: 3,
			animation: true,
			showSymbol: false,
			areaStyle: {
				normal: {
					color: '#ddd58c',
					opacity: 1
				}
			},
			lineStyle: {
				normal: {
					color: '#72881c'
				}
			},
			z: 5
		}
	],
	silent: true,
	backgroundColor: '#71c5cf'
};

myChart.setOption(option);
document.onkeydown = function (event) {
	if (event && event.keyCode == 32) {
		var fallSpeed = 2,
			m = 0,
			score = 0,
			time = 0,
			best = localStorage.getItem('bestScore') || 0,
			t,
			clear = function () {
				clearInterval(t)
				if (score > best) {
					localStorage.setItem('bestScore', score);
				}
				document.onkeydown = ''
			}
		for (var i = 1; i < option.series.length; i++) {
			option.series[i].animation = false;
		}
		t = setInterval(function () {
			option.title.text = '得分 : ' + score + ' ; 时间 : ' + (time / 1000).toFixed(2) + 's ; 最高得分 : ' + best;
			
			if (option.series[0].data[50].value > 0) {
				
				var l = Math.random() * 80;
				//bar
				option.series[1].data.shift()
				option.series[2].data.shift()
				if (m % 50 == 0) {
					var topBarLength = -l,
						bottomBarLength = 80 - l,
						barColor = '#77a138'
					option.series[1].data.push({
						value: topBarLength,
						itemStyle: {
							normal: {
								color: barColor,
								borderWidth: 40,
								borderColor: barColor
							}
						}
					})
					option.series[2].data.push({
						value: bottomBarLength,
						itemStyle: {
							normal: {
								color: barColor,
								borderWidth: 40,
								borderColor: barColor
							}
						}
					})
				} else {
					option.series[1].data.push(0)
					option.series[2].data.push(0)
				}
				
				// clouds
				if (option.series[4].data[option.series[4].data.length - 1].x < 140) {
					option.series[4].data.push({
						x: 150,
						y: 70,
						symbolSize: 100 + 75 * Math.random()
					})
				}
				for (var i = 3; i < option.series[4].data.length; i++) {
					if (option.series[4].data[i].x > 0) {
						option.series[4].data[i].x -= .05;
					}
				}
				
				// buildings
				if (m % 20 == 0) {
					option.series[5].data.shift();
					option.series[5].data.push(10 + 5 * Math.random());
				}
				
				// bushes
				if (option.series[7].data[option.series[7].data.length - 1].x < 140) {
					option.series[7].data.push({
						x: 150,
						y: 90,
						symbolSize: 100 + 75 * Math.random()
					})
				}
				for (var i = 3; i < option.series[7].data.length; i++) {
					if (option.series[7].data[i].x > 0) {
						option.series[7].data[i].x -= .2;
					}
				}
				myChart.setOption(option);
				fallSpeed += 0.25;
				option.series[0].data[50].value -= fallSpeed
				if(fallSpeed == 2.25){
					option.series[0].data[50].symbolRotate = 0;
				}else{
					option.series[0].data[50].symbolRotate -= fallSpeed
				}
				//death
				if (option.series[2].data[50] && option.series[2].data[50].value > 0) {
					var d = option.series[0].data[50].value - option.series[2].data[50].value
					if (d > 0 && d < 10) {
						score += 10;
					} else {
						clear()
					}
				}
			} else {
				clear()
			}
			m++;
			time += 125
		}, 125)
		document.onkeydown = function (event) {
			if (event && event.keyCode == 32 && option.series[0].data[50].value > 0 && option.series[0].data[50].value < 90) {
				option.series[0].data[50].value += 15;
				option.series[0].data[50].symbolRotate = 45;
				fallSpeed = 2;
			}
		}
	}
}