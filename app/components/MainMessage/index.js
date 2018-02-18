/**
 * A link to a certain page, an anchor tag
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Detail from 'components/MessageDetail';
import H3 from './H3';

function Message(props) {
  return (
    <article>
      <H3>
        <FormattedMessage {...props.header} />
      </H3>
      <Detail>
        <p>
          <FormattedMessage {...props.detail} />
          {Children.toArray(props.children)}
        </p>
      </Detail>
    </article>
  );
}

Message.propTypes = {
  header: PropTypes.object,
  detail: PropTypes.object,
  children: PropTypes.node,
};

export default Message;
