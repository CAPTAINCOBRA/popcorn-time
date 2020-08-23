import { ADD_MOVIES, ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES, SET_SHOW_FAVOURITES } from '../actions';

const initialMovieState = {
    list: [],
    favourites: [],
    showFavourites: false
}

export default function movies (state = initialMovieState , action){
    // if(action.type === ADD_MOVIES) {
    //     return {
    //         ...state, //Spread operator used here to copy from old 
    //         list: action.movies
    //     }
    // }
    // if(action.type === ADD_TO_FAVOURITES) {
    //     return {
    //         ...state, //Spread operator used here to copy from old 
    //         favourites: action.movie
    //     }
    // }

    switch (action.type) {
        case ADD_MOVIES:
            return {        
                ...state, //Spread operator used here to copy from old 
                list: action.movies
                }
        case ADD_TO_FAVOURITES:
            return {
                ...state, //Spread operator used here to copy from old 
                favourites: [action.movie, ...state.favourites]
            }
        case REMOVE_FROM_FAVOURITES:
            const filteredArray = state.favourites.filter(
                movie => movie.Title !== action.movie.Title
            );    
            return {
                ...state,
                favourites: filteredArray
            }
        case SET_SHOW_FAVOURITES:
            return {        
                ...state, //Spread operator used here to copy from old 
                showFavourites: action.val
                }    
        default: 
            return state;    
    }

    // return state;
}
//We are returning a new state here because we cannot modify an exiting state
//So we return a new state instead of modifying an old state here

// const ADD_MOVIES = 'ADD_MOVIES';