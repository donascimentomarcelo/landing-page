import React from 'react'
import Const from '../Const/Const'
import String from '../String/String'
import './Skill.scss'

const Skill = ({ type, skills }) => {

    const renderRow = () => {
        return skills.map((skill, i) => (<String name={skill} comma={true} key={i}/>))
    }

    return (
        <div className="skill">
            <Const/> {type} = [
            <div className="skill__align-skill">
                { renderRow() }
            </div>
                ]
        </div>
    )
}

export default Skill