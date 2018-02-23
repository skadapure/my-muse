import React from 'react';
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
            <Player src="https://s3.amazonaws.com/noneggatarian-audio/disclosure/disclosure_npii.mp3" vendor="audio" />
          </div>
          <div className="media-controls">
            <PlayPause style={{ fontWeight: 'bold' }} />
          </div>
        </div>
      </Media>
    );
  }
}

export default MediaPlayer;
