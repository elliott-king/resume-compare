import React, {useState} from 'react';
import './App.css';
import ResumeInput from './components/resume-input'
import JobInput from './components/job-input'
import SkillTable from './components/skill-table'
import {compare} from './compare/compare'

function App() {
  const [resume, changeResume] = useState("")
  const [job, changeJob] = useState("")
  const [skillSet, changeSkillSet] = useState(null)

  const handleSubmit = (event) => {
    const skillSet = compare(resume, job)
    changeSkillSet(skillSet)
  }

  const renderSkills = () => {
    if (!skillSet) return null
    return <SkillTable skills={skillSet} />
  }

  return (
    <div className="App">
      <button id="submit" onClick={handleSubmit}>Check Resume</button>
      <div className="main">
        <div className="input-container">
          <ResumeInput changeResume={changeResume} resume={resume}/>
          <JobInput changeJob={changeJob} job={job}/>
        </div>
        <div className="skill-table">
          {renderSkills()}
        </div>
      </div>
    </div>
  );
}

export default App;
