import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';

import { getToken } from '../actions/authenticationActions';
import { SIGN_IN } from '../actions/actionTypes';

// configure redux store.
function configureStore() {
  let store;

  store = createStore(reducer, applyMiddleware(thunk));

  // if jwt exists, user is logged in.
  if(getToken()) store.dispatch({ type: SIGN_IN });

  return store;
}

export default configureStore();
