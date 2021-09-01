/*
Description:
Substitute two equal letters by the next letter of the alphabet (two letters convert to one):

"aa" => "b", "bb" => "c", .. "zz" => "a".
The equal letters do not have to be adjacent.
Repeat this operation until there are no possible substitutions left.
Return a string.

Example:

let str = "zzzab"
    str = "azab"
    str = "bzb"
    str = "cz"
return "cz"
Notes
The order of letters in the result is not important.
The letters "zz" transform into "a".
There will only be lowercase letters.
If you like this kata, check out another one: Last Survivor Ep.3
*/

function lastSurvivors(str) {
  while(haveDup(str)){
    str = str.split('').sort((a,b)=>a.localeCompare(b)).join('').replace(/(.)\1/gi,(v)=>{
      return dict[v]
      })
  }
  return str
}

const haveDup = (str) => str.length !== [...new Set(str)].length

const dict = {
  aa:'b',
  bb:'c',
  cc:'d',
  dd:'e',
  ee:'f',
  ff:'g',
  gg:'h',
  hh:'i',
  ii:'j',
  jj:'k',
  kk:'l',
  ll:'m',
  mm:'n',
  nn:'o',
  oo:'p',
  pp:'q',
  qq:'r',
  rr:'s',
  ss:'t',
  tt:'u',
  uu:'v',
  vv:'w',
  ww:'x',
  xx:'y',
  yy:'z',
  zz:'a',
}
