import React from 'react'
import Anchor from '../Anchor/Anchor'
import './SocialNetwork.scss'

const SocialNetwork = ({ data, name, occupation }) => {

    const renderAnchor = () => {
        return (
            <ul className="network__ul">
                {
                    data.map(item => (
                        <li className="network__li" key={item.title}>
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
        <div className="network">
            <h1 className="network__profile-name network__brackets"> {name} </h1> 
            <h4 className="network__occupation network__bar-asterisk"> {occupation} </h4> 
            {renderAnchor()}
        </div>
    )
}

export default SocialNetwork