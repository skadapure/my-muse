import React from 'react';
import PropTypes from 'prop-types';
import SoundPlayer from '../SoundPlayer';
import PlayIcon from './play.png';
import PauseIcon from './pause.png';
import StopIcon from './stop.png';

class Play extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playStatus: 'STOPPED',
    };
  }
  render() {
    return (
      <div>
        <a
          role="button"
          tabIndex="0"
          style={{ border: 'none', margin: 'auto', height: '20px', width: '20px' }}
          onClick={() => {
            if (this.state.playStatus === 'PLAYING' && this.props.isVoiceEnabled) {
              this.setState({ playStatus: 'STOPPED' });
            } else if (this.state.playStatus === 'PLAYING' && !this.props.isVoiceEnabled) {
              this.setState({ playStatus: 'PAUSED' });
            } else if (this.state.playStatus === 'PAUSED' || this.state.playStatus === 'STOPPED') {
              this.setState({ playStatus: 'PLAYING' });
            }
            console.log(this.state.playStatus);
          }}
        >
          {this.state.playStatus === 'PLAYING' && this.props.isVoiceEnabled && <img src={StopIcon} alt="Stop" />}
          {this.state.playStatus === 'PLAYING' && !this.props.isVoiceEnabled && <img src={PauseIcon} alt="Pause" />}
          {(this.state.playStatus === 'PAUSED' || this.state.playStatus === 'STOPPED') && <img style={{ marginLeft: '0.20rem' }} src={PlayIcon} alt="Play" />}
        </a>
        <SoundPlayer playStatus={this.state.playStatus} url={this.props.url} />
      </div>
    );
  }
}

Play.propTypes = {
  url: PropTypes.string.isRequired,
  isVoiceEnabled: PropTypes.bool.isRequired,
};

export default Play;
