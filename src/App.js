import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Router from './routes/Router';

const Section = styled.section`
  font-family: 'Helvetica Neue', 'Helvetica';
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
`;

class App extends Component {
  render() {
    const { authenticated } = this.props;
    return (
      <Section className="application-container">
        { authenticated && 'You are authenticated' }
        { !authenticated && 'You are not authenticated' }
        <Router />
      </Section>
    );
  }
}

const mapStateToProps = ({ user: { authenticated }}) => ({
  authenticated,
});

export default connect(mapStateToProps)(App);
