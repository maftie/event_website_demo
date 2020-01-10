import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import HeaderAlert  from './headerAlertComponent';
import NavItems from './navItemsComponent';

export class Header extends Component {
    render() {
        return (
            <div>
              <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Link className="navbar-brand bg-transparent border-0" to={'/'}>Event Website Demo</Link>
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

export default connect(mapStateToProps)(Header)
