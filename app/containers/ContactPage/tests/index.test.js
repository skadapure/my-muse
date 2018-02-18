/**
 * Testing the AboutPage
 */

import React from 'react';
import { shallow } from 'enzyme';

import A from 'components/A';
import MainMessage from 'components/MainMessage';
import Contact from '../index';
import messages from '../messages';
describe('<About />', () => {
  it('should render Contact details', () => {
    const renderedComponent = shallow(
      <Contact />
    );
    expect(renderedComponent.find(MainMessage).length).toBe(1);
    expect(renderedComponent.find(MainMessage).contains(
      <MainMessage header={messages.header} detail={messages.message}>
        <A href="mailto:noneggetarian@gmail.com">noneggetarian@gmail.com</A>
      </MainMessage>
    )).toBe(true);
    expect(renderedComponent.find(A).length).toBe(1);
  });
});
