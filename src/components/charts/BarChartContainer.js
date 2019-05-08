import { connect } from "react-redux";
import { BarChartArray } from "./BarChartArray";

const mapStateToProps = state => (
    {
        charts: state.datas.charts
    }
)

const BarChartContainer = connect(mapStateToProps)(BarChartArray)

export default BarChartContainer