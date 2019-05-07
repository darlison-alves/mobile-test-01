import { createStore, combineReducers, compose, applyMiddleware } from "redux";

import auth from './reducers/auth'
import thunk from "redux-thunk";

const reducers = combineReducers({
    auth
})


const store = createStore(reducers, compose(applyMiddleware(thunk)))

export default store