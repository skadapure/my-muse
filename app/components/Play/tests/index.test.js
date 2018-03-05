/**
 * Testing our link component
 */

import React from 'react';
import { shallow } from 'enzyme';
import Play from 'components/Play';


import messages from '../../../containers/DisclosurePage/messages';

const renderComponent = () => shallow(
  <Play src="https://s3/somebucker/someaudio.mp3" isVoisceEnabled />
);

describe('Message Component', () => {
  it('should render a playable component', () => {
    const renderedComponent = renderComponent(messages);
    expect(renderedComponent.find('SoundPlayer').length).toBe(1);
    expect(renderedComponent.find('a').length).toBe(1);
    expect(renderedComponent.find('img').length).toBe(1);
  });
});
