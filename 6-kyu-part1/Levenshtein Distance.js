/*
Description:
In information theory and computer science, the Levenshtein distance is a string metric for measuring the difference between two sequences. Informally, the Levenshtein distance between two words is the minimum number of single-character edits (i.e. insertions, deletions or substitutions) required to change one word into the other.

(http://en.wikipedia.org/wiki/Levenshtein_distance)

Your task is to implement a function which calculates the Levenshtein distance for two arbitrary strings.
*/
function levenshtein(a, b) {
  return distance(a, b, a.length, b.length)
  
  function distance(a, b, x, y) {
    if (!x) return y
    if (!y) return x
    
    return Math.min(
      distance(a, b, x - 1, y) + 1,
      distance(a, b, x, y - 1) + 1,
      distance(a, b, x - 1, y - 1) + (a[x - 1] != b[y - 1] ? 1 : 0)
    )
  }
}
