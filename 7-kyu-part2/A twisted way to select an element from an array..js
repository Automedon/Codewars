/*
You have two arrays: arrSearch and arrTake. arrSearch has to be sorted in reverse alphabetical order. Now, from arrSearch extract the third element, and from that element select the third letter. If the letter you selected matches the first letter of one or more elements of arrTake, return the first element that starts with the respective letter. If there is no element to match in the second array then return 'Nothing here'.
*/
function select(arrSearch, arrTake) {
  arrSearch = arrSearch.sort((a, b) => b.localeCompare(a));
  let l = arrSearch[2][2];
  let find = arrTake.find(v => v[0] === l);
  return find === undefined ? "Nothing here" : find;
}
