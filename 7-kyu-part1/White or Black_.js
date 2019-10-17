/*
Description:
In this kata you have a chess board 8x8. Create a function

function mineColor(line, number)
that calculate the color of the field and returns it(white / black)

Examples:

mineColor(a, 8) ==> 'white'
mineColor(b, 1) ==> 'white'
mineColor(a, 1) ==> 'black' 
*/
function mineColor(line, number) {
 const dict = {a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8}
 return dict[line] % 2 === number % 2 ? 'black':'white';
}
