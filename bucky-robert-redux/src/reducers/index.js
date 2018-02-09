import { combineReducers } from 'redux'
import UserReducer from './users-reducer'

const allReducer = combineReducers({
    users: UserReducer
});

export default allReducer;