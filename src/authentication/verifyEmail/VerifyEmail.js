import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Icon, Row } from 'antd';
import styled from 'styled-components';
import { AuthCardTitle, AuthSubmitButton, AuthCard, MainSectionContainer, StyledRow, textColor } from '../authStyledComponents';

const EmailIcon = styled(Icon)`
  display: block;
  font-size: 4em;
`;

const P = styled.p`
  margin: 0 0 2em 0;
  font-size: 1.2em;
  color: ${textColor};
  text-align: center;
`;

const ButtonLink = AuthSubmitButton.withComponent('a');

const ButtonLinkExtended = ButtonLink.extend`
  height: inherit;
  position: absolute;
  text-align: center;
  width: 100%;
  padding: 1.2em 0;
  background-color: #3B5998;
  color: white;
  border-radius: 4px;

  &:hover {
    color: white;
    opacity: .7;
  }
`;



const VerifyEmail = ({ responseStatus }) => (
  <MainSectionContainer>
    <StyledRow type="flex" justify="center" >
      <Col xs={23} sm={12} md={10} >
        <AuthCard>
          <Row type="flex" justify="center">
            <Col xs={24} sm={20} md={18}>
              <EmailIcon type="mail" />
            </Col>
            <Col xs={24} sm={20} md={18}>
              <AuthCardTitle >Email Verification</AuthCardTitle>
            </Col>
            <Col xs={24} sm={20} md={18}>
              {responseStatus === 'nostatus'
                &&
                <P><Icon type="loading" /> Verifying your email...</P>
              }

              {responseStatus === 'error'
                &&
                <P>Something went wrong, please check your email and make sure you clicked the latest link. <Link to="/sendVerificationEmail" >Resend Confirmation Insturctions</Link></P>
              }

              {responseStatus === 'success'
                &&
                <P>Your email address is verified. You can now sign in.</P>
              }
            </Col>
            <Col xs={24} sm={20} md={18}>
              <ButtonLinkExtended href="/signin">Sign In</ButtonLinkExtended>
            </Col>
          </Row>

        </AuthCard>
      </Col>
    </StyledRow>
  </MainSectionContainer>
);

export default VerifyEmail;
