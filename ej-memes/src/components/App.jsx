import React from 'react';
import Form from './Form';
import Meme from './Meme';
import ListaMemes from './ListaMemes'
import {connect} from 'react-redux';
import { initMemes } from '../store/memes/actions';
import Generador from './Generador';
import Header from './Header';
import { Route } from 'react-router-dom';

class App extends React.Component {

  componentDidMount() {
    this.props.initMemes();
  }

  render() {
    return (
      <div>
        <Header />
        <div>
          <Route path="/" exact component={ Generador } />
          <Route path="/lista-memes" component={ ListaMemes } />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  initMemes
}

export default connect(null, mapDispatchToProps)(App);