/**
 * Testing our link component
 */

import React from 'react';
import { mount } from 'enzyme';

import Img from '../Img';

import egglessPancakes from '../../../recipes/eggless-pancakes';

const renderComponent = () => mount(
  <Img image={egglessPancakes.image} />
);
describe('Img Component', () => {
  it('should render a Img', () => {
    const renderedComponent = renderComponent();
    console.log(JSON.stringify(renderComponent));
    expect(renderedComponent.find('Img').length).toBe(1);
  });
});
