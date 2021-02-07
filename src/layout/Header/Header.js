import React from 'react'
import './Header.css'

const Header = () => (
    <header className="app-header">
        <span className="app-header__logo">
            <p className="app-header__logo-font">
                Marcelo Do Nascimento
            </p>
        </span>
        <a
            className="app-link"
            href="https://github.com/donascimentomarcelo"
            target="_blank"
            rel="noopener noreferrer"
        >
            Theme
        </a>
    </header>
);

export default Header;