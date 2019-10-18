import React from 'react';
import { connect } from 'react-redux';
import { delMeme } from '../store/memes/actions';

const Meme = (props) => {
  return (
    <div className="meme">
      <p className="arriba" style={{color: props.color}}>{props.textoArriba}</p>
      <img src={props.imagenUrl} alt=""/>
      <p className="abajo" style={{color: props.color}}>{props.textoAbajo}</p>
      {props.conEliminar ? <button className="btn btn-danger" type="button" onClick={() => props.delMeme(props.id)}>Eliminar</button> : null}
    </div>
  )
}

const mapDispatchToProps = {
  delMeme
}

export default connect(null, mapDispatchToProps)(Meme);