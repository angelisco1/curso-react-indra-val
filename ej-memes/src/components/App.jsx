import React from 'react';
import Form from './Form';
import Meme from './Meme';
import ListaMemes from './ListaMemes'

// const getInitialFormState = () => {
//   return {
//     textoArriba: "Texto 1",
//     textoAbajo: "Texto 2",
//     color: "#0000ff",
//     imagenUrl: "http://memezinga.osweekends.com/images/ronaldo.jpg"
//   }
// }
const initialFormState = {
  textoArriba: "Texto 1",
  textoAbajo: "Texto 2",
  color: "#0000ff",
  imagenUrl: "http://memezinga.osweekends.com/images/ronaldo.jpg"
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialFormState,
      misMemes: [],
      nextId: 0
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.saveMeme = this.saveMeme.bind(this);
  }

  saveMeme(event) {
    event.preventDefault();

    const nuevosMemes = [...this.state.misMemes, {id: this.state.nextId, textoArriba: this.state.textoArriba, textoAbajo: this.state.textoAbajo, imagenUrl: this.state.imagenUrl, color: this.state.color}]

    this.setState({
      ...initialFormState,
      misMemes: nuevosMemes,
      nextId: this.state.nextId + 1
    });
  }

  handleInputChange(event) {
    // console.dir(event.target)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <Meme textoArriba={this.state.textoArriba} textoAbajo={this.state.textoAbajo} imagenUrl={this.state.imagenUrl} color={this.state.color} />
        <Form textoArriba={this.state.textoArriba} textoAbajo={this.state.textoAbajo} imagenUrl={this.state.imagenUrl} color={this.state.color} onHandleInputChange={this.handleInputChange} saveMeme={this.saveMeme} />
        <hr/>
        <ListaMemes memes={this.state.misMemes} />
      </div>
    )
  }
}

export default App;