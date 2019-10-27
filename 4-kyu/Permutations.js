/*
Description:
In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

Examples:

permutations('a'); // ['a']
permutations('ab'); // ['ab', 'ba']
permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
The order of the permutations doesn't matter.
*/

function permutations(str) {
  return str.length <= 1
    ? [str]
    : Array.from(
        new Set(
          str
            .split("")
            .map((char, i) =>
              permutations(str.substr(0, i) + str.substr(i + 1)).map(
                p => char + p
              )
            )
            .reduce((r, x) => r.concat(x), [])
        )
      );
}
