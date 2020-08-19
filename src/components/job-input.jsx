import React from 'react'

const JobInput = (props) => {
  const {job, changeJob} = props
  return (
    <textarea value={job} onChange={(e) => changeJob(e.target.value)}/>
  )
}

export default JobInput