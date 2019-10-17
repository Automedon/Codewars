/*
Description:
We all want to climb the leaderboard. Even given some of the massive scores on there, it's nice to know how close you are...

In this kata you will be given a username and their score, your score (not your real score) and you need to calculate how many kata you need to complete to beat their score, by 1 point exactly.

As this is the easy version (harder one to folow at some point in the future), let's assume only Beta kata and 8kyu kata are available. Worth 3 and 1 point respectively.

Return a string like this: 'To beat "user"'s score, I must complete "x" Beta kata and "y" 8kyu kata.'.

If the total number of kata you need to complete > 1000, add 'Dammit!' to the end of the string also - like so:

'To beat "user"'s score, I must complete 'x' Beta kata and 'y' 8kyu kata. Dammit!'.

If your score is higher than the user's already, return 'Winning!'. If they are equal, return 'Only need one!'.

You are looking to complete as few kata as possible to get to your target
*/
function leaderB(user, user_score, your_score){ 
  let number = (user_score-your_score)%3
  let beta = Math.floor((user_score-your_score)/3)
  if (number===0&&beta===0) return 'Only need one!'
  if (beta<=0) return 'Winning!'
  if (beta>=1000) return `To beat ${user}'s score, I must complete ${beta} Beta kata and ${number} 8kyu kata. Dammit!`
  return `To beat ${user}'s score, I must complete ${beta} Beta kata and ${number} 8kyu kata.`

}
