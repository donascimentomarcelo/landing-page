import React from 'react'
import Anchor from '../Anchor/Anchor'
import './Contact.scss'

const Contact = ({ data }) => {

    const renderAnchor = () => {
        return (
            <ul className="contact--ul">
                {
                    data.map(item => (
                        <li className="contact--li" key={item.title}>
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
        <div className="contact">
            {renderAnchor()}
        </div>
    )
}

export default Contact