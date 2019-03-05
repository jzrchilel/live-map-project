import {
  FETCH_CITIES_SUCCESS, 
  FETCH_CITIES_PENDING, 
  FETCH_CITIES_ERROR,
  CREATE_LOCATION_SUCCESS,
  EDIT_LOCATION_SUCCESS,
  DELETE_LOCATION_SUCCESS
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
      };
    case FETCH_CITIES_SUCCESS:
      return {
        pending: false,
        data: action.payload,
        error: {}
      };
    case FETCH_CITIES_ERROR:
      return {
        pending: false,
        data: [],
        error: action.payload
      };
    case CREATE_LOCATION_SUCCESS:
      return {
        pending: false,
        data: state.data.concat(action.payload),
        error: {}
      };
    case EDIT_LOCATION_SUCCESS: {
      const updated = state.data.map(item => 
        item._id === action.payload._id 
          ? { ...item, ...action.payload } 
          : item
      );
      return {
        ...state,
        data: updated
      };
    }
    case DELETE_LOCATION_SUCCESS:
      return {
        ...state,
        data: state.data.filter(item => item._id !== action.payload._id)
      };
    default: {
      return state
    }
  }
}
