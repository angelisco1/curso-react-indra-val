import React from 'react';
import { darkModeCtx } from './OtrasCosas'

class Context extends React.Component {
  render() {
    return (
      <darkModeCtx.Consumer>
        {(darkMode) => {
          const styles = {
            div: {
              backgroundColor: darkMode ? 'black' : 'white'
            },
            p: {
              color: darkMode ? 'white' : 'black'
            }
          }
          return (
            <div style={styles.div}>
              <p style={styles.p}>Un parrafo</p>
            </div>
          )
        }}
      </darkModeCtx.Consumer>
    )


  }
}

export default Context;