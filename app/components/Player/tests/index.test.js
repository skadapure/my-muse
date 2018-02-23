/**
 * Testing our link component
 */

import React from 'react';
import { shallow } from 'enzyme';
import { Media, Player } from 'react-media-player';
import AudioPlayer from '../index';

const renderComponent = () => shallow(
  <AudioPlayer />
);

describe('Player Component', () => {
  it('should render a Player', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find(Media).length).toBe(1);
    expect(renderedComponent.find(Player).length).toBe(1);
  });
});
