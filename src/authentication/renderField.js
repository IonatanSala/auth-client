import React from 'react';
import { Form } from 'antd';
import { Input, P } from './authStyledComponents';

export function renderField({input, label, placeholder, type, meta: { touched, error} }) {
  let inputField;
  inputField = <Input {...input} placeholder={placeholder} type={type} />;

  return (
    <Form.Item
      validateStatus={(touched && error) ? 'error': ''}
      help={touched && error}
    >
      <div>
        <P className="form-input-info form-input-tile">{label}</P>
      </div>
      {inputField}
    </Form.Item>
  );

}
