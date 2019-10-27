/*
Description:
In Haskell, Monads are simple containers, or even 'box-like' datastructures, of which lists are included, which can respond to certain functions, which are defined in the Monad typeclass. (To put it simply!)

In this kata, you must implement the Bind function for lists, or arrays. In haskell, the function is represented by >>=, but we'll just call it bind.

Essentially, bind should map the array with the function given, and then flatten it one time. Don't manipulate the original array; make you function pure: without side-effects, so that no variables are edited whilst the function is carried out.

Here's how it should work:

bind( [1,2,3], function(a){ return [a+1] } )
=> [2,3,4]

bind( [1,2,3], function(a){ return [[a]] } )
=> [[1],[2],[3]]

bind( [1,2,3], function(a){ return a } )
=> # ERROR! The returned value is not a list!
As per usual, the ruby function will be passed a Proc or Lambda. Remember that the function still takes two arguments!
*/
bind = function(list, func) {
  if (typeof func(list[0]) !== "object") {
    throw Error();
  }
  return list.reduce((a, b) => a.concat(func(b)), []);
};
