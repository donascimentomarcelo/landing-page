import React from 'react'
import './Anchor.css'

const Anchor = ({ title, url }) => (
    <a
        className="anchor"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
    >
        {title}
    </a>
);

export default Anchor