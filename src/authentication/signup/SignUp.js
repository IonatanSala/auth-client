import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Card, Col, Row } from 'antd';
import { signUpValidate } from '../validate';
import { renderField } from '../renderField';
import { AuthCardTitle, AuthCardText, AuthCardLink, AuthSubmitButton, AuthCard, MainSectionContainer, StyledRow } from '../authStyledComponents';

const SignUp = ({ handleSubmit }) => (
  <MainSectionContainer>
    <StyledRow type="flex" justify="center" >
      <Col xs={24} sm={12} md={10} >
        <AuthCard>
          <form onSubmit={handleSubmit}>
            <Row type="flex" justify="center" >
            <Col xs={24} sm={18} md={14}>
              <AuthCardTitle>Create your free account</AuthCardTitle>
            </Col>
              <Col xs={24} sm={18} md={14}>
                <Field name="email" type="email" placeholder="Email" component={renderField} label="Email" />
              </Col>
              <Col xs={24} sm={18} md={14}>
                <Field name="password" type="password" placeholder="Password" component={renderField} label="Password" />
              </Col>
              <Col xs={24} sm={18} md={14}>
                <Field name="password_confirm" type="password" placeholder="Confirm Password" component={renderField} label="Confirm Password" />
              </Col>
              <Col xs={24} sm={18} md={14}>
                <AuthSubmitButton type="primary" size="large" htmlType="submit">Sign up</AuthSubmitButton>
              </Col>
              <Col xs={24} sm={18} md={14}>
                <AuthCardText>Already have an account? <AuthCardLink to="/signin" >Sign in here</AuthCardLink></AuthCardText>
              </Col>
            </Row>
          </form>
        </AuthCard>
      </Col>
    </StyledRow>
  </MainSectionContainer>
);

export default reduxForm({
  form: 'SignUp',
  validate: signUpValidate
})(SignUp);
