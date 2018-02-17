/**
 * About
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import H2 from 'components/H2';
import messages from './messages';

const Introduction = styled.section`
  text-align: justify;
  margin-bottom: 2rem;
  margin-top: 1rem;
`;

export default function AboutPage() {
  return (
    <article>
      <H2 style={{ marginTop: '0px' }}>
        <FormattedMessage {...messages.header} />
      </H2>
      <Introduction>
        <p>
          <FormattedMessage {...messages.introduction} />
        </p>
      </Introduction>
    </article>
  );
}
