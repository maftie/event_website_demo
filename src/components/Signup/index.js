import React, { Component } from 'react';
import { connect } from 'react-redux';

import { newUser } from '../../actions/userActions';
import { throwError } from '../../actions/errorActions';
import { clearUserMessage } from '../../actions/userActions';
import { clearEventMessage } from '../../actions/eventActions';
import { clearErrors } from '../../actions/errorActions';

import validateEmail from '../../helpers/validateEmail';
import fieldsNotEmpty from '../../helpers/fieldsNotEmpty';

export class Signup extends Component {
    componentWillUnmount() {
      this.props.clearMessages();
    }
    state = {
        email: "",
        password: "",
        organizer: ""
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
      event.preventDefault()
      this.props.clearMessages();
      if(!fieldsNotEmpty(this.state)) {
        this.props.throwError('One or more fields is empty')
      } else {
        validateEmail(this.state.email) ? this.props.newUser(this.state) : this.props.throwError('Invalid email')
      }
    }

    handleRadioChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className='container pt-4'>
              <div className='row'>
                <div className='col'>
                  <h1>Account Registration</h1>
                  <form id='login-form'>
                    <div className='form-group'>
                      <label htmlFor='email-field'>Email</label>
                      <input
                        className='form-control'
                        id='email-field'
                        type='email'
                        name='email'
                        placeholder='Enter your email'
                        value={this.state.username}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='password-field'>Password</label>
                      <input
                        className='form-control'
                        id='password-field'
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div className='form-group'>
                    <label htmlFor='organizer-radio-buttons'>Are You an Event Organizer?</label>
                        <div id='organizer-radio-buttons'>
                          <div className='radio form-check form-check-inline'>
                          <input
                            className='form-check-input' 
                            type="radio" 
                            name="organizer" 
                            id="Yes" 
                            value="Yes" 
                            onChange={this.handleRadioChange}required 
                          />
                          <label className='form-check-label' htmlFor='Yes'>Yes</label>
                          </div>
                        </div>
                        <div className='radio form-check form-check-inline'>
                          <input 
                            className='form-check-input'
                            type="radio" 
                            name="organizer" 
                            id="No" 
                            value="No" 
                            onChange={this.handleRadioChange}
                          />
                          <label className='form-check-label' htmlFor='No'>No</label>
                        </div>
                      </div>
                      <button className='submit button btn-primary' type='submit' onClick={this.handleSubmit}>Submit</button>
                  </form> 
                </div>
               </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    newUser: userInfo => dispatch(newUser(userInfo)),
    throwError: error => dispatch(throwError(error)),
    clearMessages: () => {
      clearUserMessage(dispatch);
      clearEventMessage(dispatch);
      clearErrors(dispatch);
    }
})

export default connect(null, mapDispatchToProps)(Signup);
