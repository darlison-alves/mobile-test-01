import { createStore, combineReducers, compose, applyMiddleware } from "redux";

import auth from './reducers/auth'
import datas from './reducers/charts'
import thunk from "redux-thunk";

const reducers = combineReducers({
    auth,
    datas
})


const store = createStore(reducers, compose(applyMiddleware(thunk)))

export default store