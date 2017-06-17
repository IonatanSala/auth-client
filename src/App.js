import React, { Component } from 'react';
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
    return (
      <Section className="application-container">
        <Router />
      </Section>
    );
  }
}

export default App;
