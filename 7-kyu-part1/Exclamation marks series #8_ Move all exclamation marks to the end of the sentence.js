/*
Description:
Description:
Move all exclamation marks to the end of the sentence

Examples
remove("Hi!") === "Hi!"
remove("Hi! Hi!") === "Hi Hi!!"
remove("Hi! Hi! Hi!") === "Hi Hi Hi!!!"
remove("Hi! !Hi Hi!") === "Hi Hi Hi!!!"
remove("Hi! Hi!! Hi!") === "Hi Hi Hi!!!!"
Note
Please don't post issue about difficulty or duplicate.
*/
function remove(s){
 const marks=s.length-s.replace(/!/g,'').length
  return s.replace(/!/g,'')+'!'.repeat(marks)
}
