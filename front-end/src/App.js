import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { callAPI } from './services/apiServices'

class App extends Component {

  constructor(props){
    super(props);
      this.state ={
        movie:[]
      }
  }

  componentDidMount(){
    callAPI().then(response => {
      this.setState({movie: response})
  });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

      {console.log(this.state)}

        {console.log("Front end server started")}
      </div>
    );
  }
}

export default App;
