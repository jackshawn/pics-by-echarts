require('../style/style.css')
var echarts = require('echarts')
require('echarts-gl');
var myChart = echarts.init(document.getElementById('main'));
var node = []

for (var i = 0; i < 10; i++) {
	node[i] = {
		type: 'line3D',
		data: []
	}
	for (var j = 0; j < 100; j++) {
		node[i].data[j] = new Array(3)
		node[i].data[j][0] = i
		node[i].data[j][1] = j
		node[i].data[j][2] = (Math.cos(j/2)/2+5);
	}

}

myChart.setOption({
	grid3D: {},
	xAxis3D: {},
	yAxis3D: {},
	zAxis3D: {},
	series: node
})