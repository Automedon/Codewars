/*
Description:
This kata has one simple requirement, return 3 as a sum of three variables containing values as 1, but in a twisted way...

This initial code looks correct but doesn't work. Your job is to find the issue and fix it.

Note: You are neither allowed to change the places where those variables are initialized, nor can you change the values to anything other than 1, and you shouldn't touch the return statement either.
*/
function isTotal3() {
  var simpleVariable = 1;
  
  for (var index = 0; index < 1; index++)
    var variableInLoop = 1;
  
  (function defineAVariable() {
    variableInFunction = 1;
  })();
  
  var result = simpleVariable + variableInLoop + variableInFunction;
  
  return result;
}
