import React from 'react';
import { FormattedMessage } from 'react-intl';

import Wrapper from './Wrapper';
import messages from './messages';

function Footer() {
  return (
    <Wrapper>
      <section>
        <code>&copy;</code>
        <FormattedMessage {...messages.copyrightMessage} />
      </section>
    </Wrapper>
  );
}

export default Footer;
