/**
 * Testing our link component
 */

import React from 'react';
import { shallow } from 'enzyme';

import RecipeBrief from '../index';

import egglessPancakes from '../../../recipes/eggless-pancakes';

const renderComponent = () => shallow(
  <RecipeBrief recipe={egglessPancakes} />
);

describe('Recipe Brief Component', () => {
  it('should render a recipe', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('Img').length).toBe(1);
  });
});
