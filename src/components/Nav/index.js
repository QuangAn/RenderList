import React from 'react';
import { NavLink } from 'react-router-dom'
import './style.css';
function Nav() {
    return (
        <nav>
            <ul className="list">
                <li><NavLink activeClassName='is-active' exact to="/">Home</NavLink></li>
                <li><NavLink activeClassName='is-active' to="/ListSong">List Song</NavLink></li>
                <li><NavLink to="/Song/allibaba">allibaba</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;