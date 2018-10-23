import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import StarWarsCharacters from './StarWarsCharacters'

class App extends Component {

  state = { 
    gibberish: "",
    wookies: []
   }

  componentDidMount(){
    axios.get('/matthew_is_teaching')
    .then( res => this.setState({ gibberish: res.data }))
  }

  tuesday = () => {
    axios.get('/star_trek_is_cooler')
    .then( wookies => this.setState({wookies: wookies.data.results}))
  }

  wednesday = () => {
    axios.get('/get_them_photos')
    .then( res => this.setState({ photos: res.data }))
  }


  render() {
    return (
      <div>
        <div onClick={this.tuesday}>
          this is a button
        </div>
        <div onClick={this.wednesday}>
          this is gonna be wednesdays button
        </div>
        <StarWarsCharacters 
        characters ={this.state.wookies}
        />
      </div>
    );
  }
}

export default App;
