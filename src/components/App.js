import React, { Component } from "react";
// import './App.css';
import { data } from "../data"; //We want to load our movies data from store and not here
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, addFavourite, setShowFavourites } from "../actions";
import { connect } from "react-redux";
import { StoreContext } from "..";

class App extends Component {
  componentDidMount() {
    // const { store } = this.props;
    // store.subscribe(() =>  this.forceUpdate());
    //make api call
    //dispatch action
    //Here the action is hardcoded, we replace it
    // store.dispatch({
    //   type: 'ADD_MOVIES',
    //   movies: data
    // });
    this.props.dispatch(addMovies(data));

    // console.log('STATE', this.props.store.getState());
  }

  isMovieFavourite = (movie) => {
    //This will check in state if the movie is in favourite array or not
    const { movies } = this.props; //.store.getState() //getState will give us this = {list: [], favourites: []}

    const index = movies.favourites.indexOf(movie);

    if (index !== -1) {
      //Found the movie
      return true;
    }
    return false;
  };

  onChangeTab = (val) => {
    this.props.dispatch(setShowFavourites(val));
  };

  render() {
    const { movies, search } = this.props; //.store.getState(); // { movies: {}, search: {} }
    const { list, favourites, showFavourites } = movies;
    // console.log("RENDER!", this.props.store.getState());
    const displayMovies = showFavourites ? favourites : list;

    return (
      <div className="App">
        <Navbar
          // dispatch={this.props.store.dispatch}
          search={search}
        />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourites ? "" : "active-tabs"}`}
              onClick={() => this.onChangeTab(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavourites ? "active-tabs" : ""}`}
              onClick={() => this.onChangeTab(true)}
            >
              Favourites
            </div>
          </div>

          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movies- ${index}`}
                dispatch={this.props.dispatch}
                isFavourite={this.isMovieFavourite(movie)}
              />
            ))}
          </div>

          {displayMovies.length === 0 ? (
            <div className="no-movies"> No movies to display! </div>
          ) : null}
        </div>
      </div>
    );
  }
}

// class AppWrapper extends React.Component {
//   render() {
//     return (
//       <StoreContext.Consumer>
//         {(store) => <App store={store} />}
//       </StoreContext.Consumer>
//     )
//   }
// }

function mapStateToProps(state) {
  return {
    //We are defining the data we want in our component
    movies: state.movies,
    search: state.movies,
  };
}

const connectedAppComponent = connect(mapStateToProps)(App);

export default connectedAppComponent;
// export default AppWrapper;

// ComponentDidMount needed to be used here, so converted func comp to class comp
