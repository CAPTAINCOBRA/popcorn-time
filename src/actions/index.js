// {
//     type: 'ADD_MOVIES',
// },
// {

import { data } from "../data";
require("dotenv").config();

// }

//We moved it to actions because these variables are called action types
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const SET_SHOW_FAVOURITES = "SET_SHOW_FAVOURITES";
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";
export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST";

//Action Creators
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}

export function addFavourite(movie) {
  return {
    type: ADD_TO_FAVOURITES,
    movie,
  };
}

export function removeFromFavourites(movie) {
  return {
    type: REMOVE_FROM_FAVOURITES,
    movie,
  };
}

export function setShowFavourites(val) {
  return {
    type: SET_SHOW_FAVOURITES,
    val,
  };
}

export function addMovieToList(movie) {
  return {
    type: ADD_MOVIE_TO_LIST,
    movie,
  };
}

// We use middleware here to inform that we are recieving function instead of an object
export function handleMovieSearch(movie) {
  // const url = `http://www.omdbapi.com/?apikey=891a9115&t=${movie}`;
  // const url = `http://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`;
  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${movie}`;
  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((movie) => {
        console.log("movie", movie);

        // dispatch an action
        dispatch(addMovieSearchResult(movie));
      });
  };
}

export function addMovieSearchResult(movie) {
  return {
    type: ADD_SEARCH_RESULT,
    movie,
  };
}
