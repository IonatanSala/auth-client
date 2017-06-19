import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SendResetPassword from './SendResetPassword';
import { sendResetInstructions } from '../../redux/actions/authenticationActions';

class SendResetPasswordContainer extends Component {
  render = () => {
    return (
      <SendResetPassword onSubmit={sendResetInstructions} />
    );
  }
}


export default withRouter(SendResetPasswordContainer);
