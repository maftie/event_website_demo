import { combineReducers } from 'redux';
import eventReducer from './eventReducer';
import userReducer from './userReducer';
import { connectRouter } from 'connected-react-router';
import errorReducer from './errorReducer';

export default (history) => combineReducers({
    router: connectRouter(history),
    events: eventReducer,
    user: userReducer,
    error: errorReducer
  })