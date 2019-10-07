import { ERROR, CLEAR_ERROR } from '../actions/types';

const initialState = {
    message: ''
}

export default function(state = initialState, action) {
    switch(action.type) {
        case ERROR:
          return {
              ...state,
              message: action.payload
          }
        case CLEAR_ERROR:
          return {
            ...state,
            message: ''
          }
        default:
          return state;
    }
  }