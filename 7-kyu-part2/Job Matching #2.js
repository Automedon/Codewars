/*
Description:
Consider a matchmaking system that is designed to deliver jobs to software developers on a continual basis. As more quality jobs are handpicked into the system, they will be matched to all the enrolled developers; affording them better opportunities daily.

This means that somewhere in the system there exists functionality to take a job and match it against enrolled candidates. There are several factors that go into this matching, but we'll focus on two for the purposes of this Kata.

Create a function match which takes a job, and filters a list of candidates to the ones that match the job. We'll focus on two matching properties for this Kata: equity and location.

###Equity The candidate has a equity property (boolean) indicating if they desire equity, while the job will have a maximum equity property (float) representing the max amount of equity offered. If the maximum equity is zero, we can infer there is no equity offered. A job will match unless the candidate desires equity, but the job does not offer any.

###Location The candidate will have two location properties: current location and desired locations. A job can be located in multiple places as well which will be represented by its locations property. A match is when a job location is either in the candidate's current location or any of the candidate's desired locations.

So the candidate list might look like this:

let candidates = [{
  desiresEquity: true, 
  currentLocation: 'New York',
  desiredLocations: ['San Francisco', 'Los Angeles', 'Colorado']
}, ...];
And a job might look like this:

let job = { 
  equityMax: 1.2, 
  locations: ['New York', 'Kentucky'] 
}
Continue on with Kata:

Job Matching #1
Job Matching #3
*/
function match(job, candidates) {
  return candidates.filter(c=>(job.equityMax>0||!c.desiresEquity)&&job.locations.some(l=>c.currentLocation===l||c.desiredLocations.includes(l)));
}
