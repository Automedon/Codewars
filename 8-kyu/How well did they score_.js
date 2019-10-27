/*
You’re an English teacher in primary school.

Your aim is to make sure the kids are aware of the best times to use capital letters once you get to the end of your current sentence and want to begin a new one.

Remember not all fullstops equal the end of a sentence. If there are 3 or 4 in a row, thats an ellipsis which does not necessarily signify the end of a sentence. An ellipsis is used when omitting a word, phrase, line, paragraph, or more from a quoted passage.

... Also, be sure to let the students know if they’re missing their answer.
*/
function punctuation(str){
  if (str.length===0) return 'missing answer'
  let n = str.match(/\. [A-Z]/g,'')===null?0:str.match(/\. [A-Z]/g,'').length
return n>0?'full marks':'no marks'
}
