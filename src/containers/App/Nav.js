import React from 'react';
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/ListSong"><li>List Song</li></Link>
            </ul>
        </nav>
    );
}

export default Nav;