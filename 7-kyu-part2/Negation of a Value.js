/*
Description:
In programming you know the use of the logical negation operator (!), it reverses the meaning of a condition.

!false = true
!!false = false
Your task is to complete the function 'negationValue()' that takes a string of negations with a value and returns what the value would be if those negations were applied to it.

negationValue("!", false); //=> true
negationValue("!!!!!", true); //=> false
negationValue("!!", []); //=> true
Do not use the eval() function or the Function() constructor in JavaScript.

Note: Always return a boolean value, even if there're no negations.
*/
function negationValue(string, value) {
  let bool=Boolean(value)
  return string.length%2!==0?!bool:bool
}
