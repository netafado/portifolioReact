export default function(state = {}, action){
    switch(action.type){
        case 'NAV_MOB':
            return {
                navMob: action.payload
            }
 
        default:
            return false
    }
}