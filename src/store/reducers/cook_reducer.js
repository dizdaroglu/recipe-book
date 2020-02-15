import * as types from '../types'


export default (state = {}, action) => {
    switch (action.type) {
        case types.ADD_COOK:
            return {
                ...state,
                newCook: action.payload
            }
        case types.RESET_COOK:
            return {
                ...state,
                newCook: action.payload
            }
        case types.GET_COOK:
            return {
                ...state,
                list: action.payload
            }
        default:
            return state;
    }
}