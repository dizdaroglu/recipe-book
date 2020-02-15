import * as types from '../types'


export default (state = {}, action) => {
    switch (action.type) {
        case types.ADD_COOK:
            return {
                ...state,
                newCook: action.payload
            }

        default:
            return state;
    }
}