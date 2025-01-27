import React from 'react';
import { Link } from 'react-router-dom';

/**
 * @notes
 * Manfaatkan tombol pada komponen ini untuk mengubah nilai context
 */

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Beranda</Link>
        </li>
        <li>
          <Link to="/tutorial">Tutorial</Link>
        </li>
        <li>
          <Link to="/community">Komunitas</Link>
        </li>
      </ul>
      <button>English</button>
    </nav>
  );
}

export default Navigation;
