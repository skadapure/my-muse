/**
 * Test the HomePage
 */

import React from 'react';
import { shallow } from 'enzyme';
import Subscribe from 'components/Subscribe';
import Button from 'components/Button';
import Input from 'components/Input';

describe('Subscribe email test', () => {
  it('should render the subscribe component', () => {
    const renderedComponent = shallow(<Subscribe />);
    expect(renderedComponent.find(Button).length).toBe(1);
    expect(renderedComponent.find(Input).length).toBe(1);
  });
});
