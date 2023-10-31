import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import background from './images/whiteoak.jpg'; 
import validator from 'validator';
import PropTypes from 'prop-types'

class App extends Component {
  render() {
    return (
      <div style={{ 
        backgroundImage:  `url(${background})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        overflow: 'hidden'
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
        <div className="position-absolute top-50 start-50 translate-middle d-flex-column" style={{
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
    const userLogin = this.state.fields;
    
    evt.preventDefault();

    if(this.validate()) return;


    this.setState({
      fields: {
        email: '',
        password: ''
      }
    })

    console.log(this.state.fields)
  }

  onInputChange = ({name, value, error}) => {
    const fields = Object.assign({}, this.state.fields);
    const fieldErrors = Object.assign({}, this.state.fieldErrors);

    fields[name] = value;
    fieldErrors[name] = error;

    this.setState({fields, fieldErrors});
  }

  validate() {
    const userLogin = this.state.fields;
    const fieldErrors = this.state.fieldErrors;
    const errMessages = Object.keys(fieldErrors).filter((k) => fieldErrors[k]);
    
    if(!userLogin.email) return true;
    console.log(userLogin.email);
    if(!userLogin.password) return true;
    console.log(userLogin.password);
    if(errMessages.length) return true;
    console.log('No errors!');

    return false;

  }

  state = {
    fields: {
      email: '',
      password: ''
    }, 
    fieldErrors: {}
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <Field
          placeholder="somebody@somewhere.com"
          name="email"
          value={this.state.fields.email}
          onChange={this.onInputChange}
          validate={val => (val ? false : 'Email Required')}
          />
          <Field
          placeholder="password"
          name="password"
          value={this.state.fields.password}
          onChange={this.onInputChange}
          validate={val => (val ? false : 'Password Required')}
          />
          
          <div className="my-3 mx-3" style={{color: 'white'}}>
            Forgot <a href="#" style={{color: '#2f3e46'}}>username</a> or <a href="#" style={{color: '#2f3e46'}}>password </a>?
          </div>
          <div className="my-4 d-flex justify-content-evenly" style={{color: 'white'}}>
            <button type="submit" 
            className="btn btn-lg" 
            style={{backgroundColor: '#354f52', color: 'white'}}
            disabled={this.validate()}
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

class Field extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    validate: PropTypes.func,
    onChange: PropTypes.func.isRequired
  }

  state = {
    value: this.props.value,
    error: false
  }

  getDerivedStateFromProps(nextProps) {
    return {value: nextProps.value}
  }

  onChange = evt => {
    const name = this.props.name;
    const value = evt.target.value;
    const error = this.props.validate ? this.props.validate(value) : false;
    this.setState({value, error});
    this.props.onChange({name, value, error});

  }

  render() {
    return (
      <div className="my-3 mx-3" style={{color: 'white'}}>
          <label className="form-label">{this.props.name}</label>
          <input 
           className="form-control" 
           placeholder={this.props.placeholder}
           value={this.state.value}
           onChange={this.onChange} 
          />
          <span style={{color: 'red'}}>{this.state.error}</span>
          </div>
    )
  }
}

export default App;
