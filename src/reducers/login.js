export default function(state = {}, action){
    switch(action.type){
        case 'LOG_IN':
            return{...state, artistList:action.payload}
        default:
            return state
    }
}