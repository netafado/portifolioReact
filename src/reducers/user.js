export default function(state = {}, action){
    switch(action.type){
        case 'USER_LOG_IN':
            return{...state, user: action.payload}
        default:
            return state
    }
}