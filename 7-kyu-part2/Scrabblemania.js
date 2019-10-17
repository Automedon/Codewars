/*
Description:
In this word game points are awarded based on the length of the word and the letters used.

The user has to create a word from the letters in their hand. Could you create a function which returns the correct score for the word played by the user?

The scoring of the letters is the same as in the game Scrabble (The letter scores are provided in the code). The score of the word is the sum of the points of all the letters multiplied by the number of letters in the word. If they use all their letters then they get a fifty point bonus. Their hand consists of seven letters.

An example: The word 'great' gives a score of 30. This is because the sum of the letter values is six (g=2, r=1, e=1, a=1, t=1) and it is a five letter word- 6*5=30.

The basis of this word game comes from content on MIT OpenCourseWare (Introduction to Computer Science).
*/
function wordscore(word) {
  let obj={"a" : 1, "b" : 3,"c" : 3,"d" : 2, "e" : 1, "f" : 4,"g" : 2,"h" : 4,"i" : 1,"j" : 8,"k" : 5,"l" : 1,"m" : 3,"n" : 1,"o" : 1,"p" : 3,"q" : 10,"r" : 1,"s" : 1,"t" : 1,"u" : 1,"v" : 4, "w" : 4,"x" : 8,"y" : 4,"z" : 10}
  return word.split(``).reduce((a,b)=>a+(obj[b]),0)*word.length+(word.length>=7?50:0)
}
