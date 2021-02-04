import React from 'react'
import Anchor from '../Anchor/Anchor'
import './SocialNetwork.css'

const SocialNetwork = ({ data }) => {

    const renderAnchor = () => {
        return (
            <ul>
                {
                    data.map(item => (
                        <li key={item.title}>
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
        <div className="container">
            {renderAnchor()}
        </div>
    )
}

export default SocialNetwork