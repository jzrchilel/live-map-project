const initialState = {
  pending: false,
  data: [],
  error: {}
};

export default (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_CITIES_SUCCESS': {
      return {
        pending: false,
        data: action.payload,
        error: {}
      }
    }
    default: {
      return state
    }
  }
}
