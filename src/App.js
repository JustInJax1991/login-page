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
          <LoginContainer/>
      </div>

    );
  }
}

class LoginContainer extends Component {
  render() {
    return (
      <div className="position-relative" style={{
        height: '100vh',
        width: '100vw'
      }}>
        <div className="position-absolute top-50 start-50 translate-middle" style={{
        height: '40%',
        width: '20%',
        backgroundColor: 'red'
      }}     >

        </div>
      </div>
    )
  }
}

export default App;
