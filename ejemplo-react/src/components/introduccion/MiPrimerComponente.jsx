import React from 'react';
import Contador from './Contador';
import ContadorConProps from './ContadorConProps';
import ValidaProps from './ValidaProps';
import ListaMascotas from './ListaMascotas';

class MiPrimerComponente extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cuenta: 0
    }
    this.incrementaCuenta = this.incrementaCuenta.bind(this)
    this.decrementaCuenta = this.decrementaCuenta.bind(this)
    this.changeCuenta = this.changeCuenta.bind(this)
  }

  incrementaCuenta() {
    this.setState({
      cuenta: this.state.cuenta + 1
    })
  }

  decrementaCuenta(event) {
    // debugger;
    // console.log(event.target.value)
    this.setState({
      cuenta: this.state.cuenta - 1
    })
  }

  changeCuenta(event) {
    this.setState({
      cuenta: Number(event.target.value)
    })
  }

  render() {
    const valor = 'Hola';
    return (
      <div>
        {/* <label htmlFor="valor">Valor:</label>
        <input type="text" id="valor" className="error" value={valor} /> */}
        {/* <Contador cuenta="0" />
        <Contador cuenta="10" /> */}
        <Contador />
        <ContadorConProps cuenta={this.state.cuenta} incrementar={this.incrementaCuenta} decrementar={this.decrementaCuenta} changeCuenta={this.changeCuenta} />
        <ValidaProps id={1} />
        <ValidaProps nombre="Ángel" id={2} />
        <ListaMascotas />
      </div>
    )
  }
}

export default MiPrimerComponente;