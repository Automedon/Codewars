/*
Description:
Twice of a number(2*a number) added to 4 gives 20. Write a function that return a number's value.

Return null if added_value or total_value is not a string/number.

Tip
Writing Equations On Paper Will Made You Easy
*/
function twiceOfANumber(a, t) {  
  if (typeof a ==='boolean' ||typeof t ==='boolean' ) return null
  a=a*1
  t=t*1
  if (a<=0&&t>=0){
    return (a*-1+t)/2
  }
  if (a>0&&t<=0){
    return -(a+t*-1)/2
  }
  if (a>=0&&t>0){
    return (a*-1+t)/2
  }
  if (a<=0&&t<0){
    return -(t*-1+a)/2
  }
}
