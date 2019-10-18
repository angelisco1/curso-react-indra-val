import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => (
  <header>
    <h1>Generador de memes</h1>
    <nav>
      <ul>
        <li>
          <Link to="/">Generador</Link>
        </li>
        <li>
          <Link to="/lista-memes">Lista memes</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header;