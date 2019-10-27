/*
Description:
Compare 2 integers and return if they are equals, don't use the comparison Operators

Can't use these Operators

Operator	Description
==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to
Example:
  0 == 0  => true 
  0 == 1  => false 
[DCK001]
*/
function d01(a, b) {
  return !Boolean(a - b);
}
