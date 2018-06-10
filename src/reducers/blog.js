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
        case 'GET_POSTS_BY_USER':
            return{
                post: action.payload
            }
        case 'DELETE_POST':
            return{
               msg: 'post deletado'
            }
        default:
            return state
    }
}