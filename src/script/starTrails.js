require('../style/style.css')
var echarts = require('echarts')
var myChart = echarts.init(document.getElementById('main'));

let w = document.getElementById('main').offsetWidth
let h = document.getElementById('main').offsetHeight

let getColor = function() {
    let color = ['#dadc21', '#b4d0e1', '#9fa085', '#304635', '#323b4a', '#285473', '#9ac2dd', '#0263bb', '#abb8bf', '#daecfc', '#0f7fbd', '#bacbcc', '#738792', '#008bea', '#ccc', '#ccc', '#ccc', '#fff', '#fff', '#fff']
    return color[Math.random() * color.length | 0]
}

let getNodes = function() {
    let deg = 10; // 角度
    let p = Math.PI * 2 / 360;
    let r;
    let x1, y1, x2, y2;

    x1 = w * (Math.random() - .6);
    y1 = h * (Math.random() - .7);
    r = Math.sqrt(x1 * x1 + y1 * y1)


    let a, b;
    if(x1 > 0 && y1 > 0) {
        a = 1;
        b = 1;
    }
    if(x1 < 0 && y1 < 0) {
        a = -1;
        b = -1;
    }
    if(x1 > 0 && y1 < 0) {
        a = -1;
        b = 1;
    }
    if(x1 < 0 && y1 > 0) {
        a = 1;
        b = -1;
    }

    x2 = Math.cos((Math.acos(x1 / r) / p + a * deg) * p) * r
    y2 = Math.sin((Math.asin(y1 / r) / p + b * deg) * p) * r

    if(x2 < w * .4 && x2 > -1 * w * .6 && y2 < h * .3 && y2 > -1 * h * .7) {
        return {
            x1: x1,
            y1: y1,
            x2: x2,
            y2: y2,
        }
    } else {
        return getNodes()
    }
}


option = {
    grid: {
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
    },
    backgroundColor: new echarts.graphic.RadialGradient(0.6, 0.7, 1, [{
        offset: 0,
        color: '#061734'
    }, {
        offset: 1,
        color: '#030b19'
    }], false),
    xAxis: [{
        boundaryGap: false,
        data: new Array(10),
        splitLine: {
            show: false
        }
    }],
    yAxis: [
        {
            min: 0,
            max: 10,
            type: 'value',
            splitLine: {
                show: false
            }

        }
    ],
    series: [
        {
            type: 'graph',
            width: w,
            height: h,
            data: [
                {
                    symbolSize: 1,
                    x: -240,
                    y: -140
                },
                {
                    symbolSize: 1,
                    x: 160,
                    y: 60
                },
                {
                    name: 'center',
                    symbolSize: 1,
                    x: 0,
                    y: 0
                },

            ],
            links: [],
            lineStyle: {
                curveness: 0.055,
            }

        },
        {
            type: 'line',
            areaStyle: {
                normal: {
                    color: '#000',
                    opacity: 1
                }
            },
            data: (() => {
                let arr = []
                for(let i = 0; i < 10; i++) {
                    arr.push(Math.random() * 2 + 1)
                }
                arr[0] = 0;
                arr[1] = 1;
                arr[9] = 1;
                arr[6] = 3;
                return arr;
            })(),

            symbolSize: 0,
            lineStyle: {
                normal: {
                    width: 0
                }
            },
            animationDelayUpdate: function(idx) {
                return idx * 5;
            }
        },
    ]
};

for(let i = 0; i < 500; i++) {

    let {x1, y1, x2, y2} = getNodes()

    option.series[0].data.push({
        name: 'source' + i,
        symbolSize: Math.random() > .7 ? 1 : 0,
        x: x1,
        y: y1,
        itemStyle: {
            color: getColor(),
            opacity: Math.random(),
        }
    })
    option.series[0].data.push({
        name: 'target' + i,
        symbolSize: Math.random() > .7 ? 1 : 0,
        x: x2,
        y: y2,
        itemStyle: {
            color: getColor(),
            opacity: Math.random(),
        }
    })
    option.series[0].links.push({
        source: 'source' + i,
        target: 'target' + i,
        lineStyle: {
            opacity: Math.random() / 2,
            color: getColor(),
            width: Math.random() + .5
        }
    })

    option.series[0].data.push({
        symbolSize: Math.random() * 3,
        x: w * (Math.random() - .6),
        y: h * (Math.random() - .7),
        itemStyle: {
            color: getColor(),
            opacity: Math.random() / 3,
        }
    })
}
myChart.setOption(option);