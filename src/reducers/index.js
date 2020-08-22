export default function movies (state = [], action){
    if(action.type === 'ADD_MOVIES') {
        return action.movies;
    }
    return state;
}
//We are returning a new state here because we cannot modify an exiting state
//So we return a new state instead of modifying an old state here