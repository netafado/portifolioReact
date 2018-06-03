import React, { Component } from 'react';
import Routes from './components/Routes'
import './app.css'

class App extends Component {
  
  render() {
    console.log(process.env);
    return (
      <Routes />
    );
  }
}

export default App;
