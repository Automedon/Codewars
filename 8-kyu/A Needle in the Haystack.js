/*
Description:
Can you find the needle in the haystack?
Write a function findNeedle() that takes an array full of junk but containing one "needle"
After your function finds the needle it should return a message (as a string) that says:
"found the needle at position " plus the index it found the needle, so:
Python, Ruby & Elixir
find_needle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
JavaScript & TypeScript
findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
Java
findNeedle(new Object[] {"hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"})
should return

"found the needle at position 5"
*/

function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}
