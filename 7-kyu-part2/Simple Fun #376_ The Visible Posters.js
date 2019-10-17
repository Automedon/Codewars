/*
Description:
Story
The citizens of Bytetown, could not stand that the candidates in the mayoral election campaign have been placing their electoral posters at all places at their whim. The city council has finally decided to build an electoral wall for placing the posters and introduce the following rules:

Every candidate can place exactly one poster on the wall. 
All posters are of the same height equal to the height of the wall;
the width of a poster can be any integer number of bytes
(byte is the unit of length in Bytetown). 
The wall is divided into segments and the width of each segment is one byte. 
Each poster must completely cover a contiguous number of wall segments.
They have built a wall 1000 bytes long (such that there is enough place for all candidates). When the electoral campaign was restarted, the candidates were placing their posters on the wall and their posters differed widely in width. Moreover, the candidates started placing their posters on wall segments already occupied by other posters.

Everyone in Bytetown was curious whose posters will be visible (entirely or in part) on the last day before elections.

Task
You are given a 2D integer array posters. Each subarray is a 2-elements array. i.e. [1,10]. It represents a poster, 1 and 10 represent the starting position and ending position of a poster.

Your task is to count the number of visible posters when all the posters are placed given the information about posters' size, their place and order of placement on the electoral wall.

You can assume that the poster's pasting order is in accordance with the index order of the array.

Still not understand the task? Look at the following example ;-)

Example
For posters =

[
[1,4],
[2,6],
[8,10],
[3,4],
[7,10]
]```
the output should be `4`
In the following text, the position of byte and the index of poster are 1-based a 1000 bytes wall 0000000000................. (poster-1 paste from byte1 to byte4) 1111000000................. (poster-2 paste from byte2 to byte6) 1222220000................. (poster-3 paste from byte8 to byte10) 1222220333................. (poster-4 paste from byte3 to byte4) 1244220333................. (poster-5 paste from byte7 to byte10) 1244225555................. Now, we can see, poster 1,2,4,5 are visible, but poster 3 was covered by poster 5.

For `posters =`
[ [1,2], [3,4], [5,6], [7,8], [9,10], [1,10] ]

the output should be `1`, because poster 1,2,3,4,5 covered by poster6.
Note
All positions of poster are valid(1 <= position <= 1000)

1 <= posters.length <= 100

Happy Coding ^_^
*/
function countVisible(posters){
  let poster = ('0'.repeat(Math.max(...posters.map(v=>v[1])))).split``
  for (let i=1;i<=posters.length;i++){
    for (let j=posters[i-1][0];j<=posters[i-1][1];j++){
      poster[j]=i  
    }
  }
  return [...new Set(poster)].length-1
}
