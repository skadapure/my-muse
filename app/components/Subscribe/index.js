import React from 'react';
import Input from 'components/Input';
import Button from 'components/Button';
import Validator from 'email-validator';
import axios from 'axios';

class Subscribe extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.subscribe = this.subscribe.bind(this);
    this.state = {
      emailId: '',
      subscribeResult: 'Subscribe',
    };
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({
      emailId: value,
    });
    // if(Validator.validate(value)) {}
  }

  subscribe() {
    const emailid = this.state.emailId;
    if (Validator.validate(emailid)) {
      this.postEmailId(emailid, this);
    }
  }

  postEmailId(emailid, scope) {
    return axios({
      url: 'https://6tdxaipp5a.execute-api.us-east-1.amazonaws.com/prod/dummy',
      timeout: 20000,
      method: 'post',
      data: {
        emailid,
      },
      headers: {
        accept: 'application/json',
        'accept-language': 'en_US',
        'content-type': 'application/x-www-form-urlencoded',
      },
    })
    .then(() => {
      scope.setState({
        subscribeResult: 'SUCCESS',
      });
    })
    .catch(() => {
      scope.setState({
        subscribeResult: 'FAILURE',
      });
    });
  }
  render() {
    return (
      <div style={{ marginBottom: '1rem' }}>
        <Input
          id="username"
          type="text"
          placeholder="email id"
          onChange={this.handleChange}
          style={{ maxWidth: '200px' }}
        />
        <Button
          onClick={this.subscribe}
        >
          {this.state.subscribeResult}
        </Button>
      </div>
    );
  }
}

export default Subscribe;
