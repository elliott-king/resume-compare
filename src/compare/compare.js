import skills from './skills.json'

// escape possible special characters in a string
// https://stackoverflow.com/questions/4371565/
const escapeRegExp = (s) => {
  return s.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')
}

const skill_count_in_text = (skill, text) => {
  // https://stackoverflow.com/questions/63515086
  // Creating a regexp to search for all instances of <skill>
  // \b means it is a standalone word (to prevent 'React' being in 'Reactive')
  // 'g' means it will search globally (not just the first it finds)
  // 'i' means it will be case insensitive
  // Add word boundaries to make sure it is not a substring of a word
  const rx = RegExp("\\b" + escapeRegExp(skill) + "\\b", 'gi')
  // We only want results that have the first letter capitalized
  // (eg, 'Go' language not being picked up as 'go')
  const matches = (text.match(rx) || [])
  const properNouns = matches.filter(x => x.charAt(0) === skill.charAt(0))
  return properNouns.length
}

const skills_in_job = (job) => {
  const job_skills = {}
  skills.forEach(skill => {
    const count = skill_count_in_text(skill, job)
    if (count) job_skills[skill] = count
  })
  return job_skills
}

const skills_in_resume = (resume, job_skills) => {
  const resume_skills = {}
  Object.keys(job_skills).forEach(skill => {
    const count = skill_count_in_text(skill, resume)
    resume_skills[skill] = count
  })
  return resume_skills
}

export const compare = (resume, job) => {
  const job_skills = skills_in_job(job)
  const resume_skills = skills_in_resume(resume, job_skills)
  const compare = []

  Object.keys(job_skills).forEach(skill => {
    compare.push({
      'skill': skill,
      'job': job_skills[skill],
      'resume': resume_skills[skill],
    })
  })
  return compare
}
