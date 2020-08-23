import React from 'react';

const SkillTable = (props) => {
  const skills = props.skills
  return (
    <table width="100%" border="0" cellPadding="5" cellSpacing="0">
      <thead className="header-row">
        <tr>
          <td width="50%" align="left">Skill</td>
          <td width="25%" align="right">Resume</td>
          <td width="25%" align="right">Job</td>
        </tr>
      </thead>
      <tbody>
        {skills.sort((a, b) => {
          if(b.job - a.job !== 0) return b.job - a.job
          else return b.resume - a.resume
          }).map(skill => <SkillRow key={skill.skill} skill={skill} />)
        }
      </tbody>
    </table>
  )
}

const SkillRow = (props) => {
  const skill = props.skill 
  return (
    <tr>
      <td width="50%" align="left">{skill.skill}</td>
      <td width="25%" align="right">{skill.resume ? skill.resume : "🚫"}</td>
      <td width="25%" align="right">{skill.job}</td>
    </tr>
  )
}

export default SkillTable