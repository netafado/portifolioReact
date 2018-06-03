import { combineReducers } from 'redux'
import user from './user'
import posts from './blog'

const rootReducers = combineReducers({
    getUser: user,
    posts: posts
})

export default rootReducers;