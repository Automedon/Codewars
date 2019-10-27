/*
Description:
Given u0 = 1, u1 = 2 and the relation 6unun+1-5unun+2+un+1un+2 = 0 calculate un for any integer n >= 0.

#Examples

fcn(n) returns un: fcn(17) -> 131072, fcn(21) -> 2097152

Remark: You can take two points of view to do this kata:

the first one purely algorithmic from the definition of un

the second one - not at all mandatory, but as a complement - is to get a bit your head around and find which sequence is hidden behind un.
*/
function fcn(n) {
  return 2 ** n;
}
