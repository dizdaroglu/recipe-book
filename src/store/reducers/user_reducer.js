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
                    refToken: action.payload.refreshToken || false
                }
            }
        case types.REGISTER_USER:
            return {
                ...state,
                userData: {
                    uid: action.payload.localId || false,
                    token: action.payload.idToken || false,
                    refToken: action.payload.refreshToken || false
                }
            }
        case types.AUTO_SIGN_IN:
            return {
                ...state,
                userData: {
                    uid: action.payload.user_id || false,
                    token: action.payload.id_token || false,
                    refToken: action.payload.refresh_token || false

                }
            }
        default:
            return state;
    }
}