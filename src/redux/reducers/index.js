import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authenticationReducer from './authenticationReducer';
import loadingReducer from './loadingReducer';
import requestsReducer from './requestsReducer';

const reducers = combineReducers({
  form: formReducer,
  authentication: authenticationReducer,
  loading: loadingReducer,
  requests: requestsReducer
});

export default reducers;
