import React from 'react';

const SkillTable = (props) => {
  const skills = props.skills
  return (
    <table>
      <thead>
        <tr>
          <td>Skill</td>
          <td>Resume</td>
          <td>Job</td>
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
      <td>{skill.skill}</td>
      <td>{skill.resume ? skill.resume : "🚫"}</td>
      <td>{skill.job}</td>
    </tr>
  )
}

export default SkillTable