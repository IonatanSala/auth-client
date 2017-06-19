import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import SignIn from './SignIn';
import { signIn } from '../../redux/actions/authenticationActions';

class SignInContainer extends Component {
  render = () => {
    return (
      <SignIn onSubmit={signIn} />
    );
  }
}

export default withRouter(connect()(SignInContainer));
