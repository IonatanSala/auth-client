import { Button, Card, Input as AntdInput, Row } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const backgroundColor = '#F7FAFD';
const textColor = '#9aa8be';
const inputBorder = '#d6e0f1';
const black = '#4a5669';

export const MainSectionContainer = styled.section`
  background-color: ${backgroundColor};
  min-height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledRow = styled(Row)`
  width: 100%;
`;

export const AuthCard = styled(Card)`
  padding-top: 4em;
  padding-bottom: 4em;
  border: 0;
  box-shadow: 0 4px 14px rgba(36,129,215,0.1), 0 2px 6px rgba(36,129,215,0.08);

  &:hover {
    box-shadow: none;
    box-shadow: 0 4px 14px rgba(36,129,215,0.1), 0 2px 6px rgba(36,129,215,0.08);
  }
`;

export const AuthSubmitButton = styled(Button)`
  width: 100%;
  height: 3.5em;
  text-transform: uppercase;
  font-weight: 400;
  box-shadow: 0 7px 14px rgba(36,129,215,0.1), 0 3px 6px rgba(36,129,215,0.08);
  transition: .5s;
  &:hover {
    transform: translateY(-1px);
  }
`;

export const Input = styled(AntdInput)`
  border-radius: 0;
  height: 3.3em;
  border: 1px solid ${inputBorder};
  font-weight: 500;


  &:placeholder {
    color: ${textColor};
  }
`;

export const P = styled.p`
  text-transform: uppercase;
  color: ${textColor};
  font-weight: 500;
  font-size: 1.1em;
  letter-spacing: 1px;
`;

export const AuthCardText = styled.p`
  margin-top: 2em;
  text-align: center;
  font-weight: 400;
  font-size: 1.1em;
  color: ${textColor};
`;

export const AuthCardLink = styled(Link)`
  color: ${textColor};
  font-weight: bold;

`;

export const AuthCardTitle = styled.h3`
  text-align: center;
  font-weight: 500;
  font-size: 2.2em;
  color: ${black};
  margin-bottom: 1.5em;
`;
