import React, { Component } from "react";
import { addFavourite, removeFromFavourites } from "../actions";

class MovieCard extends Component {
  handleFavouriteClick = () => {
    const { movie } = this.props;
    this.props.dispatch(addFavourite(movie));
  };

  handleUnFavouriteClick = () => {
    const { movie } = this.props;
    this.props.dispatch(removeFromFavourites(movie));
  };

  render() {
    const { movie, isFavourite } = this.props;
    return (
      <div className="movie-card">
        <div className="left">
          <img alt="movie-poster" src={movie.Poster}></img>
        </div>
        <div className="right">
          <div className="title"> {movie.Title} </div>
          <div className="plot"> {movie.Plot} </div>
          <div className="footer">
            <div className="rating"> Imdb {movie.imdbRating} </div>
            <div className="rating"> Year: {movie.Year} </div>
            <div className="rating"> Genre: {movie.Genre} </div>
            {isFavourite ? (
              <button
                onClick={this.handleUnFavouriteClick}
                className="unfavourite-btn"
              >
                UnFavourite
              </button>
            ) : (
              <button
                onClick={this.handleFavouriteClick}
                className="favourite-btn"
              >
                Favourite
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
