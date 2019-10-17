/*
Description:
Amy and May aren't allowed by their parents to have cell phones, so they still communitcate in class the good old fashioned way, by writing notes.

So that no snoopy teachers can read any found notes, the girls communicate in code.

May is having a hard time deciphering Amy's latest messages, can you help her figure it out?

Input: String written in Amy's code Output: String decoded to Engligh so May can read it
*/
function decipher(codedMessage){
  const dict = 'abcdefghijklmnopqrstuvwxyz'
  const dictU = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  codedMessage=codedMessage.split(``).map(v=>dict.includes(v)?dict[(dict.indexOf(v)+7)%26]:v).join(``)
  return codedMessage.split(``).map(v=>dictU.includes(v)?dictU[(dictU.indexOf(v)+7)%26]:v).join(``)
}
