/*
Description:
Story
The word is on the street that you claim to be a safe-cracking jewel thief.

But are you?

This Kata will verify your safe-cracking abilities.

Kata
To prove you are a real thief you need to crack the combination of the safe, and then open it and tell me the value of the jewels inside!

The safe object has two methods:

Method	Parameter	Returns
Type	Meaning
`unlock`	combination	string	Sounds you can hear
No Sound
click	The first part of the combination is correct
click-click	The first two parts of the combination are correct
click-click-click	The combination is correct.
Now you can turn the handle to open the safe.

`open`	-	int	The value of the safe contents (range 0 - 100,000)
Combination Format
The safe combination is made up of 3 dial spins.

safe-dial
Spin the dial left L or right R
Numbers on the dial 00 - 99
Each part of the combination is separated by -
e.g. L23-R67-R09

ALGORITHMS
*/
var crack = function(safe) {
  const arr = [];
  let i=0;
  let fL=false;
  for (i=0; i<=100;i++){
      if (i===100&&(!fL)){
        i=0;
        fL=true;
      }
     let click =  safe.unlock(`${(fL?'L':'R')+i.toString().padStart(2,0)}`)
     if (click) {
       arr.push(`${(fL?'L':'R')+i.toString().padStart(2,0)}`)
       break
     }
  }
  fL=false
  for (i=0; i<=100;i++){
      if (i===100&&(!fL)){
        i=0;
        fL=true;
      }
     let click =  safe.unlock(arr[0]+'-'+`${(fL?'L':'R')+i.toString().padStart(2,0)}`)
     if (click==='click-click') {
       arr.push(arr[0]+'-'+`${(fL?'L':'R')+i.toString().padStart(2,0)}`)
       break
     }
  }
    fL=false
  for (i=0; i<=100;i++){
      if (i===100&&(!fL)){
        i=0;
        fL=true;
      }
     let click =  safe.unlock(arr[1]+'-'+`${(fL?'L':'R')+i.toString().padStart(2,0)}`)
     if (click==='click-click-click') {
       arr.push(arr[1]+'-'+`${(fL?'L':'R')+i.toString().padStart(2,0)}`)
       break
     }
  }
  return safe.open();
}
