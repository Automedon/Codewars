/*
Description:
You have two arguments: string - a string of random letters(only lowercase) and array - an array of strings(feelings). Your task is to return how many specific feelings are in the array.

For example:

string -> 'yliausoenvjw'
array -> ['anger', 'awe', 'joy', 'love', 'grief']
output -> '3 feelings.' // 'awe', 'joy', 'love'


string -> 'griefgriefgrief'
array -> ['anger', 'awe', 'joy', 'love', 'grief']
output -> '1 feeling.' // 'grief'


string -> 'abcdkasdfvkadf'
array -> ['desire', 'joy', 'shame', 'longing', 'fear']
output -> '0 feelings.'
If the feeling can be formed once - plus one to the answer.

If the feeling can be formed several times from different letters - plus one to the answer.

Eeach letter in string participates in the formation of all feelings. 'angerw' -> 2 feelings: 'anger' and 'awe'.
*/
function countFeelings(string, array) {
  const dict = string.split``.reduce((a, b) => ((a[b] = a[b] + 1 || 1), a), {});
  let count = 0;
  array
    .map(v => v.split``.reduce((a, b) => ((a[b] = a[b] + 1 || 1), a), {}))
    .map(v => {
      for (let i in v) {
        if (dict[i] === undefined) return;
        if (dict[i] < v[i]) return;
      }
      count++;
    });
  return count + ` feeling${count !== 1 ? "s" : ""}.`;
}
