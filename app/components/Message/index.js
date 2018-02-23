/**
 * A link to a certain page, an anchor tag
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Detail from 'components/MessageDetail';
import Player from 'components/Player';

import H4 from './H4';

function Message(props) {
  return (
    <article>
      <H4>
        <FormattedMessage {...props.header} />
      </H4>
      { props.src &&
        <div style={{ marginLeft: '-0.45rem', fontColor: 'red' }}>
          <Player src={props.src} />
        </div>
      }
      <Detail>
        <p>
          <FormattedMessage {...props.detail} />
        </p>
      </Detail>
    </article>
  );
}

Message.propTypes = {
  header: PropTypes.object,
  detail: PropTypes.object,
  src: PropTypes.string,
};

export default Message;
