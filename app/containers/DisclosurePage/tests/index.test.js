/**
 * Testing the NotFoundPage
 */

import React from 'react';
import { shallow } from 'enzyme';

import MainMessage from 'components/MainMessage';
import Message from 'components/Message';
import DisclosurePage from '../index';

describe('Disclosure Page', () => {
  it('should render the Disclosure Page', () => {
    const renderedComponent = shallow(
      <DisclosurePage />
    );
    expect(renderedComponent.find(MainMessage).length).toBe(1);
    expect(renderedComponent.find(Message).length).toBe(8);
  });
});
