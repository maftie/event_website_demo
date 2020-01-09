import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { clearUserMessage } from '../../actions/userActions';
import { clearEventMessage } from '../../actions/eventActions';
import { clearErrors } from '../../actions/errorActions';
import HeaderAlert  from './headerAlertComponent';
import NavItems from './navItemsComponent';

export class Header extends Component {
    componentWillReceiveProps() {
        console.log('new props for header: ' + JSON.stringify(this.props));      
    }
    render() {
        return (
            <div>
              <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <button className="navbar-brand bg-transparent border-0" onClick={this.props.navigate} to={'/'} name='/'>Event Website Demo</button>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <NavItems email={(this.props.user.email)}/>
                </div>
              </nav>
              <HeaderAlert user={this.props.user} error={this.props.error} events={this.props.events}/> 
            </div>
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
