import React, { Component } from "react";
// import {addMovieToList,handleMovieSearch} from '../action/index'
import { addMovieToList, handleMovieSearch } from "../actions/index";
import { connect } from "react-redux";
// import { StoreContext, connect } from '..';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
    };
  }

  handleAddToMovies = (movie) => {
    console.log("adding result to movie", movie);
    this.props.dispatch(addMovieToList(movie));
    this.setState({
      showSearchResults: false,
    });
  };

  handleSearch = () => {
    console.log("in  nav search", this.props.dispatch);
    const { searchText } = this.state;
    this.props.dispatch(handleMovieSearch(searchText));
    //   this.setState({showSearchResult:true})
  };

  handleChange = (e) => {
    this.setState({ searchText: [e.target.value] });
  };

  render() {
    // const { showSearchResults } = this.state;
    const { result: movie, showSearchResults } = this.props.search;
    console.log("in nav props", this.props);
    return (
      <div className="nav">
        <div className="search-container ">
          <input onChange={this.handleChange} />
          <button onClick={this.handleSearch} id="search-btn">
            {" "}
            Search{" "}
          </button>

          {showSearchResults && (
            <div className="search-results">
              <div className="search-result">
                <img src={movie.Poster} alt="search-pic" />
                {/* <img src={data[0].Poster} alt='search-pic' /> */}
                <div className="movie-info">
                  <span>{movie.Title}</span>
                  {/* <span>{data[0].Title}</span> */}
                  <button onClick={() => this.handleAddToMovies(movie)}>
                    Add To Movies
                  </button>
                  {/* <button onClick={()=>this.handleAddToMovies(data[0])}>add To Movies</button> */}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

// class NavbarWrapper extends React.Component {
//     render() {
//         return (
//             <StoreContext.Consumer>
//                 {(store) => <Navbar dispatch={store.dispatch} search={this.props.search} /> }
//             </StoreContext.Consumer>
//         )
//     }
// }

function mapStateToProps({ search }) {
  return {
    search,
  };
}

export default connect(mapStateToProps)(Navbar);
