var myChart = require('./common')
var lightnings = function() {
    let lightningArr = []
    let line = (function() {
        let position = Math.random() * 30 + 10
        return function() {
            return (Math.random() - .5) * 5 + position
        }
    })()
    for(let i = 0; i < 5; i++) {
        lightningArr.push({
            type: 'line',
            xAxisIndex: 2,
            yAxisIndex: 2,
            symbolSize: 0,
            lineStyle: {
                normal: {
                    color: '#fff',
                    width: .5 + Math.random(),
                    opacity: 1
                }
            },
            data: new Array(4),
            animation: true,
            animationDuration: 1000
        })
    }
    lightningArr[0].lineStyle.normal.width = 3
    lightningArr[0].z = 3

    let randomNum = Math.random()
    if(randomNum > .66) {
        // 向右
        for(let i = 0; i < 16; i++) {
            if(i === 15) {
                let fir = line()
                lightningArr.forEach(function(item) {
                    item.data.push(fir)
                })
            }
            if(i === 14) {
                let sec = line() + 2.5
                lightningArr.forEach(function(item) {
                    item.data.push(sec)
                })
            }
            if(i > 6 && i < 14) {
                lightningArr[0].data.push(line() + (16 - i))
                lightningArr[1].data.push(line() + (16 - i))
                lightningArr[2].data.push(line() + (16 - i))
                lightningArr[3].data.push(line() + (16 - i))
                lightningArr[4].data.push(line() + (16 - i))
            }
            if(i <= 6) {
                lightningArr[0].data.push(line() + (16 - i) * .8);
                lightningArr[1].data.push(line() + (16 - i) * .3)
                lightningArr[2].data.push(line() + (16 - i) * .4)
                lightningArr[3].data.push(line() + (16 - i) * 1.1)
                lightningArr[4].data.push(line() + (16 - i) * 1.2)
            }
        }
        console.log('right')
    }
    if(randomNum < .33) {
        // 向左
        for(let i = 0; i < 16; i++) {
            if(i === 15) {
                let fir = line()
                lightningArr.forEach(function(item) {
                    item.data.push(fir)
                })
            }
            if(i === 14) {
                let sec = line() - 2.5
                lightningArr.forEach(function(item) {
                    item.data.push(sec)
                })
            }
            if(i > 6 && i < 14) {
                lightningArr[0].data.push(line() + (i - 16))
                lightningArr[1].data.push(line() + (i - 16))
                lightningArr[2].data.push(line() + (i - 16))
                lightningArr[3].data.push(line() + (i - 16))
                lightningArr[4].data.push(line() + (i - 16))
            }
            if(i <= 6) {
                lightningArr[0].data.push(line() + (i - 16) * .8);
                lightningArr[1].data.push(line() + (i - 16) * .4)
                lightningArr[2].data.push(line() + (i - 16) * .3)
                lightningArr[3].data.push(line() + (i - 16) * 1.1)
                lightningArr[4].data.push(line() + (i - 16) * 1.2)
            }
        }
        console.log('left')
    }
    if(randomNum >= .33 && randomNum <= .66) {
        // 中间
        for(let i = 0; i < 16; i++) {
            if(i > 13) {
                let fir = line()
                lightningArr.forEach(function(item) {
                    item.data.push(fir)
                })
            } else {
                lightningArr[0].data.push(line());
                lightningArr[1].data.push(line() - (16 - i) * .2)
                lightningArr[2].data.push(line() - (16 - i) * .4)
                lightningArr[3].data.push(line() + (16 - i) * .2)
                lightningArr[4].data.push(line() + (16 - i) * .4)
            }
        }
        console.log('center')
    }

    return lightningArr
}
var rain = function() {
    var arr = [];
    for(let i = 0; i < 150; i++) {
        arr.push([100 * Math.random(), 100 * Math.random()])
    }
    return arr
}
var option = {
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
            boundaryGap: false,
            show: false
        },
        {
            splitLine: false,
            max: 50
        },
        {
            splitLine: false
        },
    ],
    yAxis: [
        {
            splitLine: false,
            max: 50
        },
        {
            splitLine: false,
            max: 50
        },
        {
            splitLine: false,
            show: false,
            data: new Array(20)
        },
        {
            splitLine: false,
            show: false
        },
    ],
    series: [
        {
            name: 'buildings',
            step: 'middle',
            type: 'line',
            data: (function() {
                let arr = [];
                for(let i = 0; i < 40; i++) {
                    arr.push(10 + 10 * Math.random())
                }
                return arr
            })(),
            lineStyle: {
                normal: {
                    width: 0
                }
            },
            areaStyle: {
                normal: {
                    color: '#1c1f2f',
                    opacity: .8
                }
            },
            symbolSize: 0,
            animation: true,
            z: 3,
            animationDelay: 800,
            animationDuration: 1500,
        },
        {
            name: 'clouds',
            type: 'graph',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: [
                {
                    x: 0,
                    y: 0,
                    symbolSize: 0
                },
                {
                    x: 200,
                    y: 100,
                    symbolSize: 0
                },

                {
                    x: 0,
                    y: 0,
                    symbolSize: 300
                },
                {
                    x: 25,
                    y: 0,
                    symbolSize: 300
                },
                {
                    x: 50,
                    y: 0,
                    symbolSize: 300
                },
                {
                    x: 75,
                    y: 0,
                    symbolSize: 300
                },
                {
                    x: 100,
                    y: 0,
                    symbolSize: 300
                },
                {
                    x: 125,
                    y: 0,
                    symbolSize: 300
                },
                {
                    x: 150,
                    y: 0,
                    symbolSize: 300
                },
                {
                    x: 175,
                    y: 0,
                    symbolSize: 300
                },
                {
                    x: 200,
                    y: 0,
                    symbolSize: 300
                },
            ],
            itemStyle: {
                normal: {
                    color: '#24313a',
                    borderWidth: 0,
                    opacity: .5
                }
            },
            silent: true,
            left: -100,
            right: -100,
            bottom: 0,
            top: -100,
            animation: true,
            z: 4
        },
        {
            name: 'clouds',
            type: 'graph',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: [
                {
                    x: 0,
                    y: 0,
                    symbolSize: 0
                },
                {
                    x: 200,
                    y: 100,
                    symbolSize: 0
                },

                {
                    x: 20,
                    y: 0,
                    symbolSize: 450
                },
                {
                    x: 60,
                    y: 0,
                    symbolSize: 500
                },
                {
                    x: 100,
                    y: 0,
                    symbolSize: 450
                },
                {
                    x: 140,
                    y: 0,
                    symbolSize: 500
                },
                {
                    x: 180,
                    y: 0,
                    symbolSize: 450
                },

            ],
            itemStyle: {
                normal: {
                    color: '#24313a',
                    borderWidth: 0,
                    opacity: .5
                }
            },
            silent: true,
            left: -200,
            right: -200,
            bottom: 0,
            top: -100,
            animation: true,
            z: 4
        },
        {
            name: 'rain',
            type: 'scatter',
            symbolSize: [20, 2],
            symbolRotate: 60,
            xAxisIndex: 3,
            yAxisIndex: 3,
            data: rain(),
            z: 5,
            symbol: 'roundRect'
        }
    ],
    backgroundColor: '#1b2933'
};

myChart.setOption(option)

var n = 1;
var offset = -10;
setInterval(function() {
    // 100 * 50 = 5s 闪电每5s一次
    if(n % 50 === 0) {
        option.series = option.series.concat(lightnings());
        // option.yAxis.push()
        option.series[0].areaStyle.normal.color = '#3c444a';
        option.backgroundColor = '#1d2d38';
        myChart.setOption(option)

        // 1s后消失
        setTimeout(function() {
            option.series[0].areaStyle.normal.color = '#1c1f2f'
            option.backgroundColor = '#1b2933'
            option.series.forEach(function(item, index) {
                if(index > 3) {
                    item.lineStyle.normal.opacity = 0
                }
            })
            myChart.setOption(option);
        }, 1000)
    }

    if(n % 60 === 0) {
        offset = -offset;
    }

    if(n % 2 === 0) {
        // 云彩移动
        option.series[1].left += offset;
        option.series[1].right -= offset;

        option.series[2].left -= offset;
        option.series[2].right += offset;

        // 下雨
        option.series[3].data = rain()

        myChart.setOption(option);
    }
    n++
}, 100)