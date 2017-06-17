import { CREATE_ACCOUNT } from '../actions/actionTypes';

const initialState = {};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ACCOUNT:
      return state;
    default:
      return state;
  }
}

export default authenticationReducer;
