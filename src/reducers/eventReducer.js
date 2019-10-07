import {FETCH_EVENTS, NEW_EVENT, BUY_EVENT_TICKET, CLEAR_EVENT_MESSAGE } from '../actions/types';

const initialState = {
    items: [],
    item: {},
    message: '',
    error: ''
}

export default function(state = initialState, action) {
  switch(action.type) {
      case FETCH_EVENTS:
        return {
            ...state,
            items: action.payload
        }
      case NEW_EVENT: 
        return {
            ...state,
            message: action.payload.message
        }
      case BUY_EVENT_TICKET:
        return {
          ...state,
          items: action.payload
        }
      case CLEAR_EVENT_MESSAGE:
        return {
          ...state,
          message: '',
          error: ''
      }
      default:
        return state;
  }
}