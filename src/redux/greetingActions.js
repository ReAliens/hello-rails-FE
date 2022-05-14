import {
    GREETINGS_REQUEST_DONE,
    GREETINGS_REQUEST_ERROR,
    GREETINGS_REQUEST_START,
  } from './constant';
  
  export const fetchGreetingStart = () => ({
    type: GREETINGS_REQUEST_START,
  });
  
  export const fetchGreetingSucc = (payload) => ({
    type: GREETINGS_REQUEST_DONE,
    payload,
  });
  
  export const fetchGreetingFailure = (payload) => ({
    type: GREETINGS_REQUEST_ERROR,
    payload,
  });
  
  export const fetchGreetingData = () => async (dispatch) => {
    dispatch(fetchGreetingStart());
    try {
      const res = await fetch('http://localhost:3000/api/v1/greetings');
      if (res.ok) {
        let greeting = await res.json();
        dispatch(fetchGreetingSucc(greeting));
      }
    } catch (err) {
      dispatch(fetchGreetingFailure(err.message));
    }
  };
  