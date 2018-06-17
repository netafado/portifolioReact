import { combineReducers } from 'redux'
import user from './user'
import posts from './blog'
import navMob from './nav'

const rootReducers = combineReducers({
    getUser: user,
    posts: posts,
    navMob: navMob 
})

export default rootReducers;