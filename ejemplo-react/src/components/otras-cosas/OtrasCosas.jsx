import React from 'react';
import Card from './Card';
import Referencias from './Referencias';
import Context from './Context';
import withData from './withData';
import ListaFrases from './ListaFrases';

export const darkModeCtx = React.createContext();

class OtrasCosas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false
    }
  }

  render() {
    const ListaFrasesConDatos = withData(ListaFrases, 'http://api.icndb.com/jokes/random/4')
    return (
      <React.Fragment>
        <ListaFrasesConDatos />
        {/* <button type="button" onClick={() => this.setState({darkMode: !this.state.darkMode})}>Toggle DarkMode</button> */}
        {/* <Titulo>
          <h1>T1</h1>
        </Titulo>
        <Titulo>
          <h2>T2</h2>
        </Titulo>
         */}
        {/* <Card>
          <button>Un boton</button>
        </Card> */}
        {/* <Referencias />
        <darkModeCtx.Provider value={this.state.darkMode}>
          <Context />
        </darkModeCtx.Provider>

        <Card>
          <h3>React</h3>
          <img width="100" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt=""/>
        </Card>
        <Card>
          <h3>React</h3>
        </Card> */}
      </React.Fragment>
    )
  }
}

export default OtrasCosas;