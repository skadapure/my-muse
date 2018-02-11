import React from 'react';
import Input from 'components/Input';
import Form from 'components/Form';

function Subscribe() {
  return (
    <Form>
      <Input
        id="username"
        type="text"
        placeholder="mxstbr"
        value="email id"
      />
    </Form>
  );
}

export default Subscribe;
