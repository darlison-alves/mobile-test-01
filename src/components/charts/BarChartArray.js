import React from 'react'
import { BarChart } from './BarChart';

export class BarChartArray extends React.Component {
    render() {
        const { charts = [] } = this.props
        return charts.map((value, index) => <BarChart key={index} chart={value} />)
        
    }
}