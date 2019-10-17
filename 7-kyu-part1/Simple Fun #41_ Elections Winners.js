/*
Description:
Task
Elections are in progress!

Given an array of the numbers of votes given to each of the candidates so far, and an integer k equal to the number of voters who haven't cast their vote yet, find the number of candidates who still have a chance to win the election.

The winner of the election must secure strictly more votes than any other candidate. If two or more candidates receive the same(maximum) number of votes, assume there is no winner at all.

Example
For votes = [2, 3, 5, 2] and k = 3, the output should be 2

 A,B,C,D have 2,3,5,2 votes
 There are 3 voters haven't cast their vote yet

 if 3 voters vote for A: 2 + 3 = 5, 
 His votes does not exceed C(5 votes)
 So A has no chance to win the election

 if 3 voters vote for B: 3 + 3 = 6, 
 B(6) will beat other candidates(A->2,C->5,D->2) to win election
 So B has a chance to win the election

 if 3 voters vote for C: 5 + 3 = 8, 
 C(8) will beat other candidates(A->2,B->3,D->2) to win election
 So C has a chance to win the election

 if 3 voters vote for D: 2 + 3 = 5, 
 His votes does not exceed C(5 votes)
 So D has no chance to win the election

 B and C have a chance to win the election,
 The result should be 2
For votes = [3, 1, 1, 3, 1] and k = 2, the output should be 2

The 1st,4th candidates have a chance to win the election. The result should be 2.

For votes = [1, 3, 3, 1, 1] and k = 0, the output should be 0

There is no more voters haven't cast their vote yet, and no candidate secure strictly more votes than any other candidate. So no candidate have a chance to win the election. The result should be 0.

Input/Output
[input] integer array votes

A non-empty array of non-negative integers. Its ith element denotes the number of votes cast for the ith candidate.

Constraints: 4 ≤ votes.length ≤ 100000, 0 ≤ votes[i] ≤ 10000.

[input] integer k

The number of voters who haven't cast their vote yet.

Constraints: 0 ≤ k ≤ 100000.

[output] an integer
*/
function electionsWinners(votes, k) {
  let max = Math.max(...votes);

  return k
    ? votes.filter(v => v + k > max).length
    : +(votes.filter(v => v === max).length === 1);
}
