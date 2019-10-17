/*
Description:
Finish the uefaEuro2016() function so it return string just like in the examples below:

uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."
*/

function uefaEuro2016([t1,t2], [s1,s2]){
  if (s1==s2) return `At match ${t1} - ${t2}, teams played draw.`
  if (s2>s1) return `At match ${t1} - ${t2}, ${t2} won!`
  if (s2<s1) return `At match ${t1} - ${t2}, ${t1} won!`
}
