import { INITIAL_VALUES, GET_CHARTS } from "../defaults/charts";

export default (state = INITIAL_VALUES, action) => {
    switch(action.type) {
        case GET_CHARTS:
            let charts = state.charts
            charts.unshift(action.payload)
            return {
                ...state,
                charts
            }
        default: 
            return state
    }
}