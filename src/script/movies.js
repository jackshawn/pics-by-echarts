var myChart = require('./common')
var ajax = function (option) {
	var request = new XMLHttpRequest();
	request.open(option.type||'GET', option.url);
	request.send();
	request.onreadystatechange = function() {
		if (request.readyState===4) {
			if (request.status===200) {
				var data = JSON.parse(request.responseText);
				if (data) {
					option.callback(data)
				}
			} else {
				console.log('发生错误：' + request.status);
			}
		}
	}
}
myChart.showLoading();

var setData = (function() {
	var option = {
		title: {
			text: '最近上映电影',
			left: '50%',
			textAlign: 'center'
		},
		grid: {
			left: 0,
			right: 20,
			bottom: 100,
			top: 30
		},
		tooltip: {
			formatter: function(params) {
				if (params.componentSubType == 'pictorialBar') {
					return '电影：' + params.name + '</br> 豆瓣评分：' + (params.value * 1 + 10).toFixed(1);
				}
			}
		},
		xAxis: {
			data: []
		},
		yAxis: {
			splitLine: {
				show: false
			},
			axisLine: {
				show: false
			}
		},
		series: [{
			type: 'bar',
			barWidth: 1,
			data: [],
			animationDelay: function(idx) {
				return idx * 100;
			}
		}, {
			type: 'pictorialBar',
			symbolPosition: 'end',
			symbolRotate: 165,
			symbolOffset: ['20%', '100%'],
			data: [],
			animationDelay: function(idx) {
				return idx * 100 + 500;
			}
		}, {
			type: 'graph',
			data: [{
				x: 0,
				y: 0,
				symbolSize: 0
			}, {
				name: 'btn',
				x: 0,
				y: 10,
				symbolSize: 30
			}],
			itemStyle: {
				normal: {
					color: 'transparent',
					borderWidth: 1,
					borderColor: '#555'
				}
			}
		}]
	};
	var mark = 1;
	return function() {
		var pics = [];
		var d = JSON.parse(localStorage.getItem('data'));
		for (var i = 0; i < d.subjects.length; i++) {
			pics.push({
				value: ((d.subjects[i].rating.average || 0.1) - 10).toFixed(1),
				symbol: 'image://' + d.subjects[i].images.small,
				symbolSize: ['48.75', '75'],
				name: d.subjects[i].title
			})
		}
		if (mark % 2 == 0) {
			pics.sort(function(a, b) {
				return (mark / 2 | 0) % 2 == 0 ? (b.value - a.value) : (a.value - b.value)
			})
		}
		option.series[0].data = pics;
		option.series[1].data = pics;
		myChart.hideLoading();
		myChart.setOption(option);
		mark++;
	}
})();
if (localStorage.getItem('data')) {
	setData();
} else {
	ajax({
		type: "GET",
		url: "http://api.douban.com/v2/movie/in_theaters",
		callback: function(d) {
			localStorage.data = JSON.stringify(d);
			setData();
		}
	});
}
myChart.on('click', function(params) {
	if (params.name == 'btn') {
		setData();
	}
})