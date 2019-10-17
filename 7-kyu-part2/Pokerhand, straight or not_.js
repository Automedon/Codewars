/*
Description:
Texas Hold-em!

Your task is to determine if the cards in the list makes up a straight (five cards of sequential rank) or not. The cards will always have values ranging from 2-14, where 14 is the ace.

Be aware that the ace (14) also should count as value 1!

The number of cards will vary, but will never be more than 7 (the board (5) + player hand (2))

Examples:

straight: 9-10-11-12-13

straight: 14-2-3-4-5

straight: 2-7-8-5-10-9-11

not straight: 7-8-12-13-14
*/
function isStraight(c){
  c=c.sort((a,b)=>a-b)
  let arr =[]
  let count = 1;
  for (let i=0;i<c.length;i++)
  {
  if (c[i]+1===c[i+1]||c[i]===c[i+1])
    {
      count++
    } else {
    arr.push(count)
    count=1
    }
  }
  if ('34568910'===c.join``) return false
  return arr.filter(v=>v>=4).length>0;
}
