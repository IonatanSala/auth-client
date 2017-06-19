import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ResetPassword from './ResetPassword';
import { resetPassword } from '../../redux/actions/authenticationActions';


class ResetPasswordContainer extends Component {
  render = () => {
    const { params } = this.props.match;
    console.log(params);
    return (
      <ResetPassword onSubmit={resetPassword} initialValues={params} />
    );
  }
}


export default withRouter(ResetPasswordContainer);
