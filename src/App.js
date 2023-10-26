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
          <div style={{
            height: '100vh',
            width: '100vw',
            backgroundColor: 'rgba(47, 62, 70, .6)'
            
          }}>
          <LoginContainer/>
          </div>
          
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
        backgroundColor: '#84a98c'
      }}>
        <LoginHeader/>
        <LoginSignUpBody/>
        </div>
      </div>
    )
  }
}

class LoginHeader extends Component {
  render() {
    return(
      <nav className="navbar" style={{
        backgroundColor: '#2f3e46',
         
      }}>
        <div className="container-fluid justify-content-center">
          <span class="navbar-text" style={{color: 'white'}}>
            Login
          </span>
        </div>
      </nav>
    )
  }
}

class LoginSignUpBody extends Component {
  
  onFormSubmit = (evt) => {
    evt.preventDefault();
    console.log(this.state.fields)
  }

  onInputChange = (evt) => {
    const fields = Object.assign({}, this.state.fields);
    fields[evt.target.name] = evt.target.value;
    this.setState({ fields })
  }

  state = {
    fields: {
      email: '',
      password: ''
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
            <div className="my-3 mx-3" style={{color: 'white'}}>
          <label for="email" className="form-label">Email address</label>
          <input 
           type="email" 
           className="form-control" 
           id="email" 
           placeholder='name@example.com' 
           name='email'
           value={this.state.fields.email}
           onChange={this.onInputChange} 
          />
          </div>
          <div className="my-3 mx-3" style={{color: 'white'}}>
          <label for="password" className="form-label">Password</label>
          <input 
           type="password" 
           className="form-control" 
           id="password" 
           placeholder='password' 
           name='password'
           value={this.state.fields.password}
           onChange={this.onInputChange}
           />
          </div>
          <div className="my-3 mx-3" style={{color: 'white'}}>
            Forgot <a href="#" style={{color: '#2f3e46'}}>username</a> or <a href="#" style={{color: '#2f3e46'}}>password </a>?
          </div>
          <div className="my-4 d-flex justify-content-evenly" style={{color: 'white'}}>
            <button type="submit" 
            className="btn btn-lg" 
            style={{backgroundColor: '#354f52', color: 'white'}}
            name="login"
            value="login"
            >
              Login
            </button>
            <button type="button" 
            className="btn btn-lg" 
            style={{backgroundColor: '#354f52', color: 'white'}}
            name="signup"
            value="signup"
            onClick={this.onButtonClick}
            >
              Sign Up
            </button>
          </div>
        </form>  
      </div>
    )
  }
}

export default App;
