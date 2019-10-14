import React from 'react';

class ContadorConProps extends React.Component {
  constructor(props) {
    super(props);
    // this.incrementar = this.incrementar.bind(this);
    // this.decrementar = this.decrementar.bind(this);
  }

  // incrementar() {
  //   console.log('INCREMENTADO');
  // }

  // decrementar() {
  //   console.log('DECREMENTADO');
  // }

  render() {
    return (
      <div>
        <button type="button" onClick={this.props.decrementar}>-</button>
        <span>Cuenta: {this.props.cuenta}</span>
        <button type="button" onClick={this.props.incrementar}>+</button>
        <input type="text" value={this.props.cuenta} onChange={this.props.changeCuenta} />
      </div>
    )
  }
}



export default ContadorConProps;