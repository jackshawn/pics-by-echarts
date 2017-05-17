webpackJsonp([3],{

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

var myChart = __webpack_require__(8)

option = {
	legend: {
		orient: 'vertical',
		left: 'left',
		data: ['天空', '金字塔亮的一面', '金字塔暗的一面']
	},
	series: [{
		type: 'pie',
		data: [{
			value: 270,
			name: '天空'
		}, {
			value: 25,
			name: '金字塔暗的一面',
			itemStyle: {
				normal: {
					color: '#5C3926'
				}
			}
		}, {
			value: 65,
			name: '金字塔亮的一面',
			itemStyle: {
				normal: {
					color: '#D3A359'
				}
			}
		}],
		startAngle: -135,
		itemStyle: {
			normal: {
				color: '#425E8D'
			}
		},
		labelLine: {
			normal: {
				show: false
			}
		},
		label: {
			normal: {
				show: false
			}
		},
		silent: true
	}]
};

myChart.setOption(option);

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(26)
var echarts = __webpack_require__(21)
var myChart = echarts.init(document.getElementById('main'));

module.exports = myChart

/***/ })

},[434]);