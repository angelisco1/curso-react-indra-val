import React from 'react';

const ListaFrases = (props) => {
  const frases = props.datos.map(d => <li key={d.id}>{d.joke}</li>);
  return (
    <ul>
      {frases}
    </ul>
  )
}

export default ListaFrases;