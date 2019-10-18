import React from 'react';
import Meme from './Meme';
import { connect } from 'react-redux';

class ListaMemes extends React.Component {
  render() {
    const listaMemes = this.props.memes.map(meme => <Meme key={meme.id} {...meme} conEliminar={true} />)
    return (
      <div id="lista-memes">
        {listaMemes.length > 0 ? listaMemes : <p>No tienes guardado ningún meme</p>}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    memes: state.misMemes
  }
}

const withProps = connect(mapStateToProps);

export default withProps(ListaMemes);