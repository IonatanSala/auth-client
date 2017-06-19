import React from 'react';
import axios from 'axios';
import { SubmissionError } from 'redux-form';
import { Link } from 'react-router-dom';
import { notification, message } from 'antd';
import { API_ENDPOINT, LOADING } from './actionTypes';
import { loading, responseStatus } from './requestActions';

export function createAccount(values, dispatch) {
  const { email, password } = values;
  const newUser = { email, password };

  loading(true, dispatch);
  return axios.post(`${API_ENDPOINT}/users`, newUser)
    .then((res) => {
      loading(false, dispatch);
      notification.success({
        message: 'Account Created',
        description: 'A confirmation email has been sent to your email address. Please click the link in the email to verify your account.',
        duration: null
      });
    })
    .catch((e) => {
      loading(false, dispatch);
      const errorsObject = e.response.data.errors;
      if(errorsObject) {
        if(errorsObject.email) {
          throw new SubmissionError({ email: errorsObject.email.message });
        }
      }
    });
}

export function signIn(values, dispatch) {
  const userDetails = values;

  return axios.post(`${API_ENDPOINT}/authentication`, userDetails)
    .then((res) => {
      console.log('Success');
      console.log(res);
    })
    .catch((err) => {
      console.log('Error');
      console.log(err.response);

      if(err.response.data.errors) {
        notification.info({
          message: 'Verify your email',
          description: (<p>You shoud have received instructions to confirm your account at your email address. <a href="/sendVerificationEmail">Resend Email Confirmation Instructions.</a></p>),
          duration: null
        });
        throw new SubmissionError({ email: err.response.data.errors.message });
      } else {
        notification.error({
          message: 'Sign in error',
          description: 'User doesn\'t exist with them credentials',
          duration: null
        });

        throw new SubmissionError({ email: 'Wrong credentials', password: 'Wrong credentials' });
      }
    });
}

export function resendConfirmationInstructions(values, dispatch) {
  const { email } = values;
  loading(true, dispatch);
  return axios.get(`${API_ENDPOINT}/users/sendVerificationEmail/${email}`)
    .then((res) => {
      loading(false, dispatch);

      if(res.data.data.emailVerified) {
        notification.info({
          message: 'Email verified',
          description: <p>Your email has already been verified. <a href="/signin">Sign in</a></p>,
          duration: null
        })


      } else {
        notification.success({
          message: 'Confirmation Email Sent',
          description: 'A confirmation email has been sent to your email address. Please click the link in the email to verify your account.',
          duration: null
        })
      }

    })
    .catch((err) => {
      loading(false, dispatch);;
      if(err.response.data.errors) {
        throw new SubmissionError({ email: err.response.data.errors.email.message})
      }
    });
}

export function verifyEmailAddress({ userID, emailKey }) {
  return dispatch => {
    loading(true, dispatch);
    axios.get(`${API_ENDPOINT}/users/verify/${userID}/${emailKey}`)
      .then((res) => {
        responseStatus('success', dispatch);
        loading(false, dispatch);
      })
      .catch((err) => {
        responseStatus('error', dispatch);
        loading(false, dispatch);
      })
  };
}

export function sendResetInstructions(values, dispatch) {
  const { email } = values;

  return axios.get(`${API_ENDPOINT}/users/resetPassword/${email}`)
    .then((res) => {
      notification.success({
        message: 'Reset Email Sent',
        description: 'A reset email has been sent to your email address. Please click the link in the email to change your password',
        duration: null
      });
    })
    .catch((err) => {
      notification.error({
        message: 'Error',
        description: 'Something went wrong, please try again.',
        duration: null
      });
    });
}

export function resetPassword(values, dispatch) {

  return axios.put(`${API_ENDPOINT}/users/resetPassword`, values)
    .then((res) => {
      console.log(res);
      notification.success({
        message: 'Password Changed',
        description: <p>Your password has been changed. <a href="/signin">Sign in</a></p>,
        duration: null
      });
    })
    .catch((err) => {
      console.log(err.response);
      notification.error({
        message: 'Error',
        description: 'Something went wrong. Please make sure you clicked the latest link in your email to changed your password.',
        duration: null
      });
    })
}
