/*
Description:
You have to build a pyramid.

This pyramid should be built from characters from a given string.

You have to create the code for these four methods:

function watchPyramidFromTheSide(characters)

function watchPyramidFromAbove(characters)

function countVisibleCharactersOfThePyramid(characters)

function countAllCharactersOfThePyramid(characters)
The first method ("FromTheSide") shows the pyramid as you would see from the side.
The second method ("FromAbove") shows the pyramid as you would see from above.
The third method ("CountVisibleCharacters") should return the count of all characters, that are visible from outside the pyramid.
The forth method ("CountAllCharacters") should count all characters of the pyramid. Consider that the pyramid is completely solid and has no holes or rooms in it.

Every character will be used for building one layer of the pyramid. So the length of the given string will be the height of the pyramid. Every layer will be built with stones from the given character. There is no limit of stones.
The pyramid should have perfect angles of 45 degrees.


Example: Given string: "abc"

Pyramid from the side:

  c
 bbb
aaaaa
Pyramid from above:

aaaaa
abbba
abcba
abbba
aaaaa
Count of visible stones/characters:

25
Count of all used stones/characters:

35

There is no meaning in the order or the choice of the characters. It should work the same for example "aaaaa" or "54321". 
Hint: Your output for the side must always be a rectangle! So spaces at the end of a line must not be deleted or trimmed! 
If the string is null or empty, you should exactly return this value for the watch-methods and -1 for the count-methods. 

Have fun coding it and please don't forget to vote and rank this kata! :-) 
I have created other katas. Have a look if you like coding and challenges.
*/
function watchPyramidFromTheSide(characters){
  if (characters===null) return null
  let side = []
  characters=characters.split``.reverse().join``
  for (let i=0,j=1;i<characters.length;i++,j+=2){
    side.push(' '.repeat(characters.length-1-i)+characters[i].repeat(j)+' '.repeat(characters.length-1-i))
  }
  return side.join`\n`
}
  
function watchPyramidFromAbove(c,showCount=false){
  if (c===null) return null
  if (!c.length) return ``
  let count = 0
  let max = (c.length-1)*2+1
  let above = Array.from({length:max},(v=>Array.from({length:max},(v=>``))))
  for (let k=0;k<c.length;k++){
    for (let i=0+k;i<max-k;i++){
      for (let j=0+k;j<max-k;j++){
        above[i][j]=c[k]
        count++
      }
    }
  }
  if (showCount) return count
  return above.map(v=>v.join``).join`\n`
}

function countVisibleCharactersOfThePyramid(characters){
  if (characters===null||!characters.length) return -1
  let max = (characters.length-1)*2+1
  return max*max  
}

function countAllCharactersOfThePyramid(characters){
  if (characters===null||!characters.length) return -1
  return watchPyramidFromAbove(characters,true)
}
