import React from 'react';

class ListaMascotas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mascotas: [
        {id: 1, nombre: 'Periquito'},
        {id: 2, nombre: 'Canario'},
        {id: 3, nombre: 'Gato'},
      ]
    }
  }

  render() {
    const listaMascotas = this.state.mascotas.map((mascota, i) => <li key={mascota.id}>{mascota.nombre}</li>)
    return (
      <div>
        <ul>
          {listaMascotas}
        </ul>
      </div>
    )
  }
}

export default ListaMascotas;