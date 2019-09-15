import React from 'react';
import NavbarLink from './NavbarLink';

const Navbar = () => {

    const menuItems = [
        {title: 'Current Weather', link: 'weather', icon: 'fas fa-cloud-sun-rain'},
        {title: 'Favorites locations', link: 'favorites', icon: 'fas fa-heart'}
    ];

    const menuItemsList = menuItems.map((item, i) => {
        return <NavbarLink key={i}details={item}/>
    })

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <span className="navbar-brand">Weather App</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {menuItemsList}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;