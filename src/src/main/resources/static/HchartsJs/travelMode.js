// var chart = Highcharts.chart('travelMode', {
// 	chart: {
// 		type: 'pie',
// 		options3d: {
// 			enabled: true,
// 			alpha: 45,
// 			beta: 0
// 		}
// 	},
// 	colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00',
// 			 '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
// 	title: {
// 		text: '游客出行方式统计'
// 	},
// 	tooltip: {
// 		pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
// 	},
// 	plotOptions: {
// 		pie: {
// 			allowPointSelect: true,
// 			cursor: 'pointer',
// 			depth: 35,
// 			dataLabels: {
// 				enabled: true,
// 				format: '{point.name}<b>{point.percentage:.1f}%</b>',
//                 style: {     fontSize:"16px" }
//             },
// 		}
// 	},
// 	series: [{
// 		type: 'pie',
// 		name: '占比',
// 		data: [
//             {
//                 name: '飞机',
//                 y: 45.0,
//                 sliced:true,
//                 selected: true
//             },
// 			['火车',       26.8],
// 			{
// 				name: '汽车',
// 				y: 12.8,
// 				sliced: true,
// 				selected: true
// 			},
// 			['自驾',    8.5],
// 			['其它',     6.9]
// 		]
// 	}],
//     credits: {
//     enabled:false
//     }
// });
$(function () {
    $(document).ready(function () {
        //异步请求数据
        $.ajax({
            type:"GET",
            url:'ways/getWay',
            dataType:'json',
            success:function (data) {
                var dafaultMenuItem = Highcharts.getOptions().exporting.buttons.contextButton.menuItems;
                var chart = Highcharts.chart('travelMode', {
                    chart: {
                        type: 'pie',
                        options3d: {
                            enabled: true,
                            alpha: 45,
                            beta: 0
                        }
                    },
                    colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00',
                        '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
                    title: {
                        text: '游客出行方式统计'
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
                                            window.location.href= '/exportWays';
                                        }
                                    },

                                ]
                            }
                        }
                    },
                    tooltip: {
                        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            depth: 35,
                            dataLabels: {
                                enabled: true,
                                format: '{point.name}<b>{point.percentage:.1f}%</b>',
                                style: {     fontSize:"16px" }
                            },
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: '占比',
                        data: data
                    }],
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