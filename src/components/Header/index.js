import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { clearUserMessage } from '../../actions/userActions';
import { clearEventMessage } from '../../actions/eventActions';
import { clearErrors } from '../../actions/errorActions';

import './header.css';

export class Header extends Component {
    componentWillReceiveProps() {
        console.log('new props: ' + JSON.stringify(this.props));      
    }

    renderLoggedInUser(email){
        if(email === 'placeholder' || email === undefined) {
            return (<li><a href='/placeholder' onClick={this.props.navigate} name='/login'>Log In</a></li>)
        }else {
            return  <li><p>Signed in as {email}</p></li>};
    }

    render() {
        return (
            <header className='App-header'>
              <h1>Event Website Demo</h1>
              <ul>
                  <li><a href='/placeholder' onClick={this.props.navigate} name='/'>Home</a></li>
                  <li><a href='/placeholder' onClick={this.props.navigate} name='/signup'>Sign-up</a></li>
                  { this.renderLoggedInUser(this.props.user.email) }
              </ul>
              <div className='error'>
              {(this.props.error.message !== '' || this.props.user.error !== '' || this.props.events.error !=='') ? this.props.error.message + this.props.user.error + this.props.events.error: '' }
              </div>
              <div className='success'>
                {this.props.user.message !== '' || this.props.events.message !== '' ? this.props.user.message + this.props.events.message : '' }
              </div>
            </header>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    error: state.error,
    events: state.events
})

const mapDispatchToProps = dispatch => ({
    navigate: event => {
        event.preventDefault();
        if (event.target.name === window.location.pathname){
            return;
        }else{
          clearUserMessage(dispatch);
          clearEventMessage(dispatch);
          clearErrors(dispatch);
          dispatch(push(event.target.name))
        }    
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
