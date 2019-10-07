import { FETCH_EVENTS, NEW_EVENT, BUY_EVENT_TICKET, ERROR, CLEAR_EVENT_MESSAGE } from './types';

export const fetchEvents = () => dispatch => {
      console.log('trying to fetch')
      fetch('http://localhost:3001/api/getevents')
      .then(res => res.json())
      .then(events => dispatch({
          type: FETCH_EVENTS,
          payload: events
      }))
      .catch(error => {
        console.log(error)
        dispatch({
            type: ERROR,
            payload: error
        })
      })
    
}

export const createEvent = (postData) => dispatch => { 
    let authHeader = 'Bearer ' + localStorage.EB_DEMO_TOKEN;
    if(localStorage.EB_DEMO_TOKEN) {
        fetch('http://localhost:3001/api/createEvent', {
          method: 'POST',
          headers: {
              'Authorization': authHeader,
              'content-type': 'application/json'
          },
          body: JSON.stringify(postData)
      })
      .then(res => res.json())
      .then(post => dispatch({
        type: NEW_EVENT,
        payload: post
        }))
      .catch(error => {
        console.log(error);
        dispatch({
            type: ERROR,
            payload: 'Oops, something went wrong on our end, please try again later.'
        })
      })
    }
    dispatch({
        type: ERROR,
        payload: 'You\'re not logged in, or your log-in may have expired. Please log-in before re-attempting.'
    })
    
}

export const buyTicket = (postData) => dispatch => {
    fetch('http://localhost:3001/api/purchaseTickets', {
          method: 'POST',
          headers: {
              'Authorization': 'bearer ' + localStorage.EB_DEMO_TOKEN,
              'content-type': 'application/json'
          },
          body: JSON.stringify(postData)
      })
      .then(res => res.json())
      .then(post => dispatch({
        type: BUY_EVENT_TICKET,
        payload: post
      }))
      .catch(error => {
        dispatch({
            type: ERROR,
            payload: error
        })
      })
}

export const clearEventMessage = dispatch => {
    dispatch({
      type: CLEAR_EVENT_MESSAGE
    })
  }