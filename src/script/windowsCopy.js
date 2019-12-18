import myChart from './common';

let total = 1000;
let index = 0;
let speed = 30;

let option = {
    title: {
        text: '',
        top: '25%',
        left: '5%',
    },
    toolbox: {
        feature: {
            saveAsImage: {
                icon: 'path://M870.4 0C788.7872 0 716.8 50.9952 716.8 109.4656V914.432C716.8 973.0048 788.7872 1024 870.4 1024S1024 973.0048 1024 914.5344V109.568C1023.0784 50.9952 952.0128 0 870.4 0z m-716.8 0C71.9872 0 0 50.9952 0 109.4656V914.432C0 973.0048 71.9872 1024 153.6 1024S307.2 973.0048 307.2 914.5344V109.568C307.2 50.9952 235.2128 0 153.6 0z',

            },
            restore: {
                icon: 'path://M846.005097 957.24155c-28.587082 0-57.174164-10.911514-78.996169-32.733519L96.632851 254.131955c-43.644009-43.644009-43.644009-114.348328 0-157.992337s114.348328-43.644009 157.992337 0L925.001265 766.515694c43.644009 43.644009 43.644009 114.348328 0 157.992337C903.17926 946.330036 874.592179 957.24155 846.005097 957.24155zM175.62902 957.24155c-28.587082 0-57.174164-10.911514-78.996169-32.733519-43.644009-43.644009-43.644009-114.348328 0-157.992337L767.008928 96.139617c43.644009-43.644009 114.348328-43.644009 157.992337 0s43.644009 114.348328 0 157.992337L254.625188 924.508032C232.803183 946.330036 204.216101 957.24155 175.62902 957.24155z'
            },
        },
        itemSize: 12,
        itemGap: 100,
        iconStyle: {
            color: '#666'
        },
        top: '26%',
        right: '5%',
    },
    grid: {
        top: '30%',
        left: '5%',
        right: '5%',
        bottom: '30%',
    },

    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: new Array(total),
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        },
        splitLine: {
            show: true,
            interval(index, value) {
                return index % 100 == 0 || index == 999
            }
        },
        axisLabel: {
            show: false,
        },
        axisTick: {
            show: false,
        },
    },
    yAxis: {
        type: 'value',
        axisPointer: {
            show: true,
            type: 'line',
            label: {
                show: true,
                fontWeight: 'bold',
                padding: [0, 0, 40, window.document.body.offsetWidth * .75],
                fontSize: 16,
                color: '#000',
                backgroundColor: 'transparent',
                formatter: '速度: {value} MB/秒'
            },
            lineStyle: {
                width: 2,
                color: '#000'
            },
            status: 'show',
            value: 0,
            triggerOn: 'none'
        },

        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        },
        splitLine: {
            show: true,
        },
        axisLabel: {
            show: false,
        },
        axisTick: {
            show: false,
        },
    },
    series: [
        {
            type: 'line',
            symbol: 'none',
            lineStyle: {
                width: 0
            },
            areaStyle: {
                color: '#31af23',
            },
            data: []
        },
        {
            type: 'line',
            symbol: 'none',
            lineStyle: {
                width: 0
            },
            areaStyle: {
                color: '#a7e490',
                origin: 'end',
            },
            data: []
        },

    ]
};


function copy() {
    let timer = setTimeout(() => {
        speed += (Math.random() < .3 ? ((Math.random() < .55) && (speed > 10) ? -1 : 1) * (Math.random() < .1 ? (Math.random() * 10) : Math.random()) : 0);
        option.title.text = `已完成${(index / total * 100) | 0}%`;
        option.series[0].data.push(speed);
        option.series[1].data.push(speed);
        option.yAxis.axisPointer.value = speed;
        myChart.setOption(option);

        if(index == total) {
            clearInterval(timer)
        } else {
            copy()
        }
        index++;
    }, total / speed)
}
copy();