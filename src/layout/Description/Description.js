import React from 'react'
import './Description.css'

const Description = ({title, description}) => {

    const renderRow = () => {
        return description.map(item => (<p>{ item.title }</p> ))
    }

    return (
        <div className="container-description">
            const {title} = &#123;
                <div className="align-description">
                    { renderRow() }
                </div>
                &#125;
        </div>
    )
}

export default Description
