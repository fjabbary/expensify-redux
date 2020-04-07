import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => (
    <div>
        <h1>Expensify App</h1>
        <ul>
            <li><NavLink to="/" activeClassName="is-active" exact>Home</NavLink></li>
            <li><NavLink to="/create" activeClassName="is-active">Create</NavLink></li>
            <li><NavLink to="/edit" activeClassName="is-active">Edit</NavLink></li>
            <li><NavLink to="/help" activeClassName="is-active">Help</NavLink></li>
        </ul>
    </div>
)

export default Header;