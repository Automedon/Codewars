/*
Description:
Scheduling is how the processor decides which jobs(processes) get to use the processor and for how long. This can cause a lot of problems. Like a really long process taking the entire CPU and freezing all the other processes. One solution is Shortest Job First(SJF), which today you will be implementing.

SJF works by, well, letting the shortest jobs take the CPU first. If the jobs are the same size then it is First In First Out (FIFO). The idea is that the shorter jobs will finish quicker, so theoretically jobs won't get frozen because of large jobs. (In practice they're frozen because of small jobs).

You will be implementing:

  function SJF(jobs, index)
It takes in:

"jobs" a non-empty array of positive integers. They represent the clock-cycles(cc) needed to finish the job.
"index" a positive integer. That represents the job we're interested in.
SJF returns:

A positive integer representing the cc it takes to complete the job at index.
Here's an example:

SJF([3, 10, 20, 1, 2], 0)
at 0cc [3, 10, 20, 1, 2] jobs[3] starts
at 1cc [3, 10, 20, 0, 2] jobs[3] finishes, jobs[4] starts
at 3cc [3, 10, 20, 0, 0] jobs[4] finishes, jobs[0] starts
at 6cc [0, 10, 20, 0, 0] jobs[0] finishes
so:

SJF([3,10,20,1,2], 0) == 6
*/
function SJF(jobs, index){
  let saved=jobs[index]
  let sum=0
  let arr = jobs.map(v=>{
  if (v<saved){
  sum+=v
  return 0
  }
  if (v===saved) return v
  return 0
  })
  return arr.slice(0,index+1).reduce((a,b)=>a+b,0)+sum
}
