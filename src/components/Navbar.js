import React from 'react';
import PropTypes from 'prop-types';

const Navbar = () => (
    <div className="nav-bar">
        <div className="nav-bar_container">
            <a href="https://funky-emu.net"> <img src="/img/logo.png" alt="Mountain View" height="50px"/></a>
            <a href="https://funky-emu.net">Funky-emu</a>
            <a href="https://funky-emu.net">Galerie</a>
            <a href="https://funky-emu.net">upload</a>
        </div>
    </div>
);

Navbar.propTypes = {
};

export default Navbar;