import React from 'react';
import PropTypes from 'prop-types';
import SoundPlayer from '../SoundPlayer';
import Micro from './microphone.png';
import DisabledMicro from './disablemicrophone.png';

class VoiceInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVoiceEnabled: false,
      previous: -1,
      current: props.current,
      next: 1,
      playStatus: 'STOPPED',
    };
  }

  componentDidMount() {
    if (window.webkitSpeechRecognition) {
      this.recognition = new window.webkitSpeechRecognition(); // eslint-disable-line new-cap
      this.recognition.onresult = this.onResult.bind(this);
      this.recognition.continuous = true;
    }
  }

  componentWillUnmount() {
    if (this.recognition) {
      this.recognition.stop();
    }
  }

  onResult(e) {
    if (!this.recognition || this.state.playStatus === 'PLAYING') return;
    const transcript = this.getLastTranscript(e.results);

    let prev = 0;
    let curr = 0;
    let next = 0;
    switch (transcript.trim()) {
      case 'next':
        if (!(this.state.next > this.props.audios.length)) {
          prev = this.state.previous + 1;
          curr = this.state.current + 1;
          next = this.state.next + 1;
          this.recognition.stop();
          this.setState({
            previous: prev,
            current: curr,
            next,
            playStatus: 'PLAYING',
          });
        }
        break;
      case 'repeat':
        this.setState({
          playStatus: 'PLAYING',
        });
        this.recognition.stop();
        break;
      case 'last':
        if (this.state.previous > 0) {
          prev = this.state.previous - 1;
          curr = this.state.current - 1;
          next = this.state.next - 1;
          this.recognition.stop();
          this.setState({
            previous: prev,
            current: curr,
            next,
            playStatus: 'PLAYING',
          });
        }
        break;
      default:
        break;
    }
  }

  getLastTranscript(results) {
    return results[results.length - 1][0].transcript;
  }

  findMatch(transcript, config) {
    if (transcript.indexOf(config.word) > -1) {
      this.runAction(config.action);
      this.runFeedback(config.feedback);
    }
  }

  runAction(action) {
    if (typeof this[action] === 'function') {
      this[action]();
    }
  }

  runFeedback(feedback) {
    if (feedback && window.SpeechSynthesisUtterance) {
      const message = new SpeechSynthesisUtterance(feedback);
      speechSynthesis.speak(message);
    }
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            if (this.state.isVoiceEnabled) {
              this.recognition.stop();
              this.setState({
                isVoiceEnabled: false,
                playStatus: 'STOPPED',
              });
            } else {
              this.setState({
                previous: -1,
                current: 0,
                next: 1,
                isVoiceEnabled: true,
                playStatus: 'PLAYING',
              });
            }
          }}
        >
          {this.state.isVoiceEnabled && <img src={DisabledMicro} alt="Disabled Microphone" />}
          {!this.state.isVoiceEnabled && <img src={Micro} alt="Microphone" />}
        </button>
        <SoundPlayer
          url={this.props.audios[this.state.current]}
          playStatus={this.state.playStatus}
          onFinishedPlaying={() => {
            this.setState({
              playStatus: 'STOPPED',
            });
            this.recognition.start();
          }}
        />
      </div>
    );
  }
}

VoiceInput.propTypes = {
  audios: PropTypes.array,
  current: PropTypes.number,
};

export default VoiceInput;
