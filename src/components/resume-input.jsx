import React from 'react'

const ResumeInput = (props) => {
  const {resume, changeResume} = props
  return (
    <textarea value={resume} onChange={(e) => changeResume(e.target.value)}/>
  )
}

export default ResumeInput