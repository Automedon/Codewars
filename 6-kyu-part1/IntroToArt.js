/*
Description:
Help prepare for the entrance exams to art school.

It is known in advance that this year, the school chose the symmetric letter “W” as the object for the image, and the only condition for its image is only the size that is not known in advance, so as training, you need to come up with a way that accurately depicts the object.

Write a function that takes an integer and returns a list of strings with a line-by-line image of the object.

Below is an example function:

get_w(3) # should return:
[
'*   *   *',
' * * * * ',
'  *   *  '
]

get_w(5) # should return:
[
'*       *       *',
' *     * *     * ',
'  *   *   *   *  ',
'   * *     * *   ',
'    *       *    '
]
Return an empty list for height < 2.
*/
function getW(height) {
  if (height === 2) return ["* * *", " * * "];
  if (height < 2) return [];
  let arr = Array.from({ length: height }, (x, i) =>
    Array.from({ length: height * height }, x => " ")
  );
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i][j++] = "*";
  }
  for (let i = arr.length - 2; i >= 0; i--) {
    arr[i][j++] = "*";
  }
  for (let i = 1; i < arr.length; i++) {
    arr[i][j++] = "*";
  }
  for (let i = arr.length - 2; i >= 0; i--) {
    arr[i][j++] = "*";
  }
  let index = arr[0].lastIndexOf("*");
  return arr.map(v => v.slice(0, index + 1).join``);
}
