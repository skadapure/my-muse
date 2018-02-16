/**
 * Testing the AboutPage
 */

import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import H2 from 'components/H2';
import About from '../index';

describe('<About />', () => {
  it('should render the About text', () => {
    const renderedComponent = shallow(
      <About />
    );
    expect(renderedComponent.contains(
      <H2 style={{ marginTop: '0px' }}>
        <FormattedMessage
          id="boilerplate.containers.ContactPage.header"
          defaultMessage={'Contact'}
        />
      </H2>)).toEqual(true);
  });
});
