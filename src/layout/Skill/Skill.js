import React from 'react'
import Const from '../Const/Const'
import String from '../String/String'
import './Skill.css'

const Skill = ({ type, skills }) => {

    const renderRow = () => {
        return skills.map((skill, i) => (<String name={skill} key={i}/>))
    }

    return (
        <div className="container-skill">
            <Const/> {type} = [
            <div className="align-skill">
                { renderRow() }
            </div>
                ]
        </div>
    )
}

export default Skill