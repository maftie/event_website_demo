import { CLEAR_ERROR, ERROR } from './types';
export const throwError = (error) => dispatch => {
  dispatch({
    type: ERROR,
    payload: error
  })
}
export const clearErrors = dispatch => {
  dispatch({
    type: CLEAR_ERROR
  })
}