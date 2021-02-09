import React from 'react'
import Language from '../Language/Language'
import './Header.scss'

const Header = ({ language, handleClickLanguage, theme, handleClickTheme }) => (
    <header className="app-header">
        <button className="app-header__style-button" onClick={() => handleClickLanguage()}>
            <Language
                title={language} />
        </button>
        <button className="app-header__style-button" onClick={() => handleClickTheme()}>
            <Language
                title={theme} />
        </button>
    </header>
);

export default Header;