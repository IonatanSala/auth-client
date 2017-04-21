import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom'

class Router extends Component {

  render = () => {
    return (
      <BrowserRouter >
        <section>
          <Route exact path="/" render={ (props) => ( <h1>Home Page</h1> )} />
          <Route path="/signin" render={ (props) => (<h1>Signin</h1>) } />
          <Route path="/signup" render={ (props) => (<h1>Signup</h1>) } />
          <Route exact path="/verifyEmail" render={ (props) => (<h1>VerifyEmail</h1>) } />
          <Route path="/verifyEmail/:id/:emailKey" render={ (props) => (<h1>VerifyEmail: {props.match.params.id} {props.match.params.emailKey}</h1>) } />
          <Route exact path="/resetPassword" render={ (props) => (<h1>Reset Password</h1>) } />
          <Route path="/resetPassword/:id/:passwordKey" render={ (props) => (<h1>Reset Password: {props.match.params.id} {props.match.params.passwordKey}</h1>) } />
        </section>
      </BrowserRouter>
    );
  }
}

export default Router;
