import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../redux/actions/authenticationActions';
import { Redirect } from 'react-router-dom';

class SignOutContainer extends Component {
  componentWillMount = () => {
    // sign out of the application
    this.props.signOut();
  }

  render = () => {
    return (
      <Redirect to="/" />
    )
  }
}

export default connect(null, { signOut })(SignOutContainer);
