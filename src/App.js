import React, {useState} from 'react';
import './App.css';
import ResumeInput from './components/resume-input'
import JobInput from './components/job-input'
import {compare} from './compare/compare'

function App() {
  const [resume, changeResume] = useState("")
  const [job, changeJob] = useState("")
  const handleSubmit = (event) => {
    const skillSet = compare(resume, job)
    console.log(skillSet)
  }

  return (
    <div className="App">
      <ResumeInput changeResume={changeResume} resume={resume}/>
      <JobInput changeJob={changeJob} job={job}/>
      <button id="submit" onClick={handleSubmit}>Check Resume</button>
    </div>
  );
}

export default App;
