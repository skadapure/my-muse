import React from 'react';
import { shallow } from 'enzyme';

import H3 from '../H3';

describe('<H3 />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const renderedComponent = shallow(
      <H3 id={id} />
    );
    expect(renderedComponent.prop('id')).toEqual(id);
  });
});
