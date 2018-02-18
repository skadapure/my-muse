/**
 * Contact
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */
import React from 'react';

import A from 'components/A';
import MainMessage from 'components/MainMessage';
import messages from './messages';

export default function ContactPage() {
  return (
    <MainMessage header={messages.header} detail={messages.message}>
      <A href="mailto:noneggetarian@gmail.com" style={{ marginLeft: '0' }}>noneggetarian@gmail.com</A>
    </MainMessage>
  );
}
