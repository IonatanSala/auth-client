import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import SignIn from './SignIn';

class SignInContainer extends Component {
  render = () => {
    return (
      <SignIn />
    );
  }
}

export default withRouter(connect()(SignInContainer));
