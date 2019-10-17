/*
Description:
Take a lyric that will be input into the function and split the words up into individual elements in a string.

Examples:

lyricSplit("There's no such thing as a life that's better than yours") // => ["There's", "no", "such", "thing", "as", "a", "life" ,"that's" ,"better", "than", "yours"]

lyricSplit("I know you still think about the times we had") // => ["I", "know", "you", "still", "think", "about", "the", "times", "we", "had"];
*/
function lyricSplit(lyric) {
  return lyric.split(` `)
}
