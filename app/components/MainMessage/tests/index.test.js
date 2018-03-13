/**
 * Testing our link component
 */

import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';
import Detail from 'components/MessageDetail';

import messages from '../../../containers/DisclosurePage/messages';
import Message from '../index';
import H3 from '../H3';
const renderComponent = (props) => shallow(
  <Message header={props.header} details={props.general}>
  </Message>
);

describe('Message Component', () => {
  it('should render a message article', () => {
    const renderedComponent = renderComponent(messages);
    expect(renderedComponent.find('article').length).toBe(1);
    expect(renderedComponent.find(H3).length).toBe(1);
    expect(renderedComponent.find(Detail).length).toBe(1);
    // TODO: fix detail formatted message assertion
    expect(renderedComponent.contains(
      <article>
        <H3>
          <FormattedMessage {...messages.header} />
        </H3>
        <Detail>
          <FormattedMessage />
        </Detail>
      </article>
    )).toBe(true);
  });
});
