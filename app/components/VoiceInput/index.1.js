import ReactVoiceInput from 'react-voice-input';
import React from 'react';

class VoiceInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
    };

    this.onResult = this.onResult.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({
      inputText: event.target.value,
    });
  }

  onResult(result) {
    console.log(result);
    this.setState({
      inputText: result,
    });
  }

  render() {
    const onEnd = () => {
      console.log('on end');
    };
    return (
      <main>
        <ReactVoiceInput
          onResult={this.onResult}
          onEnd={onEnd}
        >
          <input type="text" value={this.state.inputText} onChange={this.onInputChange} />
        </ReactVoiceInput>
      </main>
    );
  }
}
export default VoiceInput;

