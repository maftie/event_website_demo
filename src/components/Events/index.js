import React, { Component } from 'react'
import { connect } from 'react-redux';

import { fetchEvents, buyTicket } from '../../actions/eventActions';
import { clearUserMessage } from '../../actions/userActions';
import { clearEventMessage } from '../../actions/eventActions';
import { clearErrors } from '../../actions/errorActions';

import  CreateEventButton from './CreateEventButtonComponent';

class Events extends Component {
    componentWillUnmount() {
        this.props.clearMessages();
    }
    state = {
        name: '',
        amount: 0
    }

    componentWillMount() {
        this.props.fetchEvents();
        console.log(this.props.user);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.newEvent) {
            this.props.events.unshift(nextProps.newEvent);
        }
    }

    getDate(date) {
        let dateInstance = new Date(date);
        let day = dateInstance.getDate()
        let month = dateInstance.getMonth()
        let year = dateInstance.getFullYear()
        return (month + "-" + day + "-" + year);  
    }

    handlePurchase(event, state) {
        event.preventDefault();
        this.props.buyTicket(this.state);
    }

    handleChange = (event, eventname) => {
        this.setState({
            [event.target.name]: event.target.value,
            name: eventname
        })
    }

    render() {
        const eventItems = this.props.events.map(event => (
            <div className='Event col-md-4' key={event._id}>
                <div className='card mb-4 box-shadow'>
                    <img src={event.imageLink} alt='' className='card-img-top'/>
                    <div className='card-body'>
                        <div><h3>{event.name}</h3>
                        <h3>{this.getDate(event.date)}</h3></div>
                        {event.ticketTotal > 0 ? 
                            <p>{event.ticketTotal} ticket(s) left at ${event.ticketPrice}</p>
                            :
                            <p>Sorry, this event is sold out!</p>
                        }
                        
                        <p><i>{event.description}</i></p><br />
                        { (this.props.user.email !== 'placeholder' && this.props.user.email !== undefined) && (event.ticketTotal > 0)
                            ?
                            <form className='TicketForm' onSubmit={e=>(this.handlePurchase(e, this.state))}>
                                <label>Purchase Tickets:</label><br/>
                                <ul>
                                <li><input type='number' min="1" max={event.ticketTotal} eventname={event.name} onChange={(e)=>{this.handleChange(e, event.name)}} name='amount'/></li>
                                <li><input type='submit'/></li>
                                </ul>
                            </form>
                            :
                            <div></div>
                        }
                    </div>
                </div>
            </div>
        ));
        return (
            <div>
                <div className='EventPageContent album py-5 bg-light'>
                    <div className='container'>
                        <div className='EventHeading'><h1>Events</h1></div>
                        <div className='Events row'>
                            { eventItems }
                        </div>
                        { this.props.user.email !== 'placeholder' && this.props.user.email !== undefined
                        ?
                        <CreateEventButton />
                        :
                        <div></div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateTopProps = state => ({
  events: state.events.items,
  newEvent: state.events.item,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
    fetchEvents: () => dispatch(fetchEvents()),
    buyTicket: purchaseInfo => dispatch(buyTicket(purchaseInfo)),
    clearMessages: () => {
        clearUserMessage(dispatch);
        clearEventMessage(dispatch);
        clearErrors(dispatch);
      }
})

export default connect(mapStateTopProps, mapDispatchToProps)(Events);

