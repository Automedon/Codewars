/*
Description:
We have a big list of jobs to do, and all of the jobs have been assigned a difficulty rating. Difficulties will be an integer, and they may be positive, negative or zero.

Jim and Bob have the job of doing all the jobs, but we need to find the position in the container where we can make a cut so that Jim and Bob have the most even workload to perform.

Kata
Your task is to write a function that identifies the place to split the workload for Jim and Bob, it will be supplied with a container of difficulty ratings, and you must return a tuple/array with (the optimum location of the split, the difference between the two total workloads). If no workload is provided, then return (None, None)/[null, null].

Worked Example
The workload we are give to split is as follows:

splitWorkload([1, 6, 2, 3, 5, 4, 1])
If we try cutting at each position then:

Split  Jim's work             Bob's work              Ratio  Difference
0      [],                    [1, 6, 2, 3, 5, 4, 1]   0:22   22
1      [1]                    [6, 2, 3, 5, 4, 1]      1:21   20
2      [1, 6]                 [2, 3, 5, 4, 1]         7:15   8
3      [1, 6, 2]              [3, 5, 4, 1]            9:13   4
4      [1, 6, 2, 3]           [5, 4, 1]               12:10  2
5      [1, 6, 2, 3, 5]        [4, 1]                  17:5   12
6      [1, 6, 2, 3, 5, 4]     [1]                     21:1   20
7      [1, 6, 2, 3, 5, 4, 1]  []                      22:0   22
As you can see when we split at position 4, we get the most even split with a difference of only 2. In the event of a tie where the minimum difference occurs more than once, we take the first position that gives the most even split.

Thus for our example, the result would be:

splitWorkload([1, 6, 2, 3, 5, 4, 1]) -> [4, 2]
You get self-awarded bonus points if your answer runs in O(n) time and memory constraints.
*/
function splitWorkload(w) {
  if (!w.length) return [null,null]
  let arr = []
  for (let i=0;i<=w.length;i++){
    arr.push([i,Math.abs(w.slice(0,i).reduce((a,b)=>a+b,0)-w.slice(i).reduce((a,b)=>a+b,0))])
  }
  return arr.sort((a,b)=>a[1]-b[1]||a[0]-b[0])[0]
}
