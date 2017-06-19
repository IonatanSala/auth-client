import { RESPONSE_STATUS } from '../actions/actionTypes';

const initialState = { responseStatus: 'nostatus' };

const requestsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESPONSE_STATUS:
      return { ...state, responseStatus: action.payload }
    default:
      return state;
  }
}

export default requestsReducer;
