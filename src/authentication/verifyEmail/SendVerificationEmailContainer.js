import React, { Component } from 'react';
import SendVerificationEmail from './SendVerificationEmail';
import { resendConfirmationInstructions } from '../../redux/actions/authenticationActions';

class SendVerificationEmailContainer extends Component {
  render = () => {
    return (
      <SendVerificationEmail onSubmit={resendConfirmationInstructions} />
    );
  }
}


export default SendVerificationEmailContainer;
