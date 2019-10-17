/*
Description:
Finding your seat on a plane is never fun, particularly for a long haul flight... You arrive, realise again just how little leg room you get, and sort of climb into the seat covered in a pile of your own stuff.

To help confuse matters (although they claim in an effort to do the opposite) many airlines omit the letters 'I' and 'J' from their seat naming system.

the naming system consists of a number (in this case between 1-60) that denotes the section of the plane where the seat is (1-20 = front, 21-40 = middle, 40+ = back). This number is followed by a letter, A-K with the exclusions mentioned above.

Letters A-C denote seats on the left cluster, D-F the middle and G-K the right.

Given a seat number, your task is to return the seat location in the following format:

'2B' would return 'Front-Left'.

If the number is over 60, or the letter is not valid, return 'No Seat!!'.
*/
function planeSeat(a){
  let n=a.replace(/[a-z]/gi,'')*1
  let s=a.replace(/[0-9]/gi,'')
  if (s==='I'||s==='J') return 'No Seat!!'
  if (n>0&&n<21&&/[A-C]/.test(s)) return 'Front-Left'
  if (n>0&&n<21&&/[D-F]/.test(s)) return 'Front-Middle'
  if (n>0&&n<21&&/[G-K]/.test(s)) return 'Front-Right'
  if (n>20&&n<41&&/[A-C]/.test(s)) return 'Middle-Left'
  if (n>20&&n<41&&/[D-F]/.test(s)) return 'Middle-Middle'
  if (n>20&&n<41&&/[G-K]/.test(s)) return 'Middle-Right'
  if (n>40&&n<61&&/[A-C]/.test(s)) return 'Back-Left'
  if (n>40&&n<61&&/[D-F]/.test(s)) return 'Back-Middle'
  if (n>40&&n<61&&/[G-K]/.test(s)) return 'Back-Right'
  return 'No Seat!!'
}
