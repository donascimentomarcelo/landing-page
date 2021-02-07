import React from 'react'
import './String.css'

const String = ({name}) => (
    <p key={name} className="string-color">{name}</p>
)

export default String
