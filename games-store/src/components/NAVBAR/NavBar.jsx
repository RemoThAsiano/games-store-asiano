import React from 'react';
import CartWidget from '../CartWidget/CartWidget';

function NavBar(props) {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">GamesStore</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                JUEGOS
              </a>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                <li><a className="dropdown-item" href="#">Aventura</a></li>
                <li><a className="dropdown-item" href="#">Roguelike</a></li>
                <li><a className="dropdown-item" href="#">Terror</a></li>
                <li><a className="dropdown-item" href="#">Acción</a></li>
                <li><a className="dropdown-item" href="#">Deportes</a></li>
              </ul>
            </li>
          </ul>
          <CartWidget/>
        </div>
      </div>
    </nav>
    );
}

export default NavBar;