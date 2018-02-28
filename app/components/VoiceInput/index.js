import React from 'react';
class VoiceInput extends React.Component {
  componentDidMount() {
    if (window.webkitSpeechRecognition) {
      this.recognition = new window.webkitSpeechRecognition(); // eslint-disable-line new-cap
      this.recognition.onresult = this.onResult.bind(this);
      this.recognition.continuous = true;
      this.recognition.start();
    }
  }

  componentWillUnmount() {
    if (this.recognition) {
      this.recognition.stop();
    }
  }

  onResult(e) {
    const transcript = this.getLastTranscript(e.results);
    console.log(transcript);
  }

  getLastTranscript(results) {
    console.log(results);
    return results[0].transcript;
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
      <div />
    );
  }

}

export default VoiceInput;
