import React from 'react'
import ChartView from 'react-native-highcharts'

export class BarChart extends React.Component {
    render() {
        const { chart } = this.props 
        var conf = chart

        const options = {
            global: {
                useUTC: false
            },
            lang: {
                decimalPoint: ',',
                thousandsSep: '.'
            }
        };

        return (          
          <ChartView style={{height:300}} config={chart} options={options}></ChartView>             
        )
    }
}