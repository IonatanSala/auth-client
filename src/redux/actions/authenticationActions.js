import axios from 'axios';
import { SubmissionError } from 'redux-form';
import { API_ENDPOINT, CREATE_ACCOUNT } from './actionTypes';


export function createAccount(values, dispatch) {
  const { email, password } = values;
  const newUser = { email, password };

  return axios.post(`${API_ENDPOINT}/users`, newUser)
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e)
      console.log(e.response);
      const errorsObject = e.response.data.errors;
      if(errorsObject) {
        if(errorsObject.email) {
          throw new SubmissionError({ email: errorsObject.email.message });
        }
      }

    });
}
