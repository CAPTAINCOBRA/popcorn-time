import { ADD_MOVIES, ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES, SET_SHOW_FAVOURITES, ADD_SEARCH_RESULT, ADD_MOVIE_TO_LIST } from '../actions';
import { combineReducers } from 'redux';

const initialMoviesState = {
    list: [],
    favourites: [],
    showFavourites: false
}

export function movies (state = initialMoviesState , action){
    console.log("Movies Reducer!");
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
        case ADD_MOVIE_TO_LIST:
            return {
                ...state,
                list: [action.movie, ...state.list]
            };         
        default: 
            return state;    
    }

    // return state;
}
//We are returning a new state here because we cannot modify an exiting state
//So we return a new state instead of modifying an old state here

// const ADD_MOVIES = 'ADD_MOVIES';

const initialSearchState = {
    result: {}, //Here we are using the title parameter. If we are ysing the search parameter, keep an array [] here
    showSearchResults:false,
};
export function search (state = initialSearchState, action){
    // ADD_SEARCH_RESULT
    switch (action.type) {
        case ADD_SEARCH_RESULT:
            return {
                ...state,
                result: action.movie,
                showSearchResults:true
            }
        case ADD_MOVIE_TO_LIST:
            return {
                ...state,
                showSearchResults: false
            };    
        default: 
            return state;    
    }
    // console.log("SearchReducer!")
    // return state;
}

const initialRootState = {
    movies: initialMoviesState,
    search: initialSearchState
}

//No need for this method as it is created by React for us
// export default function rootReducer (state = initialRootState, action){
//     return {
//         movies: movies(state.movies, action),//Here we are defining that movies should be 
//         search: search(state.search, action)//Managed by moviesReducer and search by searchReducer
//     }
// }

// property in state: reducer reponsible for that property in state
// Internally it calls our methods like the one defined above now in comments
// export default combineReducers({
//     movies: movies,
//     search: search
// })
//When the name of the property and reducer is same, we can use shorthand like this = 
export default combineReducers({
    movies,
    search
})