import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Col, Row } from 'antd';
import { resendEmailVerificationValidate } from '../validate';
import { renderField } from '../renderField';
import { AuthCardTitle, AuthCardText, AuthCardLink, AuthSubmitButton, AuthCard, Logo, MainSectionContainer, StyledRow } from '../authStyledComponents';

const SendVerificationEmail = ({ handleSubmit }) => (
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
                <AuthCardTitle>Resend Verification Email</AuthCardTitle>
              </Col>
              <Col xs={24} sm={18} md={14}>
                <AuthCardText>Enter your email address below and we'll send you a link to verify your account.</AuthCardText>
              </Col>
              <Col xs={24} sm={18} md={14}>
                <Field name="email" type="email" placeholder="Email" component={renderField} label="Email" />
              </Col>
              <Col xs={24} sm={18} md={14}>
                <AuthSubmitButton type="primary" size="large" htmlType="submit">Send Verify Instructions</AuthSubmitButton>
              </Col>
              <Col xs={24} sm={18} md={14}>
                <AuthCardText><AuthCardLink to="/signin" >Sign in</AuthCardLink> or <AuthCardLink to="/signup" >Sign up</AuthCardLink></AuthCardText>
              </Col>
            </Row>
          </form>
        </AuthCard>
      </Col>
    </StyledRow>
  </MainSectionContainer>
);

export default reduxForm({
  form: 'SendVerificationEmail',
  validate: resendEmailVerificationValidate
})(SendVerificationEmail);
