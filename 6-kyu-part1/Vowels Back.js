/*
Description:
You need to play around with the provided string (s).

Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'.

Exceptions:

If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

Provided string will always be lower case, won't be empty and will have no special characters.
*/
function vowelBack(s){
  const a = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  const c = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
  const v = ['a','e','i','o','u']
  const aR = a.slice().reverse()
  return s.replace(/[a-z]/g,v=>{
    let or = v.slice()
    if (c.includes(v)){
      if (v==='c'||v==='o') return a[(a.indexOf(v)-1)%26]
      if (v==='d') return a[(a.indexOf(v)-3)%26]
      if (v==='e') return a[(a.indexOf(v)-4)%26]
      let l = a[(a.indexOf(v)+9)%26]
      if (['o','c','e','d'].includes(l)) return or
      return l 
    } else {
      if (v==='c'||v==='o') return a[(a.indexOf(v)-1)%26]
      if (v==='d') return a[(a.indexOf(v)-3)%26]
      if (v==='e') return a[(a.indexOf(v)-4)%26]
      let l=  aR[(aR.indexOf(v)+5)%26]
      if (['o','c','e','d'].includes(l)) return or
      return l 
    }
  })
}
