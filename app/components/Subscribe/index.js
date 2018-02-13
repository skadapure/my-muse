import React from 'react';
import Input from 'components/Input';
import Form from 'components/Form';
import Button from 'components/Button';

function Subscribe() {
  return (
    <Form style={{ marginBottom: "1rem" }}>
      <Input
        id="username"
        type="text"
        placeholder="mxstbr"
        value="email id"
      />
      <Button>Subscribe</Button>
    </Form>
  );
}

export default Subscribe;
