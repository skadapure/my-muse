/**
 * Test the HomePage
 */

import React from 'react';
import { shallow } from 'enzyme';
import Subscribe from 'components/Subscribe';
import Form from 'components/Form';
import Input from 'components/Input';

describe('Subscribe email test', () => {
  it('should render the subscribe component', () => {
    const renderedComponent = shallow(<Subscribe />);
    expect(renderedComponent.find(Form).length).toBe(1);
    expect(renderedComponent.find(Input).length).toBe(1);
  });
});
