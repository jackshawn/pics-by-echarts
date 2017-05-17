var myChart = require('./common')

var cup = 'E';//A-E
option = {
	series: [
		{
			type: 'graph',
			data: [
				//background box
				{
					x: 0,
					y: 0,
					name: 'top-left'
				},
				{
					
					x: 200,
					y: 0,
					name: 'top-right'
				},
				{
					
					x: 200,
					y: 200,
					name: 'bottom-right'
				},
				{
					
					x: 0,
					y: 200,
					name: 'bottom-left'
				},
				//mouth
				{
					x: 34,
					y: 0,
					name: '1'
				},
				{
					x: 40,
					y: 25,
					name: '2'
				},
				{
					x: 65,
					y: 30,
					name: '3'
				},
				{
					x: 5,
					y: 60,
					name: '4'
				},
				{
					x: 10,
					y: 63,
					name: '5'
				},
				{
					
					x: 47,
					y: 60,
					name: '6'
				},
				{
					x: 33,
					y: 45,
					name: '7'
				},
				{
					x: 80,
					y: 80,
					name: '8'
				},
				{
					x: 105,
					y: 105,
					name: '9'
				},
				{
					x: 100,
					y: 120,
					name: '10'
				},
				{
					x: 80,
					y: 110,
					name: '11'
				},
				{
					x: 52,
					y: 87,
					name: '12'
				},
				{
					x: 34,
					y: 100,
					name: '13'
				},
				{
					x: 50,
					y: 140,
					name: '14'
				},
				{
					x: 45,
					y: 200,
					name: '15'
				},
				{
					x: 60,
					y: 137,
					name: '16'
				},
				{
					x: 60,
					y: 120,
					name: '17'
				},
				{
					x: 75,
					y: 157,
					name: '18'
				},
				{
					x: 55,
					y: 63,
					name: '19'
				},
				{
					x: 48,
					y: 22,
					name: '20'
				}
			].concat((function () {
				// (.)
				var l;
				switch (cup) {
					case 'A':
						l = 45;
						break;
					case 'B':
						l = 35;
						break;
					case 'C':
						l = 25;
						break;
					case 'D':
						l = 15;
						break;
					default:
						l = 0;
				}
				return [
					{
						x: 115 + l,
						y: 120,
						name: '21'
					},
					{
						x: 180,
						y: 200,
						name: '22'
					},
					{
						x: 135 + l,
						y: 86,
						name: '23'
					},
					{
						x: 200,
						y: 35,
						name: '24'
					},
					{
						x: 128 + l,
						y: 90,
						name: '25'
					},
					{
						x: 115 + l,
						y: 105,
						name: '26'
					}
				];
			})()),
			links: [
				//box line
				{
					source: 'top-left',
					target: 'top-right'
				},
				{
					source: 'top-right',
					target: 'bottom-right'
				},
				{
					source: 'bottom-right',
					target: 'bottom-left'
				},
				{
					source: 'bottom-left',
					target: 'top-left'
				},
				//mouth
				{
					source: '1',
					target: '20',
					lineStyle: {
						normal: {
							curveness: -0.2
						}
					}
				},
				{
					source: '2',
					target: '3',
					lineStyle: {
						normal: {
							curveness: 0.4
						}
					}
				},
				{
					source: '4',
					target: '2'
				},
				{
					source: '6',
					target: '7',
					lineStyle: {
						normal: {
							curveness: -1.25
						}
					}
				},
				{
					source: '5',
					target: '7'
				},
				{
					source: '5',
					target: '8',
					lineStyle: {
						normal: {
							curveness: 0.3
						}
					}
				},
				{
					source: '8',
					target: '9',
					lineStyle: {
						normal: {
							curveness: -0.05
						}
					}
				},
				{
					source: '9',
					target: '10',
					lineStyle: {
						normal: {
							curveness: 1
						}
					}
				},
				{
					source: '11',
					target: '10',
					lineStyle: {
						normal: {
							curveness: -0.1
						}
					}
				},
				{
					source: '11',
					target: '12',
					lineStyle: {
						normal: {
							curveness: -0.1
						}
					}
				},
				{
					source: '4',
					target: '12',
					lineStyle: {
						normal: {
							curveness: -0.1
						}
					}
				},
				{
					source: '11',
					target: '17',
					lineStyle: {
						normal: {
							curveness: 0.5
						}
					}
				},
				{
					source: '11',
					target: '14',
					lineStyle: {
						normal: {
							curveness: 0.25
						}
					}
				},
				{
					source: '16',
					target: '18',
					lineStyle: {
						normal: {
							curveness: 0.1
						}
					}
				},
				{
					source: '15',
					target: '18',
					lineStyle: {
						normal: {
							curveness: -0.22
						}
					}
				},
				{
					source: '17',
					target: '13',
					lineStyle: {
						normal: {
							curveness: 0.1
						}
					}
				},
				{
					source: '4',
					target: '13',
					lineStyle: {
						normal: {
							curveness: -0.1
						}
					}
				},
				{
					source: '3',
					target: '19',
					lineStyle: {
						normal: {
							curveness: 0.35
						}
					}
				},
				//(.)
				{
					source: '21',
					target: '22',
					lineStyle: {
						normal: {
							curveness: -0.35
						}
					}
				},
				{
					source: '25',
					target: '24',
					lineStyle: {
						normal: {
							curveness: -0.025
						}
					}
				},
				{
					source: '21',
					target: '23',
					lineStyle: {
						normal: {
							curveness: -0.25
						}
					}
				},
				{
					source: '21',
					target: '25',
					lineStyle: {
						normal: {
							curveness: 0.35
						}
					}
				},
				{
					source: '26',
					target: '25',
					lineStyle: {
						normal: {
							curveness: 0.75
						}
					}
				}
			],
			lineStyle: {
				normal: {
					width: 2,
					curveness: 0,
					color: '#333'
				}
			},
			itemStyle: {
				normal: {
					color: '#555'
				}
			},
			silent: true,
			symbolSize: 0
		}
	]
};
myChart.setOption(option);