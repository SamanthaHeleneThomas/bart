import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {

  state = { gibberish: "" }

  componentDidMount(){
    axios.get('/matthew_is_teaching')
    .then( res => this.setState({ gibberish: res.data }))
  }

  tuesday = () => {
    axios.get('/star_trek_is_cooler')
    .then( wookie => console.log(wookie))
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
      </div>
    );
  }
}

export default App;
