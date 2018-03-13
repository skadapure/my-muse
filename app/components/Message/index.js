/**
 * A link to a certain page, an anchor tag
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Detail from 'components/MessageDetail';
import Play from 'components/Play';

import H4 from './H4';

function Message(props) {
  return (
    <article>
      <H4>
        <FormattedMessage {...props.header} />
      </H4>
      <Detail>
        <div style={{ display: 'flex' }}>
          { props.src &&
            <div style={{ flex: '1 1 auto' }}>
              <div style={{ marginLeft: '-0.45rem', fontColor: 'red' }}>
                <Play url={props.src} isVoiceEnabled={props.isVoiceEnabled} setCurrent={props.setCurrent} />
              </div>
            </div>
          }
          <div style={{ flex: '1 1 auto' }}>
            <FormattedMessage {...props.detail} />
          </div>
        </div>
      </Detail>
    </article>
  );
}

Message.propTypes = {
  header: PropTypes.object,
  detail: PropTypes.object,
  src: PropTypes.string,
  isVoiceEnabled: PropTypes.bool,
  setCurrent: PropTypes.func,
};

export default Message;
