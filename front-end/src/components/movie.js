import React, { Component } from 'react';

class Movie extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

// State passed down from parent App componenet to movie props

  render() {
    let baseImgURL = "https://image.tmdb.org/t/p/w185_and_h278_bestv2"
    return (
        <div className="movie-list container">
            {this.props.movie.map(movies =>
              <div>
                <img src={baseImgURL + movies.backdrop_path}/>
                <h2>Movie Title:</h2>{movies.original_title}
                <h2>Movie description: </h2>{movies.overview}
              </div>)}
        </div>
    );
  }
}

export default (Movie);