import React from 'react';

class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: null,
      intervalId: null,
    }
  }

  componentDidMount() {
    const intervalId = setInterval(() => {
      console.log('Aquí hacemos algo...')
    }, 1000)
    this.setState({
      intervalId: intervalId
    })
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  static getDerivedStateFromProps(props, state) {
    return {
      color: props.cuenta < 0 ? 'red' : 'green'
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.color != nextState.color
  }

  render() {
    console.log('Se pinta');
    const styles = {
      width: '100px',
      height: '100px',
      backgroundColor: this.state.color
    }
    return (
      <div style={styles}>
      </div>
    )
  }
}

export default Color;