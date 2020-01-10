import React, { Component } from 'react';
import { connect } from 'react-redux';

import {loginUser} from '../../actions/userActions';
import { clearUserMessage } from '../../actions/userActions';
import { clearEventMessage } from '../../actions/eventActions';
import { clearErrors } from '../../actions/errorActions';

import ValidateEmail from '../../helpers/validateEmail';

export class Login extends Component {
    componentWillUnmount() {
      this.props.clearMessages();
    }
    state = {
        email: "",
        password: ""
    }

    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
    
    handleSubmit = event => {
        event.preventDefault()
        if(ValidateEmail(this.state.email)) {
          this.props.login(this.state)
        } else {
          this.props.throwError('Invalid email')
        }
        
    }

    render() {
        return (
          <div className='container pt-4'>
            <div className='row'>
              <div className='col'>
                <div className='form-group'>
                  <h1>Log In</h1>
                  <form>
                    <div className='form-group'>
                      <label htmlFor='email-field'>Email</label>
                      <input
                        className='form-control'
                        id='email-field'
                        type='email'
                        name='email'
                        placeholder='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='password-field'>Password</label>
                      <input
                        className='form-control'
                        id='password-field'
                        type='password'
                        name='password'
                        autoComplete="current-password"
                        placeholder='Password'
                        value={this.state.password}
                        onChange={this.handleChange}
                      />
                    </div>
                    <button type='submit' className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    login: userData => dispatch(loginUser(userData)),
    clearMessages: () => {
      clearUserMessage(dispatch);
      clearEventMessage(dispatch);
      clearErrors(dispatch);
    }
})

export default connect(null, mapDispatchToProps)(Login)
