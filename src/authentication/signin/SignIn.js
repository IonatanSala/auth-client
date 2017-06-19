import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Card, Col, Row } from 'antd';
import { signInValidate } from '../validate';
import { renderField } from '../renderField';
import { AuthCardTitle, AuthCardText, AuthCardLink, AuthSubmitButton, AuthCard, Logo, MainSectionContainer, StyledRow } from '../authStyledComponents';

const SignIn = ({ handleSubmit }) => (
  <MainSectionContainer>
    <StyledRow type="flex" justify="center" >
      <Col xs={23} sm={12} md={10} >
        <AuthCard>
          <form onSubmit={handleSubmit}>
            <Row type="flex" justify="center" >
              <Col xs={24} sm={18} md={14}>
                <Logo src="https://dashboard.messagebird.com/assets/images/logo/logo-icon.svg" alt="logo"/>
              </Col>
              <Col xs={24} sm={18} md={14}>
                <AuthCardTitle>Welcome back</AuthCardTitle>
              </Col>
              <Col xs={24} sm={18} md={14}>
                <Field name="email" type="email" placeholder="Email" component={renderField} label="Email" />
              </Col>
              <Col xs={24} sm={18} md={14}>
                <Field name="password" type="password" placeholder="Password" component={renderField} label="Password" />
              </Col>
              <Col xs={24} sm={18} md={14}>
                <AuthSubmitButton type="primary" size="large" htmlType="submit">Sign in</AuthSubmitButton>
              </Col>
              <Col xs={24} sm={18} md={14}>
                <AuthCardText>Don't have an account? <AuthCardLink to="/signup" >Sign up</AuthCardLink></AuthCardText>
              </Col>
              <Col xs={24} sm={18} md={14}>
                <AuthCardText><AuthCardLink to="/resetPassword" >I forgot my password!</AuthCardLink></AuthCardText>
              </Col>
            </Row>
          </form>
        </AuthCard>
      </Col>
    </StyledRow>
  </MainSectionContainer>
);

export default reduxForm({
  form: 'SignIn',
  validate: signInValidate
})(SignIn);
