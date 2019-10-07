import React, { Component } from 'react'
import { connect } from 'react-redux'
import { newUser } from '../actions/userActions';

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
            <div>
               <form onSubmit={this.handleSubmit}>
                   <ul className='form'>
                   <li><h1>Account Registration</h1></li><br/>
                   <li><label>Email</label>
                   <input
                     name='email'
                     placeholder='email'
                     value={this.state.username}
                     onChange={this.handleChange}
                     required
                   /></li><br/>
                   <li><label>Password</label>
                   <input
                     type='password'
                     name='password'
                     placeholder='Password'
                     value={this.state.password}
                     onChange={this.handleChange}
                     required
                   /></li><br/>
                   <li><label>Are you an event organizer?</label></li>
                   <div className='radio'>
                   <li className='individualRadio'><label>Yes</label>
                   <input type="radio" name="organizer" id="Yes" value="Yes" onChange={this.handleRadioChange}required /></li>
                   <li className='individualRadio'><label>No</label>
                   <input type="radio" name="organizer" id="No" value="No" onChange={this.handleRadioChange}/></li></div><br />
                   <li><input className='submit' type='submit'/></li>
                   </ul>
               </form> 
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    newUser: userInfo => dispatch(newUser(userInfo))
})

export default connect(null, mapDispatchToProps)(Signup);
