import React from 'react';
import Input from 'components/Input';
import Button from 'components/Button';

class Subscribe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailId: '',
      subscribe: false,
    };
  }

  render() {
    return (
      <div style={{ marginBottom: '1rem' }}>
        <Input
          id="username"
          type="text"
          placeholder="email id"
        />
        <Button>
          Subscribe
        </Button>
      </div>
    );
  }
}

export default Subscribe;
