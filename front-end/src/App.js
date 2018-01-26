import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { callAPI } from './services/apiServices'
import Movie from './components/Movies'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      searchFilterInput: 'Jack'
    }
  }

  componentDidMount() {
    callAPI(this.state.searchFilterInput).then(response => {
      this.setState({ movie: response.results })
    });
  }

  handleSearchFilterInput = ({ target: { value: searchFilterInput } }) => {
    this.setState({ searchFilterInput });
  };

  handleSearchRequest = (searchFilterInput) => {
    callAPI(this.state.searchFilterInput).then(response => {
      this.setState({ movie: response.results })
    });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <input type="text" className="search-filter" onChange={this.handleSearchFilterInput}
            value={this.state.searchFilterInput} placeholder="Search your favourite movie !" />
          <button type="search-button" onClick={this.handleSearchRequest
            .bind(this)}>Search</button>


          <Movie movie={this.state.movie} />
        </div>
        {console.log(this.state)}
      </div>
    );
  }
}

export default (App);
