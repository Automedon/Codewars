/*
Description:
Andre 3000 is very excited. He loves hearing his favourite two words, "Ice Cold", and he can't help but sing and shout when he does. If Andre 3000 knows that he is about to hear the words "Ice Cold", his anticipation gradually builds, and he gets even more excited! He doesn't even mind if his favourite words are said in a sentence - as long as he gets to hear those two words, he's going to sing!

Write a function heyYa that takes in an array, returning a string of the word "alright" for every item in the array that doesn't contain the words "Ice Cold", but only until "Ice Cold" appears.

for example,

heyYa(["Hot Hot Hot", "Lukewarm", "Chilly", "Ice Cold", "Sub Zero"])
should return

"Alright alright alright."
You should bear in mind that Andre 3000 is a stickler for correct punctuation, and always starts his singing with a capital letter and ends with a full stop. However, he doesn't mind how his favourite words are capitalised, as long as they are together, seperated by a single space.

There are two other exceptions to bear in mind: Andre 3000 does not like to feel like he is being patronised. If the first item of the array contains the words "Ice Cold", he will be disappointed in you. Furthermore, Andre 3000 will also be disappointed if the words "Ice Cold" do not appear anywhere in the array. In both cases, return "Andre 3000 is disappointed in you."

Changed the conditions slightly
*/
function heyYa(w) {
  if (/ice Cold/gi.test(w[0])) return "Andre 3000 is disappointed in you."
  if (w.every(v=>!/ice Cold/gi.test(v))) return "Andre 3000 is disappointed in you."
  return 'A'+(w.slice(0,w.findIndex(v=>/ice Cold/gi.test(v))).map(v=>'alright').join` `+'.').slice(1)
}
