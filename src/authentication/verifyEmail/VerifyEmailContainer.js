import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import VerifyEmail from './VerifyEmail';
import { verifyEmailAddress } from '../../redux/actions/authenticationActions';
import { responseStatus } from '../../redux/actions/requestActions';

class VerifyEmailContainer extends Component {
  componentDidMount = () => {
    this.props.verifyEmailAddress(this.props.match.params);
  }

  componentWillUnmount = () => {
    this.props.responseStatus('nostatus');
  }

  render = () => {

    return (
      <VerifyEmail responseStatus={this.props.responseStatus} />
    );
  }
}

function mapStateToProps({ requests: { responseStatus } }) {
  return {
    responseStatus
  }
}
export default withRouter(connect(mapStateToProps, { verifyEmailAddress, responseStatus })(VerifyEmailContainer));
