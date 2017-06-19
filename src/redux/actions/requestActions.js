import { RESPONSE_STATUS, LOADING } from './actionTypes';

/*
 status = 'success' | 'error' | 'nostatus'
*/
export const responseStatus = (status, dispatch = null) => {
  const action = {
    type: RESPONSE_STATUS,
    payload: status
  };

  if(dispatch) {
    return dispatch(action);
  }

  return action;
}

export const loading = (status, dispatch = null) => {
  const action = {
    type: LOADING,
    payload: status
  };

  if(dispatch) return dispatch(action);

  return action;
}
