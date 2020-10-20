import '../assets/styles/App.scss';
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
      <div>
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/test">Test</Link></li>
        </ul>
        <hr/>
      </div>
  );
}

export default Header;