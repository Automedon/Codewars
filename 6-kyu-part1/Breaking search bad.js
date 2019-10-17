/*
Description:
We have a search function who return an array of titles that match the String passed as an argument.

var titles = ['Rocky 1', 'Rocky 2', 'My Little Poney'];
search('ock')  // ==> should return ['Rocky 1', 'Rocky 2']
But the function return some weird result and skip some of the matching results.

Does the function have special movie taste ?

Let's figure out !
*/
function search(searchTerm) {
  return TITLES.filter(v => new RegExp(searchTerm, "i").test(v));
}
