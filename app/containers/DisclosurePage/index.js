/**
 * About
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */
import React from 'react';

import Message from 'components/Message';
import MainMessage from 'components/MainMessage';
import Player from 'components/Play';
import messages from './messages';


export default function DisclosurePage() {
  return (
    <article>
      <MainMessage header={messages.header} detail={messages.general} />

      <Player url="https://s3.amazonaws.com/noneggatarian-audio/disclosure/disclosure_pii.mp3" playStatus="STOPPED" isVoiceEnabled />
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
