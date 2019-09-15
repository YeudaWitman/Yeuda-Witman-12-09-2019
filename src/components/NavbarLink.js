import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarLink = props => {
    let details = props.details;
    return (
        <div>
            <li className="nav-item">
                <NavLink className="nav-link" to={`/${details.link}`}>
                    <i className={details.icon}></i> {details.title}
                </NavLink>
            </li>
        </div>
    )
}

export default NavbarLink
