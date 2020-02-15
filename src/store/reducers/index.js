import { combineReducers } from 'redux'
import User from './user_reducer'
import Cook from './cook_reducer'

const rootReducer = combineReducers({
    User,
    Cook
})

export default rootReducer