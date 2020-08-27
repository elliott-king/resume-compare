# Resume Compare
A simple JS webapp that compares your resume with a job posting, and tells you what keywords you may be missing.

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

## Usage
This webapp simply scans your resume for any keywords that are in the job description you add. It will also organize by importance, judging by which keywords show up most.

## Inspiration
If you have recently been job hunting, you may be familiar with the concept of "ATS" (applicant tracking systems). When you submit your application online, the system scans your resume for specific keywords that are present in the job description. If you do not pass the minimum number of keywords (depends on the system), you will be automatically rejected. 

If you are applying to many jobs at once, it may be difficult to keep track of them all, or you may lose focus while reading the job descriptions. This tool exists to help you with the less common skills - that may not be in your default resume - which you may want in your resume for a specific job.

Other sites offers a similar feature, but behind a paywall. It seemed simple enough to implement, and I don't need all of the fancy additions anyways.

Keep in mind that ATS systems usually prioritize hard skills ("ReactJS", "Nuclear Physics", "Heavy Industry") over soft skills ("Communication", "Team Spirit").

## Resources Used
- [gh-pages](https://www.npmjs.com/package/gh-pages) npm library - build a static site with Rails & GH pages easily.
- The list of skills - taken from Varad Choudhari's LinkedIn scraper [here](https://github.com/varadchoudhari/LinkedIn-Skills-Crawler/).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Local Development

If you want to contribute anything, first of all, thank you! You can just fork & clone the repository and `npm i` and `npm run-script start`.