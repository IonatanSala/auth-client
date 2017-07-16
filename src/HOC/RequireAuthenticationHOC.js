import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const defaultConfig = { redirectUrl: '/' };
const RequireAuthenticationHOC = (config = defaultConfig) => {
  return (WrappedComponent) => {
    class HOC extends Component {
      componentWillMount = () => {
        if(!this.props.authenticated) this.props.history.replace(config.redirectUrl);
      };

      componentWillUpdate = (nextProps, nextState) => {
        debugger
        if(!nextProps.authenticated) this.props.replace(config.redirectUrl);
      }

      render = () => {
        return <WrappedComponent { ...this.props } />;
      }
    }

    const mapStateToProps = ({ user: { authenticated }}) => ({
      authenticated,
    });

    return withRouter(connect(mapStateToProps)(HOC));
  }
}



export default RequireAuthenticationHOC;
