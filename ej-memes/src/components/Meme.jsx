import React from 'react';

const Meme = (props) => {
  const styles = {
    color: props.color
  }
  return (
    <div>
      <p style={styles}>{props.textoArriba}</p>
      <img src={props.imagenUrl} alt=""/>
      <p style={styles}>{props.textoAbajo}</p>
    </div>
  )
}


export default Meme;