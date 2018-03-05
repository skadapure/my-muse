/**
 * Testing our link component
 */

import React from 'react';
import { shallow } from 'enzyme';
import SoundPlayer from 'components/SoundPlayer';


import messages from '../../../containers/DisclosurePage/messages';

const renderComponent = () => shallow(
  <SoundPlayer src="https://s3/somebucker/someaudio.mp3" playStatus="PLAYING" />
);

describe('Message Component', () => {
  it('should render a playable component', () => {
    const renderedComponent = renderComponent(messages);
    expect(renderedComponent.find('Sound').length).toBe(1);
  });
});
