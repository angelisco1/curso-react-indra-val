import React from 'react';


class Card extends React.Component {
  render() {
    return (
      <div className="card">
        {/* <img width="100" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt=""/>
        <h3>React</h3> */}
        {this.props.children[0] ? this.props.children[0] : <h3>React</h3>}
        {this.props.children[1] ? this.props.children[1] : <h3>React</h3>}
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore ad nam totam nisi magni officiis mollitia autem dignissimos aut ex, blanditiis est, debitis, perspiciatis soluta commodi nesciunt aliquid itaque quaerat.</p>
      </div>
    )
  }
}

export default Card;