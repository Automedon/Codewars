/*
Description:
Write

function wordStep(str)
that takes in a string and creates a step with that word.

E.g

wordStep('SNAKES SHOE EFFORT TRUMP POTATO') ===

[['S','N','A','K','E','S',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
 [' ',' ',' ',' ',' ','H',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
 [' ',' ',' ',' ',' ','O',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
 [' ',' ',' ',' ',' ','E','F','F','O','R','T',' ',' ',' ',' ',' '],
 [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','R',' ',' ',' ',' ',' '],
 [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','U',' ',' ',' ',' ',' '],
 [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','M',' ',' ',' ',' ',' '],
 [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','P','O','T','A','T','O']]
Every word will end with the character that the next word will start with. You will start top left of the array and end bottom right. All cells that are not occupied by a letter needs to be a space ' '
*/
function wordStep(str) {
  let arr = str.split` `.map((v,i)=>i%2!==0?v.slice(1,-1):v)
  let a = Array.from({length:[...str].length},x=>[...str].map(v=>' '))
  let l =0
  let p =0
  let down = false
  for (let i=0;i<str.length;i++){
    if (str[i]===' '){
      if (!down)p--
      down=!down
    } else if (down){
      a[l][p]=str[i]
      l+=1
      if (str[i+1]===' ') l--
    } else {
      a[l][p]=str[i]
      p++
    }
  }
  a=a.filter(v=>!v.every(v=>v===' '))
  let index = a[a.length-1].join``.lastIndexOf(str[str.length-1])+1
  a=a.map(v=>v.slice(0,index))
  return a
}
