import React from "react";
import Const from "../Const/Const";
import String from "../String/String";
import "./Skill.scss";

const Skill = ({ type, skills }) => {
  const renderRow = () => {
    return skills.map((skill, i) => (
      <String name={skill} comma={true} key={i} />
    ));
  };

  return (
    <div className="skill">
      <Const /> {type} <span className="brace">= [</span>
      <div className="skill__align-skill">{renderRow()}</div>
      <span className="brace">]</span>
    </div>
  );
};

export default Skill;
