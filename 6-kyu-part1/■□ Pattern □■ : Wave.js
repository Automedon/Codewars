/*
Description:
# Task:
Complete the pattern, using the special character
■ □
In this kata, we draw some histogram of the sound performance of ups and downs.
# Rules:
parameter waves The value of sound waves, an array of number, all number in array >=0.
return a string, ■ represents the sound waves, and □ represents the blank part, draw the histogram from bottom to top.
# Example:
draw([1,2,3,4])

□□□■
□□■■
□■■■
■■■■

draw([1,2,3,3,2,1])

□□■■□□
□■■■■□
■■■■■■

draw([1,2,3,3,2,1,1,2,3,4,5,6,7])

□□□□□□□□□□□□■
□□□□□□□□□□□■■
□□□□□□□□□□■■■
□□□□□□□□□■■■■
□□■■□□□□■■■■■
□■■■■□□■■■■■■
■■■■■■■■■■■■■


draw([5,3,1,2,4,6,5,4,2,3,5,2,1])

□□□□□■□□□□□□□
■□□□□■■□□□■□□
■□□□■■■■□□■□□
■■□□■■■■□■■□□
■■□■■■■■■■■■□
■■■■■■■■■■■■■

draw([1,0,1,0,1,0,1,0])

■□■□■□■□
*/
function draw(waves){
  let max = Math.max(...waves)
  let result = ''
  let level = max;
  for ( let i = 0; i < max; i++ ) {
    for ( let n of waves ) {
      result+=(n >= level ? '■' : '□') 
    }
  level -= 1;
  if (i<max-1) result+='\n'
  }
  return result
}
