import React from 'react';

const withData = (WrappedCmp, URL) => {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        datos: [],
        cargando: true
      }
    }

    componentDidMount() {
      fetch(URL)
        .then(resp => resp.json())
        .then(datos => {
          this.setState({
            datos: datos.value,
            cargando: false
          })
        })
    }

    render() {
      return (
        this.state.cargando ? <p>Loading...</p> : <WrappedCmp datos={this.state.datos} />
      )
    }
  }
}

export default withData;