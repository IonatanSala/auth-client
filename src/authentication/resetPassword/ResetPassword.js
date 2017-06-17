import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Card, Col, Row } from 'antd';
import { signUpValidate } from '../validate';
import { renderField } from '../renderField';
import { AuthCardTitle, AuthCardText, AuthCardLink, AuthSubmitButton, AuthCard, Logo, MainSectionContainer, StyledRow } from '../authStyledComponents';

const ResetPassword = ({ handleSubmit }) => (
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
                <AuthCardTitle>Reset your password</AuthCardTitle>
              </Col>
              <Col xs={24} sm={18} md={14}>
                <Field name="newPassword" type="password" placeholder="New Password" component={renderField} label="New Password" />
              </Col>
              <Col xs={24} sm={18} md={14}>
                <AuthSubmitButton type="primary" size="large" htmlType="submit">Submit</AuthSubmitButton>
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
  form: 'ResetPassword',
  validate: signUpValidate
})(ResetPassword);
