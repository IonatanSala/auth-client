import { LOADING } from '../actions/actionTypes';

const initialState = false;

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return action.payload;
    default:
      return state;
  }
}

export default loadingReducer;
