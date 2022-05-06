import React from 'react';
import { NavLink, Link} from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

function NavBar(props) {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" >GamesStore</Link>
        <CartWidget/>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul className="navbar-nav">
            
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" to="" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                JUEGOS
              </a>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                <li><NavLink className="dropdown-item" to="/category/Aventura">Aventura</NavLink></li>
                <li><NavLink className="dropdown-item" to="/category/Roguelike">Roguelike</NavLink></li>
                <li><NavLink className="dropdown-item" to="/category/Terror">Terror</NavLink></li>
                <li><NavLink className="dropdown-item" to="/category/Acción">Acción</NavLink></li>
                <li><NavLink className="dropdown-item" to="/category/Deportes">Deportes</NavLink></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
    }

export default NavBar;