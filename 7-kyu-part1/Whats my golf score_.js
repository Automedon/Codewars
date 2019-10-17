/*
Description:
I have the par value for each hole on the golf course and my stroke score on each hole. Im tired of calculating it by hand. Can you write a program that calculates my golf score for me?

Task Overview
Write the method golfScoreCalculator/GolfScoreCalculator which accepts two strings and calculates the golf score of a game. The two arguments can always be assumed to be strings. In Javascript, the length of these two strings will always match.

Usage Examples
golfScoreCalculator("453454444344544443", "354445334534445344") => -1
*/
function golfScoreCalculator(parList, scoreList){
  const par=parList.split('').reduce((a,b)=>a+(b*1),0)
  const score=scoreList.split('').reduce((a,b)=>a+(b*1),0)
  return score-par
}
