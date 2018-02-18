/**
 * About
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */
import React from 'react';

import Message from 'components/Message';
import MainMessage from 'components/MainMessage';
import messages from './messages';


export default function DisclosurePage() {
  return (
    <article>
      <MainMessage header={messages.header} detail={messages.general} />
      <Message header={messages.personalHeader} detail={messages.personal} />
      <Message header={messages.nonpersonalHeader} detail={messages.nonpersonal} />
      <Message header={messages.cookiesHeader} detail={messages.cookies} />
      <Message header={messages.protectHeader} detail={messages.protect} />
      <Message header={messages.shareHeader} detail={messages.share} />
      <Message header={messages.thirdPartyHeader} detail={messages.thirdParty} />
      <Message header={messages.advertiseHeader} detail={messages.advertise} />
      <Message header={messages.noticeHeader} detail={messages.notice} />
    </article>
  );
}
