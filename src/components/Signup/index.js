import React, { Component } from 'react'
import { connect } from 'react-redux'
import { newUser } from '../../actions/userActions';

export class Signup extends Component {
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
        event.preventDefault();
        this.props.newUser(this.state);
    }

    handleRadioChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className='container'>
               <form onSubmit={this.handleSubmit} id='login-form'>
                <h1>Account Registration</h1>
                <div className='form-group'>
                  <label htmlFor='email-field'>Email</label>
                  <input
                    className='form-control'
                    id='email-field'
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
                   <button className='submit button btn-primary' type='submit'>Submit</button>
               </form> 
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    newUser: userInfo => dispatch(newUser(userInfo))
})

export default connect(null, mapDispatchToProps)(Signup);
