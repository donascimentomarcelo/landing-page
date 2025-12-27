import React from 'react'
import Language from '../Language/Language'
import './Header.scss'

const Header = ({ language, handleClickLanguage }) => (
    <header className="app-header">
        <button className="app-header__style-button" onClick={() => handleClickLanguage()}>
            <Language
                title={language} />
        </button>
    </header>
);

export default Header;