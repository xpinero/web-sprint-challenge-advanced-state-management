import { FETCH_SMURF_GET, FETCH_SMURF_FOUND, FETCH_SMURF_FAILURE } from '../actions/smurfActions';

export const initialState = {
  loading: false,
  errors: '',
  smurfs: []
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_GET:
      return {
        ...state,
        loading: true
      };
    case FETCH_SMURF_FOUND:
      return {
        ...state,
        smurfs: action.payload,
        loading: false,
        errors: ''
      };
    case FETCH_SMURF_FAILURE:
      return {
        ...state,
        errors: state.errors,
        loading: false
      };
    default:
      return state
  }
};