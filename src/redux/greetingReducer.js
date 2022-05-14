import {
    GREETINGS_REQUEST_DONE,
    GREETINGS_REQUEST_START,
    GREETINGS_REQUEST_ERROR,
  } from './constant';
  
  const initialState = {
    isFetching: false,
    error: undefined,
    greeting: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GREETINGS_REQUEST_START:
        return {
          ...state,
          isFetching: true,
        };
      case GREETINGS_REQUEST_ERROR:
        return {
          ...state,
          isFetching: false,
          error: action.payload,
        };
      case GREETINGS_REQUEST_DONE:
        return {
          ...state,
          isFetching: false,
          greeting: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  