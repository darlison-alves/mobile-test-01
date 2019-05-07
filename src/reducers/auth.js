import { SETLOGIN } from "../defaults/authAction";

export default (state = {user: {}}, action) => {
    switch(action.type) {
        case SETLOGIN: 
            return {
                ...state,
                user: action.payload
            }
        default: 
            return state
    }
}