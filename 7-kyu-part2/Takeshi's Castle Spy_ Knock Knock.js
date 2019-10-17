/*
Description:
Imagine you are watching a variation upon the challenge 'Knock Knock' from the cult Japanese game show Takeshi's Castle - link here.

In this version, contestants must navigate their way through a series of walls, each of which has a certain number of doors, each painted with a single letter or digit. If any of the doors show a character that was also shown in the previous set, then that door will be open. Otherwise, it will be locked.

If there is no shared character between the current set of doors and the previous set, then the contestant must climb over the wall.

You hatch a devious plan, and decide to write a function that will process the course, returning a special code that future contestants may purchase in order to navigate the course as quickly as possible... very immoral, I know.


So:

You will be passed a string of random values, where each value represents a set of doors, and each character a door. E.g "uy6uq lhh105 tuzpwjus nc1a2 p6v7md cpyp p69hq2b8c 3a9k9r1aq"

The first value represents the beginning of the course, so simply log an exclamation mark.

From there, if a value shares a single character with the previous value, then log that character.

In the case that there are more than one characters in common (e.g "fr7og goat7"), then log the shared character that appears first in the current value - if the current value is "goat7", preceded by "fr7og", then log "g", and NOT "o" or "7".

If there is no shared character between the values, then log a caret, "^", in order to show the contestant climbing over the wall.

Your function should return an unspaced string of the logged characters. For example:

  knockKnock("uy6uq lhh105 tuzpwjus nc1a2 p6v7md cpyp p69hq2b8c 3a9k9r1aq");
  should return "!^^^^pp9"
Notes:

The number of doors in each wall will be random.

The number of walls will also be random.

Each value will always be alphanumeric.

All letters will be lower-case.
*/
function knockKnock(str){
  let arr = str.split` `.map(v=>v.split``)
  let ar =  [];
  for (let i=1;i<arr.length;i++){
    ar.push(filt(arr[i-1],arr[i]))
  }
  return '!'+ar.map(v=>v?v:'^').join``
}

function filt(arr1,arr2){
  return arr2.filter((v,i)=>arr1.includes(v))[0]
}
