$(function () {
    $(document).ready(function () {
        $.ajax({
            type:'GET',
            url:'userJson/getUserAge',
            dateType:'json',
            success:function (data) {
                var dafaultMenuItem = Highcharts.getOptions().exporting.buttons.contextButton.menuItems;
                var chart = Highcharts.chart('age', {
                    chart: {
                        type: 'pie',
                        options3d: {
                            enabled: false,
                            alpha: 45
                        }
                    },
                    title: {
                        text: null
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
                                            window.location.href= '/exportUserAge';
                                        }
                                    },

                                ]
                            }
                        }
                    },
                    subtitle: {
                        // text: 'Highcharts 中的3D环形图'
                    },
                    plotOptions: {
                        pie: {
                            innerSize: 100,
                            depth: 45
                        }
                    },
                    series: [{
                        name: '人数占比：',
                        data: data
                        //     {name:'12岁一下',
                        //         y:2,
                        //         drilldown: 'a'},
                        //     {name:'12-18岁',
                        //         y:5,
                        //         drilldown: 'b'},
                        //     {name:'18-30岁',
                        //         y:8,
                        //         drilldown: 'c'},
                        //     {name:'30-60岁',
                        //         y:7,
                        //         drilldown: 'd'},
                        //     {name:'60岁以上',
                        //         y:10,
                        //         drilldown: 'f'}
                        // ]
                    }],
                    drilldown: {
                        series: [{
                            type: 'pie',
                            id: 'a0',
                            data: [
                                ['男性', 57.2],
                                ['女性', 5]
                            ]
                        }, {
                            type: 'pie',
                            id: 'a1',
                            data:  [
                                ['男性', 4],
                                ['女性', 5]
                            ]
                        }, {
                            type: 'pie',
                            id: 'a2',
                            data:  [
                                ['男性', 4],
                                ['女性', 5]
                            ]
                        }, {
                            type: 'pie',
                            id: 'a3',
                            data:  [
                                ['男性', 4],
                                ['女性', 5]
                            ]
                        },{
                            pie:'pie',
                            id: 'a4',
                            data:  [
                                ['男性', 4],
                                ['女性', 5]
                            ]
                        }]
                    }
                });
            },
            error:function (e) {
                // alert(e);
            }
        });
    })
})