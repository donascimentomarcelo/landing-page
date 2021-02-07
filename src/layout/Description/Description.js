import React from 'react'
import Const from '../Const/Const'
import String from '../String/String'
import './Description.css'

const Description = ({title, description}) => {

    const renderRow = () => {
        return description.map(item => (<String name={item.title}/> ))
    }

    return (
        <div className="container-description">
            <Const/> {title} = &#123;
                <div className="align-description">
                    { renderRow() }
                </div>
                &#125;
        </div>
    )
}

export default Description
