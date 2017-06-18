import axios from 'axios';
import { SubmissionError } from 'redux-form';
import { notification } from 'antd';
import { API_ENDPOINT, CREATE_ACCOUNT } from './actionTypes';

export function createAccount(values, dispatch) {
  const { email, password } = values;
  const newUser = { email, password };
  const message = {
    message: 'Account Created',
    description: 'A confirmation email has been sent to your email address. Please click the link in the email to verify your account.',
    duration: null
  };

  return axios.post(`${API_ENDPOINT}/users`, newUser)
    .then((res) => {
      notification.success(message);
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
