import React from 'react';

class Contador extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props)
    this.state = {
      cuenta: 0,
      otraCuenta: 2
    }
    this.incrementar = this.incrementar.bind(this);
    this.decrementar = this.decrementar.bind(this);

    // this.changeCuenta = () => {

    // }

  }

  // incrementar(key) {
  //   // console.log('INCREMENTADO');
  //   return () => {
  //     this.setState({
  //       [key]: this.state[key] + 1,
  //     })
  //   }
  // }

  incrementar() {
    console.log('INCREMENTADO');
    this.setState({
      cuenta: this.state.cuenta + 1,
    })
  }

  decrementar() {
    console.log('DECREMENTADO');
    this.setState({
      cuenta: this.state.cuenta - 1,
    })
  }

  // changeCuenta = () => {

  // }

  render() {
    return (
      <div>
        <button type="button" onClick={this.decrementar}>-</button>
        <span>Cuenta: {this.state.cuenta}</span>
        <button type="button" onClick={this.incrementar}>+</button>
        {/* <span>Otra Cuenta: {this.state.otraCuenta}</span> */}
        {/* <button type="button" onClick={this.incrementar('cuenta')}>+</button>
        <button type="button" onClick={this.incrementar('otraCuenta')}>+</button> */}
        {/* <button type="button" onClick={() => {this.incrementar('contraCuenta')}}>+</button>
        <button type="button" onClick={() => {this.incrementar('cuenta')}}>+</button> */}
        {/* <button onClick={this.incrementar.bind(this)}></button> */}
      </div>
    )
  }
}

export default Contador;