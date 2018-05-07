var myChart = require('./common')

var r = function(max) {
	var m = max || 10;
	return Math.floor(Math.random() * m);
};
var moonAndStars = {
	type: 'graph',
	data: (function() {
		var moonPosition = {
			x: r(150) + 25,
			y: r(50)
		}
		var moon = [{
			symbolSize: 80,
			x: moonPosition.x,
			y: moonPosition.y
		}, {
			symbolSize: 70,
			x: moonPosition.x - 1.5,
			y: moonPosition.y - 1.5,
			itemStyle: {
				normal: {
					color: 'rgb(27, 41, 51)'
				}
			}
		}, {
			symbolSize: 0,
			x: 0,
			y: 0
		}, {
			symbolSize: 0,
			x: 200,
			y: 100
		}];
		var num = 60;
		var stars = [];
		for (var i = 0; i < num; i++) {
			stars.push({
				symbolSize: r(3),
				x: r(200),
				y: r(50)
			})
		}
		return moon.concat(stars);
	})(),
	itemStyle: {
		normal: {
			color: '#ccc'
		}
	},
	silent: true,
	z: -1
};
var roofs = [
	[1, 2, 3, 4, 5, 4, 3, 2, 1],
	[2, 2, 2, 4, 4, 4, 2, 2, 2],
	[2, 2, 2, 4, 20, 4, 2, 2, 2],
	[10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
	[6, 6, 6, 6, 6, 5, 4, 3, 2, 1],
	[0.3, 1, 1.6, 2.5, 3, 3.5, 3.6, 3.7, 3.7, 3.6, 3.5, 3, 2.5, 1.6, 1, 0.3],
	[6, 6, 6, 6, 6, 2, 2, 2],
	[6, 5.5, 5, 4.5, 4, 3.5, 3, 2.5, 2, 1.5],
	[1, 1, 1, 1, 1, 1.5, 2, 2.5, 3, 3.5, 4],
	[1, 1, 1, 1, 1, 1, 1],
	[4, 4, 4, 2, 2, 2, 4, 4, 4]

];
var build = function(height) {
	var arr = [100];
	var l = 14;
	var h = height || 50;
	var addFloor = function(arr, l) {
		var a = [];
		for (var i = 0; i < arr.length; i++) {
			a.push(arr[i] + l);
		}
		return a;
	};
	for (var i = 0; i < l; i++) {
		var newRoof = addFloor(roofs[r(11)], r(h));
		if (Math.random() < .5) {
			newRoof.reverse()
		}
		arr = arr.concat(newRoof);
		if (Math.random() < .5) {
			arr.push(0)
		}
	}
	return arr;
};
var building = build();
var building2 = (function() {
	var b = build(100);
	for (var i = 0; i < b.length; i++) {
		if (b[i] > building[i]) {
			b[i] = b[i] - building[i];
		}
		
	}
	return b;
})()

var option = {
	grid: {
		left: -10,
		right: '0',
		bottom: '0',
		top: '0'
	},
	backgroundColor:'rgb(27, 41, 51)',
	stack: true,
	xAxis: {
		data: [],
		silent: false,
		splitLine: {
			show: false
		}
	},
	yAxis: {
		splitLine: {
			show: false
		},
		max: 200
	},
	series: [
		moonAndStars,
		{
			type: 'bar',
			data: building,
			itemStyle: {
				normal: {
					color: 'rgb(36, 49, 58)'
				}
			},
			animationDelay: function (idx) {
				return idx * 10;
			}
		},
		{
			type: 'bar',
			data: building2,
			itemStyle: {
				normal: {
					color: 'rgb(28, 31, 47)'
				}
			},
			animationDelay: function (idx) {
				return idx * 10 + 400;
			}
		},
		{
			coordinateSystem:'cartesian2d',
			type: 'lines',
			zlevel: -20,
			effect: {
				show: true,
				period: 1,
				trailLength: 0.05,
				symbolSize: Math.random()*2+1,
				symbol: 'diamond',
				loop: false
			},
			lineStyle: {
				normal: {
					color: '#ccc',
					opacity: 0,
					curveness: -0.05
				}
			},
			data:[
				{
					coords: [[r(50)+100,r(50)+150], [r(20)+10,r(50)+50]]
				}
			],
			animationDelay:1100
		}
	],
	animationEasing: 'elasticOut',
	animationDelayUpdate: function (idx) {
		return idx * 5;
	}
};
myChart.setOption(option);
setInterval(function () {
	option.series[3].effect.symbolSize = Math.random()*2+1;
	option.series[3].data.push({
		coords: [[r(50)+100,r(50)+150], [r(20)+10,r(50)+50]]
	});
	myChart.setOption(option);
},10000)