
    // var chart = Highcharts.chart('monthlyVisits', {
    //         chart: {
    //         type: 'line'
    //         },
    //         title: {
    //         // text: '每月访问量'
    //         },
    //         subtitle: {
    //         // text: '数据来源: gxu.edu.cn'
    //         },
    //         xAxis: {
    //         categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
    //         },
    //         yAxis: {
    //         title: {
    //             text: '访问人数 (千人)'
    //         },
    //         plotLines: [{
    //             value: 0,
    //             width: 1,
    //             color: '#808080'
    //         }]
    //         },
    //         legend: {
    //             layout: 'horizontal',
    //             align: 'center',
    //             verticalAlign: 'bottom',
    //             // borderWidth: 0
    //         },
    //         plotOptions: {
    //             series: {
    //                 allowPointSelect: true,
    //                 // color:'red',
    //                 // lineWidth:4,
    //             }
    //         },
    //         tooltip: {
    //             xDateFormat: '%Y-%m-%d',
    //             shared: true,
    //                 valuePrefix: '',
    //                 valueSuffix: ' 千人次',
    //             // useHTML: true,
    //             // headerFormat: '<small>{point.key}</small><table>',
    //             // pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
    //             // '<td style="text-align: right"><b>{point.y} 千人次</b></td></tr>',
    //             // footerFormat: '</table>',
    //             style: {                      // 文字内容相关样式
    //                 // color: "#ff0000",
    //                 fontSize: "15px",
    //                 fontWeight: "blod",
    //                 fontFamily: "Courir new"
    //             }
    //         },
    //         series: [
    //             {
    //             name: '2018年',
    //             data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2,
    //                 26.5, 23.3, 18.3, 13.9, 9.6]
    //             },
    //             {
    //             name: '2017年',
    //             data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8,
    //                 24.1, 20.1, 14.1, 8.6, 2.5]
    //             },
    //             {
    //             name: '2016年',
    //             data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6,
    //                 17.9, 14.3, 9.0, 3.9, 1.0]
    //             },
    //             {
    //             name: '2015年',
    //             data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0,
    //                 16.6, 14.2, 10.3, 6.6, 4.8]
    //             }
    //         ],
    //         credits: {
    //         enabled:false
    //         }
    //         });
    $(function () {
        $(document).ready(function () {
            //异步请求数据
            $.ajax({
                type:"GET",
                url:'accessRecord/getAccessCount',
                dataType:'json',
                success:function (data) {
                    var dafaultMenuItem = Highcharts.getOptions().exporting.buttons.contextButton.menuItems;
                    var chart = Highcharts.chart('monthlyVisits', {
                        chart: {
                            type: 'line'
                        },
                        title: {
                            // text: '每月访问量'
                        },
                        exporting: {
                            buttons: {
                                contextButton: {
                                    // 自定义导出菜单项目及顺序
                                    menuItems: [
                                        dafaultMenuItem[0],
                                        dafaultMenuItem[1],
                                        dafaultMenuItem[3],
                                        dafaultMenuItem[5],
                                        {
                                            text: '下载 PDF 文件',
                                            onclick: function() {
                                                this.exportChart({
                                                    type: 'application/pdf'
                                                });
                                            }
                                        },
                                        {
                                            text: '导出excel',
                                            onclick: function() {
                                                window.location.href= '/exportAccessRecord';
                                            }
                                        },

                                    ]
                                }
                            }
                        },
                        subtitle: {
                            // text: '数据来源: gxu.edu.cn'
                        },
                        xAxis: {
                            categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
                        },
                        yAxis: {
                            title: {
                                text: '访问人数 (千人)'
                            },
                            plotLines: [{
                                value: 0,
                                width: 1,
                                color: '#808080'
                            }]
                        },
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom',
                            // borderWidth: 0
                        },
                        plotOptions: {
                            series: {
                                allowPointSelect: true,
                                // color:'red',
                                // lineWidth:4,
                            }
                        },
                        tooltip: {
                            xDateFormat: '%Y-%m-%d',
                            shared: true,
                            valuePrefix: '',
                            valueSuffix: ' 千人次',
                            // useHTML: true,
                            // headerFormat: '<small>{point.key}</small><table>',
                            // pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
                            // '<td style="text-align: right"><b>{point.y} 千人次</b></td></tr>',
                            // footerFormat: '</table>',
                            style: {                      // 文字内容相关样式
                                // color: "#ff0000",
                                fontSize: "15px",
                                fontWeight: "blod",
                                fontFamily: "Courir new"
                            }
                        },
                        series: [
                            {
                                name: '2018年',
                                data: data[2]
                            },
                            {
                                name: '2017年',
                                data: data[1]
                            },
                            {
                                name: '2016年',
                                data: data[0]
                            }
                        ],
                        credits: {
                            enabled:false
                        }
                    });
                },
                error:function(e){
                    // alert(e);
                }
            });
        })
    })