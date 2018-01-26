import React, { Component } from 'react';

class Movie extends Component {
// State passed down from parent componenet to render 
  render() {
    let baseImgURL = "https://image.tmdb.org/t/p/w185_and_h278_bestv2"
    return (
        <div>
          <ul>
            {this.props.movie.map(movies =>
              <div>
                <img src={baseImgURL + movies.backdrop_path}/>
                <li> {movies.original_title} </li>
                <li>{movies.overview}</li>
              </div>)}
          </ul>
        </div>
    );
  }
}

export default (Movie);