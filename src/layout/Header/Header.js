import React from 'react'
import Language from '../Language/Language'
import './Header.css'

const Header = ({title, handleClick}) => (
    <header className="app-header">
        {/* <span className="app-header__language">
            <p className="app-header__language-font">
            </p>
        </span> */}
        <button className="style-button" onClick={() => handleClick()}>
            <Language
                title={title}/>
        </button>
    </header>
);

export default Header;