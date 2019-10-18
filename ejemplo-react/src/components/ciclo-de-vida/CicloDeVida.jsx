import React from 'react';
import Color from './Color';

class CicloDeVida extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cuenta: 0,
      mostrarColor: true
    }
  }

  render() {
    return (
      <div>
        <button type="button"
                onClick={() => this.setState({cuenta: this.state.cuenta-1})}
                >-</button>
        <span>{this.state.cuenta}</span>
        <button type="button"
                onClick={() => this.setState({cuenta: this.state.cuenta+1})}
                >+</button>
        <input type="checkbox"
                onChange={() => this.setState({mostrarColor: !this.state.mostrarColor})}
                checked={this.state.mostrarColor} />
        {this.state.mostrarColor ? <Color cuenta={this.state.cuenta} /> : null}
      </div>
    )
  }
}

export default CicloDeVida;