import React from 'react';
import Meme from './Meme';

class ListaMemes extends React.Component {
  render() {
    const listaMemes = this.props.memes.map(meme => <Meme key={meme.id} {...meme} />)
    return (
      <div>
        {listaMemes}
      </div>
    )
  }
}

export default ListaMemes;