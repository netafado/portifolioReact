export default function(state = {}, action){
    switch(action.type){
        case 'GET_CURSOS':
            return{...state, cursos: action.payload};
        default:
            return state
    }
}