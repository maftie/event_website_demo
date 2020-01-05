import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createEvent } from '../../actions/eventActions';
import { push } from 'connected-react-router';
import { clearUserMessage } from '../../actions/userActions';

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
            <div className='container'>
               <h1>Create an Event</h1>
               <form  onSubmit={this.handleSubmit} id='event-form'>
                   <div className='form-group'>
                       <label htmlFor='event-name-field'>Event Name</label>
                       <input
                         className='form-control'
                         id='event-name-field'
                         name='name'
                         placeholder='Enter the name of your event'
                         value={this.state.name}
                         onChange={this.handleChange}
                         required
                       />
                   </div>
                   <div className='form-group'>
                     <label htmlFor='date-field'>Date</label>
                     <input
                       className='form-control'
                       id='date-field'
                       type='date'
                       name='date'
                       value={this.state.date}
                       onChange={this.handleChange}
                       required
                     />
                   </div>
                   <div className='form-group'>
                     <label htmlFor='image-field'>Image URL</label>
                     <input 
                       className='form-control' 
                       type="url" 
                       id='image-field' 
                       name="imageLink" 
                       placeholder='www.exampleurl.com' 
                       aria-describedby='imageHelp' 
                       value={this.state.imageLink} 
                       onChange={this.handleChange} 
                       required 
                     />
                     <small id="imageHelp" className="form-text text-muted">The selected image will be used to represent your event.</small>
                   </div> 
                   <div className='form-group'>
                     <label htmlFor='description-field'>Description</label>
                     <textarea 
                       className='form-control'
                       id='description-field'
                       aria-describedby='descHelp'
                       form='event-form' 
                       name="description" 
                       placeholder="Description goes here." 
                       onChange={this.handleChange} 
                       required 
                     />
                     <small id="descHelp" className="form-text text-muted">Tell us about your event.</small>
                   </div>
                   <div className='form-row'>
                     <div className='form-group col-md-6'>
                       <label htmlFor='ticket-price-field'>Ticket Price</label>
                       <input 
                         className='form-control'
                         id='ticket-price-field'
                         type="number" 
                         min="0.01" 
                         step="0.01" 
                         max="9999" 
                         name='ticketPrice' 
                         onChange={this.handleChange} 
                         required 
                       />
                     </div>
                     <div className='form-group col-md-6'>
                       <label htmlFor='ticket-quantity-field'>Ticket Quantity</label>
                       <input 
                         className='form-control'
                         id='ticket-quantity-field'
                         type="number" 
                         min="1" 
                         max="9999" 
                         name='ticketTotal' 
                         onChange={this.handleChange} 
                         required 
                       />
                     </div>
                   </div>
                   <button type="submit" className="btn btn-primary">Submit</button>
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
