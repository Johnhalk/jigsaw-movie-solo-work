import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { callAPI } from './services/apiServices'
import Movie from './components/Movies'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movie: [ ]
    }
  }

  componentDidMount() {
    callAPI().then(response => {
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
              <Movie movie={this.state.movie} />
        </div>
        {console.log(this.state)}
      </div>
    );
  }
}

export default (App);
