import * as types from '../types';

const initialState = {
    userData: {
        uid: null,
        token: null,
        refToken: null
    }
}
export default (state = initialState, action) => {
    switch (action.type) {
        case types.SIGN_USER:
            return {
                ...state,
                userData: {
                    uid: action.payload.localId || false,
                    token: action.payload.idToken || false,
                }
            }
        case types.REGISTER_USER:
            return {
                ...state,
                userData: {
                    uid: action.payload.localId || false,
                    token: action.payload.idToken || false,
                }
            }
        default:
            return state;
    }
}