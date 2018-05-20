import { combineReducers } from 'redux'
import user from './user'

const rootReducers = combineReducers({
    getUser: user
})

export default rootReducers;