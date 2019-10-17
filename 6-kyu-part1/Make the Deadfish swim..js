/*
Description:
Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

parse("iiisdoso") => [ 8, 64 ]
*/
// Return the output array, and ignore all non-op characters
function parse( data )
{
  const arr=[];
  let score=0;
  data.split('').map(v=>{
  if (v==='i'){score++}
    if (v==='d'){score--}
      if (v==='s'){score=Math.pow(score,2)}
        if (v==='o'){arr.push(score)}
  })
  return arr
}
