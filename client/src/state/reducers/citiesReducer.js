import {
  FETCH_CITIES_SUCCESS, 
  FETCH_CITIES_PENDING, 
  FETCH_CITIES_ERROR 
} from '../types';

const initialState = {
  pending: false,
  data: [],
  error: {}
};

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_CITIES_PENDING:
      return {
        pending: true,
        data: [],
        error: {}
      }
    case FETCH_CITIES_SUCCESS:
      return {
        pending: false,
        data: action.payload,
        error: {}
      }
    case FETCH_CITIES_ERROR:
      return {
        pending: false,
        data: [],
        error: action.payload
      }
    default: {
      return state
    }
  }
}
