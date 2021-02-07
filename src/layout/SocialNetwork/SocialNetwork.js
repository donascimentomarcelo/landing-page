import React from 'react'
import Anchor from '../Anchor/Anchor'
import './SocialNetwork.css'

const SocialNetwork = ({ data, name, occupation }) => {

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
        <div className="container-social-network">
            <h1 className="profile-name brackets"> {name} </h1> 
            <h4 className="occupation bar-asterisk"> {occupation} </h4> 
            {renderAnchor()}
        </div>
    )
}

export default SocialNetwork