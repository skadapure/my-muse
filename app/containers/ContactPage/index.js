/**
 * About
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import H2 from 'components/H2';
import A from 'components/A';
import messages from './messages';

const Introduction = styled.section`
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

export default function ContactPage() {
  return (
    <article>
      <H2 style={{ marginTop: '0px' }}>
        <FormattedMessage {...messages.header} />
      </H2>
      <Introduction>
        <FormattedMessage {...messages.message} /><A href="mailto:noneggetarian@gmail.com" style={{ marginLeft: '0px' }}>noneggetarian@gmail.com</A>
      </Introduction>
    </article>
  );
}
