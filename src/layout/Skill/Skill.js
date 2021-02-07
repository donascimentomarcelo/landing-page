import React from 'react'
import './Skill.css'

const Skill = ({ type, skills }) => {

    const renderRow = () => {
        return skills.map(skill => (<p key={skill}>{skill}</p>))
    }

    return (
        <div className="container-skill">
            const {type} = [
            <div className="align-skill">
                { renderRow() }
            </div>
                ]
        </div>
    )
}

export default Skill