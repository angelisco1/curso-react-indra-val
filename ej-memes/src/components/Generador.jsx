import React from 'react';
import Meme from './Meme';
import Form from './Form';
import { connect } from 'react-redux';
import { addMeme } from '../store/memes/actions';

const initialFormState = {
  textoArriba: "Texto 1",
  textoAbajo: "Texto 2",
  color: "#0000ff",
  imagenUrl: "http://memezinga.osweekends.com/images/ronaldo.jpg"
}

class Generador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialFormState
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.saveMeme = this.saveMeme.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  saveMeme(event) {
    event.preventDefault();
    this.props.addMeme(this.state)
      .then(r => {
        this.props.history.push('/lista-memes');
      })

  }

  render() {
    return (
      <div id="generador">
        <div id="gen-meme">
          <Meme
            textoArriba={this.state.textoArriba}
            textoAbajo={this.state.textoAbajo}
            imagenUrl={this.state.imagenUrl}
            color={this.state.color} />
        </div>
        <div id="gen-form">
          <Form
            textoArriba={this.state.textoArriba}
            textoAbajo={this.state.textoAbajo}
            imagenUrl={this.state.imagenUrl}
            color={this.state.color}
            onHandleInputChange={this.handleInputChange}
            saveMeme={this.saveMeme} />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  addMeme
}

export default connect(null, mapDispatchToProps)(Generador);