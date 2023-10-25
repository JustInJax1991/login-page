import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import background from './images/whiteoak.jpg'

class App extends Component {
  render() {
    return (
      <div style={{ 
        backgroundImage:  `url(${background})`,
        backgroundAttachment: "fixed",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw'
        }}> 
      </div>
    );
  }
}

export default App;
