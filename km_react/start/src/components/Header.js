import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header>
            <ul>
                <li>
                    <Link to="/home">To Home</Link>
                </li>
                <li>
                    <Link to="/list">To List</Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;