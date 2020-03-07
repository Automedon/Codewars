/*
Description:
I want to know the longest length of consecutive items of X there are in Y. I will provide you an item (Y), and a key to search for (X). Return the length of the longest segment of consecutive keys (X) in Y.

Rules:

The item will be either an integer or string data type.

The key will be an integer or string data type.

The return value will be an integer data type.

If the key does not appear in the number, return 0.

Example1:

items = 90000;

key = 0;

return value: 4;

Example2:

items = 'abcdaaadse';

key = 'a';

return value: 3;


*/
function getConsectiveItems(items, key){
  let arr = items.toString().match(new RegExp(`${key}+`,'g')) || []
  return arr.length===0 ? 0 : Math.max(...arr.map(v=>v.length))
}
