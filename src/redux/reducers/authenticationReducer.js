import { CREATE_ACCOUNT, SIGN_IN, SIGN_OUT } from '../actions/actionTypes';

const initialState = {
  authenticated: false
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ACCOUNT:
      return state;
    case SIGN_IN:
      return { ...state, authenticated: true };
    case SIGN_OUT:
      return { ...state, authenticated: false };
    default:
      return state;
  }
}

export default authenticationReducer;
