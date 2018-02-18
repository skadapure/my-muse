import React from 'react';
import { shallow } from 'enzyme';

import H4 from '../H4';

describe('<H4 />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const renderedComponent = shallow(
      <H4 id={id} />
    );
    expect(renderedComponent.prop('id')).toEqual(id);
  });
});
