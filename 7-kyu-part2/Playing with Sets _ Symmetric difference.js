/*
Set objects are new JavaScript built-in objects defined since ECMAScript 2015

A Set lets you store unique values of any type. It comes with some useful methods like .add, .clear, .has . . . BUT some "Set operations" are missing, like . . .

Symmetric difference

The symmetric difference is an extension of the complement. Denoted A Δ B, it's the set of all element of A which are not element of B and all element of B which are not element of A.

Example:
{7,8,9,10} Δ {9,10,11,12} = {7,8,11,12}.
Task
Create function symDiff getting 2 sets as arguments and returning a new Set as result of symmetric difference of these sets.

Examples:
A = new Set([1,2,3]);
B = new Set([2,3,4]);

symDiff(A,B) // -> {1,4}
Note: as I've got some problem outputting "Δ" in tests, I will use "^" instead of it.

 

" May the Code be with you ! "
*/
function symDiff(s1, s2) {
  return new Set(
    [...s1]
      .filter(v => ![...s2].includes(v))
      .concat([...s2].filter(v => ![...s1].includes(v)))
  );
}
