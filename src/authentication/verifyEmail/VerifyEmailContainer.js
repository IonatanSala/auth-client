import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import VerifyEmail from './VerifyEmail';
import { verifyEmailAddress } from '../../redux/actions/authenticationActions';
import { responseStatus } from '../../redux/actions/requestActions';

class VerifyEmailContainer extends Component {
  componentDidMount = () => {
    this.props.verifyEmailAddress(this.props.match.params);
    console.log(this.props.responseStatus);
  }

  componentWillUnmount = () => {
    this.props.responseStatus('nostatus');
  }

  render = () => {
    debugger
    return (
      <VerifyEmail responseStatus={this.props.responseStatusProp} />
    );
  }
}

function mapStateToProps({ requests: { responseStatus } }) {
  return {
    responseStatusProp: responseStatus
  }
}
export default withRouter(connect(mapStateToProps, { verifyEmailAddress, responseStatus })(VerifyEmailContainer));
