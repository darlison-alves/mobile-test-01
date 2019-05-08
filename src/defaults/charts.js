export const GET_CHARTS = 'GET_CHARTS'

export const INITIAL_VALUES = {
    charts: [
        {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Browser market shares. January, 2018'
            },        
            xAxis: {
                type: 'category'
            },
            yAxis: {
                title: {
                    text: 'Total percent market share'
                }
        
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:.1f}%'
                    }
                }
            },
            series: [
                {
                    name: "Browsers",
                    colorByPoint: true,
                    data: [
                        {
                            name: "Chrome",
                            y: 62.74,
                            drilldown: "Chrome"
                        },
                        {
                            name: "Firefox",
                            y: 10.57,
                            drilldown: "Firefox"
                        },
                        {
                            name: "Internet Explorer",
                            y: 7.23,
                            drilldown: "Internet Explorer"
                        },
                        {
                            name: "Safari",
                            y: 5.58,
                            drilldown: "Safari"
                        },
                        {
                            name: "Edge",
                            y: 4.02,
                            drilldown: "Edge"
                        },
                        {
                            name: "Opera",
                            y: 1.92,
                            drilldown: "Opera"
                        },
                        {
                            name: "Other",
                            y: 7.62,
                            drilldown: null
                        }
                    ]
                }
            ]
        },
        {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Novo Gráfico'
            },        
            xAxis: {
                type: 'category'
            },
            yAxis: {
                title: {
                    text: 'Total percent market share'
                }
        
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:.1f}%'
                    }
                }
            },
            series: [
                {
                    name: "Browsers",
                    colorByPoint: true,
                    data: [
                        {
                            name: "Chrome",
                            y: 32.74,
                            drilldown: "Chrome"
                        },
                        {
                            name: "Firefox",
                            y: 30.57,
                            drilldown: "Firefox"
                        },
                        {
                            name: "Internet Explorer",
                            y: 17.23,
                            drilldown: "Internet Explorer"
                        },
                        {
                            name: "Safari",
                            y: 5.58,
                            drilldown: "Safari"
                        },
                        {
                            name: "Edge",
                            y: 4.02,
                            drilldown: "Edge"
                        },
                        {
                            name: "Opera",
                            y: 1.92,
                            drilldown: "Opera"
                        },
                        {
                            name: "Other",
                            y: 7.62,
                            drilldown: null
                        }
                    ]
                }
            ]
        }
    ]
}