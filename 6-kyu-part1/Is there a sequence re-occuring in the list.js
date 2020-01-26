/*
Description:
You are given a list of items (characters and/or integers). Find if an item reoccurs after a break of its sequence (see explanation below). In other words: are there any items that reoccur in the list, but separated by one or more different items?

A sequence is a continuous "repetition" (1 or more occurence) of the same item. For example:

[0, 0, 0, 0, 0, 0, 1, 2, 3, 3, 3, 4, 0, 0]
  sequence of 0s | other sequences | ^ 0 reoccurs!
Return true if there is such an item, and false otherwise.

Examples
[0, 0, 1, 1, 0, 0]       ==> True   # 0 is re-occuring
[0, 0, 'a', 0]           ==> True   # 0 is re-occuring
[0, 0, 1, 1, 2, 2, 1, 1] ==> True   # 1 is re-occuring
[0, 0, 0]                ==> False  # no sequence re-occurs
[0, 0, 1, 1, 2, 2]       ==> False  # no sequence re-occurs
Note: Lists with up to 107 items will be tested, so make sure your code is efficient!
*/
function isReoccuring(items)
{
  let str = ''+items[0]
  for(let i=0;i<items.length;i++){
    if (str[str.length-1]==items[i]) continue
    else if (str.includes(items[i])) return true
    else str+=items[i]
  }
  return false
}
