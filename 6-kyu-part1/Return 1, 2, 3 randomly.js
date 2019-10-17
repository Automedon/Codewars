/*
Description:
You have function one_two (oneTwo for Java) that returns 1 or 2 with 50% chance. one_two is already defined in a global scope and can be called everywhere.

Your goal is to create function one_two_three (oneTwoThree for Java) that returns 1, 2 or 3 with equal probability using only one_two function.

Do not try to cheat returning repeating non-random sequences. There is randomness test especially for this case.
*/
function one_two_three() {
  let n = 2*one_two() + one_two() - 2
    while (![1,2,3].some(v=>v===n)){
        n = 2*one_two() + one_two() - 2
        }
    return n
}
