/**
 * About
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */
import React from 'react';

import MainMessage from 'components/MainMessage';
import messages from './messages';

export default function AboutPage() {
  return (
    <MainMessage header={messages.header} detail={messages.introduction} />
  );
}
