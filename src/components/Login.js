import React, { Component } from 'react'
import { connect } from 'react-redux'
import {loginUser} from '../actions/userActions'

export class Login extends Component {
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
        this.props.login(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
              <ul className='form'>
              <li><h1>Log In</h1></li><br/>
              <li><label>Email</label>
              <input
                name='email'
                placeholder='email'
                value={this.state.email}
                onChange={this.handleChange}
              /></li><br/>
              <li><label>Password</label>
              <input
                type='password'
                name='password'
                autoComplete="current-password"
                placeholder='Password'
                value={this.state.password}
                onChange={this.handleChange}
              /></li><br/>
              <li><input className='submit' type='submit'/></li>
              </ul>
            </form>

        )
    }
}

const mapDispatchToProps = dispatch => ({
    login: userData => dispatch(loginUser(userData))
})

export default connect(null, mapDispatchToProps)(Login)
