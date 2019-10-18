import React from 'react';

class Referencias extends React.Component {
  constructor(props) {
    super(props);
    this.audioTag = React.createRef();
    this.play = this.play.bind(this)
    this.pause = this.pause.bind(this)
  }

  play() {
    this.audioTag.current.play();
  }

  pause() {
    this.audioTag.current.pause();
  }

  render() {
    return (
      <div>
        <audio ref={this.audioTag} src="./sonido-piolin.m4a"></audio>
        <button type="button" onClick={this.play}>Play</button>
        <button type="button" onClick={this.pause}>Pause</button>
      </div>
    )
  }
}

export default Referencias;