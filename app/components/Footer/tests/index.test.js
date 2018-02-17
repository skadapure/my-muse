import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import messages from '../messages';
import Footer from '../index';
import A from '../../A';

describe('<Footer />', () => {
  it('should render the copyright notice', () => {
    const renderedComponent = shallow(<Footer />);
    expect(renderedComponent.contains(
      <section style={{ width: '100%', fontSize: 'x-small' }}>
        <code>&copy;</code>
        <FormattedMessage {...messages.copyrightMessage} />
        <div style={{ display: 'inline', marginLeft: '1rem', borderTop: 'border-bottom: 1px solid #666;' }}>
          <span>
            <A>Disclosure</A>
          </span>
          <span> | </span>
          <span>
            <A href="/about">About</A>
          </span>
        </div>
      </section>
    )).toBe(true);
  });
});
