/**
 * Testing the AboutPage
 */

import React from 'react';
import { shallow } from 'enzyme';

import MainMessage from 'components/MainMessage';
import About from '../index';
import messages from '../messages';
describe('<About />', () => {
  it('should render About us', () => {
    const renderedComponent = shallow(
      <About />
    );
    expect(renderedComponent.find(MainMessage).length).toBe(1);
    expect(renderedComponent.contains(
      <MainMessage header={messages.header} detail={messages.introduction} />
    )).toBe(true);
  });
});
