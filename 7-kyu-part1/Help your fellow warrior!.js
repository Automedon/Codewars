/*
Description:
Let's say that in a hypothetical platform that resembles Codewars there is a clan with 2 warriors. The 2nd one in ranking (lets call him D) wants to at least reach the honor score of his ally (lets call her M). (Let's say that there is no antagonism here, he just wants to prove his ally that she sould be proud to have him in the clan and sees this as the only way to achieve it! :P )

Your task is to help D by providing him with the quickest path to reach M's honor score.

In this hypothetical platform there are 2 kinds of kata to be solved:

'2kyu' worth of 1 point 
'1kyu' worth of 2 points 
So if for example:

M has honor 11
D has honor 2
D could reach M`s honor by solving kata worth of 9. He has many options to do this:

Solve 9 '2kyus' (9*1 -> 9) => Solve 9 kata
Solve 4 '1kyus' and 1 '2kyus' (4*2 + 1*1-> 9) => Solve 5 kata
Solve 2 '1kyus' and 5 '2kyus' (2*2 + 5*1 -> 9) => Solve 7 kata
etc etc...
The quickest path to reach the honor score is:

4 '1kyus' and 1 '2kyus' => Solve only 5 kata
Create a function getHonorPath that accepts 2 arguments honorScore & targetHonorScore with score integers of 2 warriors and returns an object with the quickest path for the first one to reach the 2nd's honor. For example:

getHonorPath(2, 11) should return { '1kyus': 4, '2kyus': 1 }
getHonorPath(20, 11) should return {}
For the purpose of this kata you do not have to worry for any non-integer arguments for honor scores
*/
function getHonorPath(honorScore, targetHonorScore) {
  return honorScore < targetHonorScore
    ? {
        "1kyus": Math.floor((targetHonorScore - honorScore) / 2),
        "2kyus": (targetHonorScore - honorScore) % 2
      }
    : {};
}
