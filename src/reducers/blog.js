export default function(state = {}, action){
    switch(action.type){
        case 'GET_POSTS':
            return{
                ...state,
                posts: action.payload
            }
        case 'GET_POST':
            return{
                post: action.payload
            }
        default:
            return state
    }
}