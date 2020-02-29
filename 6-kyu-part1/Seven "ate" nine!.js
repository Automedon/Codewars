/*
Description:
Seven is a hungry number and its favourite food is number 9. Whenever it spots 9 through the hoops of 8, it eats it! Well, not anymore, because you are going to help the 9 by locating that particular sequence (7,8,9) in an array of digits and tell 7 to come after 9 instead. Seven "ate" nine, no more! (If 9 is not in danger, just return the same array)
*/
function hungrySeven(arr) {
  arr = arr.join``;
  while (/789/.test(arr)) arr = arr.replace(/789/g, "897");
  return arr.split``.map(v => v * 1);
}
