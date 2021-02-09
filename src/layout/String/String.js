import React from 'react'
import './String.css'

const String = ({name, comma}) => (
    <p className={`string-color ${comma ? 'add-comma' : null}`}>
        {name}
    </p>
)

export default String
