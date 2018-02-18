/**
 * Testing our link component
 */

import React from 'react';
import { shallow } from 'enzyme';

import Detail from '../index';

const renderComponent = () => shallow(
  <Detail>
    This is a message
  </Detail>
);

describe('Message Detail Component', () => {
  it('should render a detailed span', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('section').length).toBe(1);
    expect(renderedComponent.find('section').contains('This is a message')).toBe(true);
  });
});
