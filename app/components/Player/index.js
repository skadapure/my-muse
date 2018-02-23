import React from 'react';
import PropTypes from 'prop-types';
import { Media, Player, controls } from 'react-media-player';
const { PlayPause } = controls;

class MediaPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailId: '',
      subscribeResult: 'Subscribe',
    };
  }
  render() {
    return (
      <Media>
        <div className="media">
          <div className="media-player">
            <Player src={this.props.src} vendor="audio" />
          </div>
          <div className="media-controls">
            <PlayPause style={{ fontWeight: 'bold' }} />
          </div>
        </div>
      </Media>
    );
  }
}

MediaPlayer.propTypes = {
  src: PropTypes.string,
};

export default MediaPlayer;
