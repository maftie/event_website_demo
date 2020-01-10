import { USER_LOGIN, NEW_USER, CLEAR_MESSAGE, CLEAR_USER_DATA } from '../actions/types';

const initialState = {
  email: 'placeholder',
  token: '',
  error: '',
  message: '',
  organizer: false
}

export default function(state = initialState, action) {
  
  switch(action.type) {
      case USER_LOGIN:
        if (action.payload.email === 'placeholder') {
          return {
            ...state,
            token: action.payload.token,
            message: action.payload.message,
            organizer: action.payload.organizer
          }
        }
        return {
            ...state,
            email: action.payload.email,
            token: action.payload.token,
            message: action.payload.message,
            organizer: action.payload.organizer
        }
      case CLEAR_MESSAGE: 
        return {
            ...state,
            message: '',
            error: ''
        }
        case CLEAR_USER_DATA: 
        return {
            ...state,
            email: 'placeholder',
            organizer: false
        }
      case NEW_USER: 
        return {
            ...state,
            message: action.payload.message
        }
      default:
        return state;
  }
}