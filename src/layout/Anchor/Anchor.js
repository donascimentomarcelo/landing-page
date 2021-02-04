import React from 'react'
import './Anchor.css'

const Anchor = ({ title, url }) => (
    <a
        className="app-link"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
    >
        {title}
    </a>
);

export default Anchor