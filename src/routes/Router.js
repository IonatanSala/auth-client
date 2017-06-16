import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

import SignInContainer from '../authentication/signin/SignInContainer';
import SignUpContainer from '../authentication/signup/SignUpContainer';
import VerifyEmailContainer from '../authentication/verifyEmail/VerifyEmailContainer';
import SendVerificationEmailContainer from '../authentication/verifyEmail/SendVerificationEmailContainer';
import SendResetPasswordContainer from '../authentication/resetPassword/SendResetPasswordContainer';
import ResetPasswordContainer from '../authentication/resetPassword/ResetPasswordContainer';

class Router extends Component {

  render = () => {
    return (
      <BrowserRouter >
        <section>
          <Route exact path="/" render={ (props) => ( <h1>Home Page</h1> )} />
          <Route path="/signin" component={SignInContainer} />
          <Route path="/signup" component={SignUpContainer} />
          <Route path="/verify/:userID/:emailKey" component={VerifyEmailContainer} />
          <Route path="/sendVerificationEmail" component={SendVerificationEmailContainer} />
          <Route exact path="/resetPassword" component={SendResetPasswordContainer} />
          <Route path="/resetPassword/:id/:resetKey" component={ResetPasswordContainer} />
        </section>
      </BrowserRouter>
    );
  }
}

export default Router;
