/*
Description:
Given three number- (a,b,c).
You should add them together and print the answer.

*Examples
sum(2,1,7) === 10
sum(20,5,30) === 55 *

Happy coding! :)
*/
function sum(){
  return [...arguments].reduce((a,b)=>a+b,0)
}
