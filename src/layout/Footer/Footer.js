import React from 'react'
import Contact from '../Contact/Contact'
import './Footer.scss'

const Footer = ({contact}) => (
    <footer className="app-footer">
        <Contact
            data={contact} />
    </footer>
)

export default Footer
