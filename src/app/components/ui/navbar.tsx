import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../../actions/auth';
import "bootstrap/dist/css/bootstrap.min.css";

const Nav = () => {

    const dispatch = useDispatch();

    const handleLogout = () => dispatch(startLogout());

    return <nav>

<div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
          <a className="navbar-brand" href="/">
              Pagina Principal
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to='/students/list'>
                    Lista General de Estudiantes y Busqueda
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/drivers'>
                    Autorizar Cuentas Conductores
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link"  to='/afluencia'>
                    Afluencia de Estudiantes
                  </Link>
                </li>
                <li className="nav-item">
                <button className="btn btn-info" onClick={ handleLogout }>Cerrar Sesion</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

{/*         <Link to='/'>Dashboard</Link>
        <Link to='/students/list'>Estudiantes</Link>
        <Link to='/drivers'>Conductores</Link>
        <Link to='/afluencia'>Afluencia</Link>
        <button onClick={ handleLogout }>Logout</button> */}
    </nav>
}

export default Nav;