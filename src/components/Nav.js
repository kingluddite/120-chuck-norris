import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { login, logout, isLoggedIn } from '../utils/AuthService';
import '../App.css';

const Nav = () => (
  <nav className="navbar navbar-default">
    <div className="navbar-header">
      <Link className="navbar-brand" to="/">
        Chuck Norris World
      </Link>
    </div>
    <ul className="nav navbar-nav">
      <li>
        <NavLink to="/" activeClassName="is-active">
          Food Jokes
        </NavLink>
      </li>
      <li>
        {isLoggedIn() ? (
          <NavLink to="/special" activeClassName="is-active">
            Celebrity Jokes
          </NavLink>
        ) : (
          ''
        )}
      </li>
    </ul>
    <ul className="nav navbar-nav navbar-right">
      <li>
        {isLoggedIn() ? (
          <button className="btn btn-danger log" onClick={() => logout()}>
            Log out
          </button>
        ) : (
          <button className="btn btn-info log" onClick={() => login()}>
            Log In
          </button>
        )}
      </li>
      <li />
    </ul>
  </nav>
);

export default Nav;
