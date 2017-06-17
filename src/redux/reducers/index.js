import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authenticationReducer from './authenticationReducer';

const reducers = combineReducers({
  form: formReducer,
  authentication: authenticationReducer
});

export default reducers;
