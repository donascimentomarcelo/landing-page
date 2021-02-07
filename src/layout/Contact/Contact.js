import React from 'react'
import Anchor from '../Anchor/Anchor'
import './Contact.css'

const Contact = ({ data }) => {

    const renderAnchor = () => {
        return (
            <ul className="ul-contact">
                {
                    data.map(item => (
                        <li className="li-contact" key={item.title}>
                            <Anchor
                                title={item.title}
                                url={item.url} />
                        </li>
                    ))
                }
            </ul>
        )
    }

    return (
        <div className="container-contact">
            {renderAnchor()}
        </div>
    )
}

export default Contact