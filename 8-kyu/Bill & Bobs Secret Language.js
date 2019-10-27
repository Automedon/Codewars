/*
Description:
Bill & Bob chat a lot but they don’t want people to understand what they’re talking about. So they have created a secret language where they reverse each word in a sentence as well as reversing the sentence itself!

They also add "#" at the start and the end of the sentence so they know it's the secret language.

For example: -> Hello this is me = #em si siht olleH#,

-> Bye! = #!eyB#

Unfortunately Bob is a very lazy man and needs someone to convert sentences into their secret language.

Please help Bob in constructing his secret conversations with Bill!
*/
function reverse(str){
  return `#${[...str].reverse().join``}#`
}
