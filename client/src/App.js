import React, { Component } from 'react';
import Navbar from './Navbar';
import Card from './components/Card';
import './App.css';

import axios from 'axios'

class App extends Component {
  constructor(){
    super();
    this.state = {
      players: []
    }
  }

  componentDidMount() {
    axios
    .get(`http://localhost:5000/api/players`)
    .then(res => {
      console.log('axios res.data: ', res.data);
      this.setState({
        players: res.data
      })
    })
    .catch(err => {
      console.log('err: ', err);
    })
  }

  componentDidUpdate() {
    console.log('componentDidUpdate: ', this.state.players);
  }

  render() {
    return(
      <div data-testid="appTest" className="App">
        <Navbar />
        <h1>Player List:</h1>
        {this.state.players.map(item => {
          return(
            <Card name={item.name} />
          )
        })}
      </div>
    )
  }
}

export default App;
