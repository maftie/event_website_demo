import{ USER_LOGIN, NEW_USER, USER_ERROR, ERROR, CLEAR_MESSAGE, CLEAR_USER_DATA } from './types.js';

export const newUser = (user) => dispatch => {
    if(user.organizer === "true") {
        user.organizer = true
    }else {
        user.organizer = false
    }
    fetch('http://localhost:3001/api/register', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(res => {
          if(!res.success) {
            dispatch({
                type: USER_ERROR,
                payload: res
            })
          }
          dispatch({
            type: NEW_USER,
            payload: res
        })
      })
      .catch(error => {
        dispatch({
            type: ERROR,
            payload: error
        })
      })
}

export const loginUser = (user) => dispatch => {
    fetch('http://localhost:3001/api/login', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(res => {
      if(!res.success) {
        dispatch({
          type: USER_ERROR,
          payload: res
        })
      }
      localStorage.setItem("EB_DEMO_TOKEN", res.token);
      dispatch({
        type: USER_LOGIN,
        payload: res
      })
    })
    .catch(error => {
      dispatch({
        type: USER_ERROR,
        payload: error
      })
    })
}

export const clearUserMessage = dispatch => {
  dispatch({
    type: CLEAR_MESSAGE
  })
}

export const clearUserData = dispatch => {
  dispatch({
    type: CLEAR_USER_DATA
  })
}