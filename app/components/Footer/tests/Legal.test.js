import React from 'react';
import { shallow } from 'enzyme';

import Legal from '../Legal';

describe('<Legal />', () => {
  it('should render an <footer> tag', () => {
    const renderedComponent = shallow(<Legal />);
    expect(renderedComponent.type()).toEqual('div');
  });
});
