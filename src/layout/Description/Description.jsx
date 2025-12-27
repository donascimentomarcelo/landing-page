import React from 'react'
import Const from '../Const/Const'
import String from '../String/String'
import './Description.scss'

const Description = ({title, description}) => {

    const renderRow = () => {
        return description.map((item, i) => (<String name={item.title} key={i}/> ))
    }

    return (
        <div className="description">
            <Const/> {title} = &#123;
                <div className="description__align-description">
                    { renderRow() }
                </div>
                &#125;
        </div>
    )
}

export default Description
