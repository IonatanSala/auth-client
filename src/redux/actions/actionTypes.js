export const API_ENDPOINT =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_API_ENDPOINT
    : 'http://localhost:8000';

console.log(API_ENDPOINT);
export const CREATE_ACCOUNT = 'CREATE_ACCOUNT';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';
export const RESEND_CONFIRMATION_INSTRUCTIONS =
  'RESEND_CONFIRMATION_INSTRUCTIONS';
export const LOADING = 'LOADING';

export const RESPONSE_STATUS = 'RESPONSE_STATUS';
