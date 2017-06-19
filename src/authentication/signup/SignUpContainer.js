import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SignUp from './SignUp';
import { createAccount } from '../../redux/actions/authenticationActions';

class SignUpContainer extends Component {

  render = () => {
    return (
      <SignUp onSubmit={createAccount} loading={this.props.loading} />
    );
  }
}

function mapStateToProps({ loading }) {
  return {
    loading
  };
}

export default withRouter(connect(mapStateToProps)(SignUpContainer));
