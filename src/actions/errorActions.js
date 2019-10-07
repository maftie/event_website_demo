import { CLEAR_ERROR } from './types';

export const clearErrors = dispatch => {
    dispatch({
      type: CLEAR_ERROR
    })
  }