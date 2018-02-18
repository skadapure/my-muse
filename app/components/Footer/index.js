import React from 'react';
import { FormattedMessage } from 'react-intl';

import Wrapper from './Wrapper';
import A from '../A';
import messages from './messages';

function Footer() {
  return (
    <Wrapper style={{ padding: '1rem 0' }}>
      <section style={{ width: '100%', fontSize: 'x-small' }}>
        <code>&copy;</code>
        <FormattedMessage {...messages.copyrightMessage} />
        <div style={{ display: 'inline', marginLeft: '1rem' }}>
          <span>
            <A href="/disclosure">Disclosure</A>
          </span>
          <span> | </span>
          <span>
            <A href="/about">About</A>
          </span>
        </div>
      </section>
    </Wrapper>
  );
}

export default Footer;
