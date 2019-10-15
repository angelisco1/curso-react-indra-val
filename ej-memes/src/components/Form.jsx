import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <div>
          <label htmlFor="textoArriba">Texto arriba:</label>
          <input type="text" id="textoArriba" name="textoArriba" value={this.props.textoArriba} onChange={this.props.onHandleInputChange} />
        </div>
        <div>
          <label htmlFor="textoAbajo">Texto abajo:</label>
          <input type="text" id="textoAbajo" name="textoAbajo" value={this.props.textoAbajo} onChange={this.props.onHandleInputChange} />
        </div>
        <div>
          <label htmlFor="imagenUrl">URL Imagen:</label>
          <input type="text" id="imagenUrl" name="imagenUrl" value={this.props.imagenUrl} onChange={this.props.onHandleInputChange} />
        </div>
        <div>
          <label htmlFor="color">Color:</label>
          <input type="color" id="color" name="color" value={this.props.color} onChange={this.props.onHandleInputChange} />
        </div>
        <button type="submit" onClick={this.props.saveMeme}>Guardar</button>
      </form>
    )
  }
}

export default Form;