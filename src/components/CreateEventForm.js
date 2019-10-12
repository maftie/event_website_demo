import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createEvent } from '../actions/eventActions';
import { push } from 'connected-react-router';
import { clearUserMessage } from '../actions/userActions';
import './createEventForm.css';

export class CreateEventForm extends Component {
    handleChange = (event, eventName) => {
        console.log('event name: ' + event.target.name + "\nevent target: " + event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.createEvent(this.state);
    }

    state = {
        name: '',
        date: '',
        imageLink: '',
        description: '',
        ticketPrice: 0,
        ticketTotal:  0
    }
    render() {
        return (
            <div>
               <form  onSubmit={this.handleSubmit} id='login'>
                   <ul className='form'>
                   <li><h1>Create an Event</h1></li><br/>
                     <li><label>Event Name</label>
                     <input
                       name='name'
                       placeholder='Name'
                       value={this.state.name}
                       onChange={this.handleChange}
                       required
                     /></li><br/>
                     <li><label>Date</label>
                     <input
                       type='date'
                       name='date'
                       value={this.state.date}
                       onChange={this.handleChange}
                       required
                     /></li><br/>
                     <li><label>Image URL</label>
                     <input type="url" name="imageLink" placeholder='www.exampleurl.com' value={this.state.imageLink} onChange={this.handleChange} required /></li><br />
                     <li><label>Description</label>
                     <textarea form='login' name="description" placeholder="Description goes here." onChange={this.handleChange} required /></li><br />
                     <li><label>Ticket Price</label>
                     <input type="number" min="0.01" step="0.01" max="9999" name='ticketPrice' onChange={this.handleChange} required /></li><br />
                     <li><label>Ticket Quantity</label>
                     <input type="number" min="1" max="9999" name='ticketTotal' onChange={this.handleChange} required /></li><br />
                     <li><input type='submit'/></li>
                   </ul> 
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    createEvent: event => dispatch(createEvent(event)),
    redirect: () => {
        clearUserMessage(dispatch);
        dispatch(push('/'))
    }
})

export default connect(null, mapDispatchToProps)(CreateEventForm);
