import React from 'react';
import PropTypes from 'prop-types';

class ValidaProps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'white'
    }
    // this.cambiaColorAleatorio = this.cambiaColorAleatorio.bind(this);
    // this.cambiaColorNegro = this.cambiaColorNegro.bind(this);
    // this.cambiaColorBlanco = this.cambiaColorBlanco.bind(this);
    this.handleEventDiv = this.handleEventDiv.bind(this);
  }

  handleEventDiv(event) {
    let color = '';
    switch(event.type) {
      case 'click':
        const num = Math.floor(Math.random()*256);
        color = `rgb(${num},${num},${num})`
        break;
      case 'mouseover':
        color = 'black'
        break;
      case 'mouseleave':
        color = 'white'
        break;
    }
    this.setState({
      color: color
    })
  }

  // cambiaColorAleatorio() {
  //   const num = Math.floor(Math.random()*256);
  //   this.setState({
  //     color: `rgb(${num},${num},${num})`
  //   })
  // }

  // cambiaColorNegro() {
  //   this.setState({
  //     color: 'black'
  //   })
  // }

  // cambiaColorBlanco() {
  //   this.setState({
  //     color: 'white'
  //   })
  // }

  render() {
    const styles = {backgroundColor: this.state.color};
    return (
      // <div style={styles} onClick={this.cambiaColorAleatorio} onMouseOver={this.cambiaColorNegro} onMouseLeave={this.cambiaColorBlanco}>
      <div style={styles} onClick={this.handleEventDiv} onMouseOver={this.handleEventDiv} onMouseLeave={this.handleEventDiv}>
        <h2>Hola {this.props.nombre}</h2>
      </div>
    )
  }
}

ValidaProps.defaultProps = {
  nombre: 'Mundo'
}

ValidaProps.propTypes = {
  nombre: PropTypes.string,
  id: PropTypes.number.isRequired,
}

export default ValidaProps;