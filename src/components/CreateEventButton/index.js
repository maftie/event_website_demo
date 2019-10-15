import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearUserMessage } from '../../actions/userActions';
import { push } from 'connected-react-router';

export class CreateEventButton extends Component {
    render() {
        return (
            <div className='CreateEventButton'>
                <button  onClick={this.props.createEventNavigate}>Create New Event</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    createEventNavigate: () => {
        clearUserMessage(dispatch);
        dispatch(push('/createEvent'))
    }
})

export default connect(null, mapDispatchToProps)(CreateEventButton)
