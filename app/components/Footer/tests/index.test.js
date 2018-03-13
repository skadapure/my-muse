import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../index';

describe('<Footer />', () => {
  it('should render the copyright notice', () => {
    const renderedComponent = shallow(<Footer />);
    expect(renderedComponent.find('section').length).toBe(1);
    expect(renderedComponent.find('div').length).toBe(1);
    expect(renderedComponent.find('span').length).toBe(3);
    // TODO: fix assertion
    // expect(renderedComponent.contains(
    //   <section style={{ width: '100%', fontSize: 'small' }}>
    //     <code>&copy;</code>
    //     <FormattedMessage {...messages.copyrightMessage} />
    //     <div style={{ display: 'inline', marginLeft: '1rem', borderTop: 'border-bottom: 1px solid #666;' }}>
    //       <span>
    //         <A href="/disclosure">Disclosure</A>
    //       </span>
    //       <span> | </span>
    //       <span>
    //         <A href="/about">About</A>
    //       </span>
    //     </div>
    //   </section>
    // )).toBe(true);
  });
});
