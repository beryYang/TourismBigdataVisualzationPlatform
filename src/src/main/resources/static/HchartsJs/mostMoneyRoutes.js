Highcharts.setOptions({
    lang: {
        rangeSelectorZoom: ''
    }
});
$.getJSON('HchartsJs/data/000001.json', function (data){
    if(data.code !== 1) {
        alert('读取数据失败！');
        return false;
    }
    data = data.data;
    var ohlc = [],
        volume = [],
        dataLength = data.length,
        // set the allowed units for data grouping
        groupingUnits = [[
            'week',                         // unit name
            [1]                             // allowed multiples
        ], [
            'month',
            [1, 2, 3, 4, 6]
        ]],
        i = 0;
    for (i; i < dataLength; i += 1) {
        ohlc.push([
            data[i][0], // the date
            data[i][1], // open
            data[i][2], // high
            data[i][3], // low
            data[i][4] // close
        ]);
        volume.push([
            data[i][0], // the date
            data[i][5] // the volume
        ]);
    }
    // create the chart
    var chart = Highcharts.stockChart('container', {
        rangeSelector: {
            selected: 1,
            inputDateFormat: '%Y-%m-%d'
        },
        title: {
            text: '旅游路线历史盈利'
        },
        xAxis: {
            dateTimeLabelFormats: {
                millisecond: '%H:%M:%S.%L',
                second: '%H:%M:%S',
                minute: '%H:%M',
                hour: '%H:%M',
                day: '%m-%d',
                week: '%m-%d',
                month: '%y-%m',
                year: '%Y'
            }
        },
        tooltip: {
            split: false,
            shared: true,
        },
        yAxis: [{
            labels: {
                align: 'right',
                x: -3
            },
            title: {
                text: '盈利'
            },
            height: '65%',
            resize: {
                enabled: true
            },
            lineWidth: 2
        }, {
            labels: {
                align: 'right',
                x: -3
            },
            title: {
                text: '成交量'
            },
            top: '65%',
            height: '35%',
            offset: 0,
            lineWidth: 2
        }],
        series: [{
            type: 'candlestick',
            name: '旅游路线',
            color: 'green',
            lineColor: 'green',
            upColor: 'red',
            upLineColor: 'red',
            tooltip: {
            },
            navigatorOptions: {
                color: Highcharts.getOptions().colors[0]
            },
            data: ohlc,
            dataGrouping: {
                units: groupingUnits
            },
            id: 'sz'
        },{
            type: 'column',
            data: volume,
            yAxis: 1,
            dataGrouping: {
                units: groupingUnits
            }
        }]
    });
});