/*
Description:
My friend, a tennis beginner, asked me once annoyed: how can I really know which side to serve?

In tennis there is a legacy counting system that is quite irregular. It's not easy to find a pattern in it for a beginner.

The rules go as follows:

each game begins with serve on the left side at the state 0:0 (let's write it [0, 0]).
after each point the side changes until the game is over.
We want to write a simple code that will answer the question: Is it left side to serve? When it's the left side, the anwser is true. When it's the right side, the answer is false.

Write a function called serveOnLeft that will accept a score argument. The problem is we need to answer the question: "Should I serve on the left side?" basing on current score.

The scores for each player can be: 0, 15, 30, 40. There are also 3 situations to consider: "advantage in", "advantage out" and "deuce".

"Advantage" comes when a player is one point forward after 40:40. 40:40 is also called "deuce". When the player loses next point after having advantate, the result goes back to "deuce", the game ends after winning the point and a new game starts with 0:0.

Examples: In case of 0:0 serve on the left side (true) In case of 30:40 serve on the right side (false) In case of "deuce" or in other words 40:40 it's the left side to serve (true).

The player who has at least 40 points and gets the second point of advantage wins the game. When the last result is 40:40 it's "deuce". When the serving player has advantage it's called "advantage in" and when the opponent "advantage out". For more details about the tennis scoring system check: https://en.wikipedia.org/wiki/Tennis_scoring_system

The input is an array of two numbers representing points of each player or a string.

The string might be "deuce", "advantage in" or "advantage out".

And yes, there is a finite number of possible results. You can brute force the solution, but it's more fun in trying to find a pattern.

Good luck!
*/
function serveOnLeft(score) {
 if (score[0]===40&&score[1]===40) return true
 if (score[0]===30&&score[1]===40) return false
 if (score[0]===15&&score[1]===30) return false
 if (score[0]===0&&score[1]===40) return false
 if (score[0]===40&&score[1]===15) return true
 if (score[0]===30&&score[1]===0) return true
 if (score[0]===0&&score[1]===15) return false
 if (score==='deuce') return true
 if (score==='advantage out') return false
 if (score==='advantage in') return false
 if (score[0]>score[1]) return false 
 return true
}
