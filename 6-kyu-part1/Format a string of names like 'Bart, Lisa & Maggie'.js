/*
Description:
Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
*/

function list(names) {
  if (names.map(v => v.name).length > 1)
    return (
      names
        .map(v => v.name)
        .slice(0, -1)
        .join(", ") +
      " & " +
      names.map(v => v.name).slice(-1)
    );
  return names.map(v => v.name).slice(-1) + "";
}
