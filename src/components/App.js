import React, { Component } from 'react';
// import './App.css';
import { data } from '../data'; //We want to load our movies data from store and not here
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies, addFavourite, setShowFavourites } from '../actions';


class App extends Component {

  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      console.log('UPDATED');
      this.forceUpdate();
    });
    //make api call
    //dispatch action
    //Here the action is hardcoded, we replace it
    // store.dispatch({
    //   type: 'ADD_MOVIES',
    //   movies: data
    // });
    store.dispatch(addMovies(data));

    console.log('STATE', this.props.store.getState());
  }

  isMovieFavourite = (movie) => { //This will check in state if the movie is in favourite array or not
    const {movies} = this.props.store.getState() //getState will give us this = {list: [], favourites: []}

    const index = movies.favourites.indexOf(movie);

    if(index !== -1){
      //Found the movie
      return true;
    }
    return false;
  }

  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavourites(val))
  }


  render() {
    const {movies} = this.props.store.getState(); // { movies: {}, search: {} }
    const {list, favourites, showFavourites} = movies;
    console.log("RENDER!", this.props.store.getState());

    const displayMovies = showFavourites ? favourites : list; 
  return (
    <div className="App">
      <Navbar />
      <div className="main" >
        <div className="tabs" >
          <div className= { `tab ${showFavourites ? '' : 'active-tabs'}` }  onClick={ () => this.onChangeTab(false)} >Movies</div>
          <div className={ `tab ${showFavourites ? 'active-tabs' : ''}` } onClick={() => this.onChangeTab(true) } >Favourites</div>
        </div>

        <div className="list" >
            {displayMovies.map((movie, index) => (
              <MovieCard 
              movie = {movie} 
              key={`movies- ${index}`} 
              dispatch = {this.props.store.dispatch} 
               isFavourite = {this.isMovieFavourite(movie)} />
            ))}
        </div>

              { displayMovies.length === 0 ? <div className="no-movies"> No movies to display! </div> : null }

      </div>
    </div>
  );
  }
  
}

export default App;

// ComponentDidMount needed to be used here, so converted func comp to class comp