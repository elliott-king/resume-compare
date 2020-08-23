import React, {useState} from 'react';
import './App.css';
import ResumeInput from './components/resume-input'
import JobInput from './components/job-input'
import SkillTable from './components/skill-table'
import {compare} from './compare/compare'
import Logo from './images/res-comp_logo_white.png'

function App() {
  const [resume, changeResume] = useState("")
  const [job, changeJob] = useState("")
  const [skillSet, changeSkillSet] = useState([])

  const handleSubmit = (event) => {
    const skillSet = compare(resume, job)
    changeSkillSet(skillSet)
  }

  return (
    <div className="App">
      <img alt="logo" id="logo" src={Logo}/>
      <button id="submit" onClick={handleSubmit}>Check Resume</button>
      <div className="main">
        <div className="input-container">
          <ResumeInput changeResume={changeResume} resume={resume}/>
          <JobInput changeJob={changeJob} job={job}/>
        </div>
        <div className="skill-table">
          <SkillTable skills={skillSet} />
        </div>
      </div>
    </div>
  );
}

export default App;
