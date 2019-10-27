/*
Description:
Write a function that returns the index of the first occurence of the word "Wally". "Wally" must not be part of another word, but it can be directly followed by a punctuation mark. If no such "Wally" exists, return -1.

Examples:

"Wally" => 0

"Where's Wally" => 8

"Where's Waldo" => -1

"DWally Wallyd .Wally" => -1

"Hi Wally." => 3

"It's Wally's." => 5

"Wally Wally" => 0

"'Wally Wally" => 7
*/
function wheresWally(string) {
  return (" " + string).search(/ Wally\b/);
}
