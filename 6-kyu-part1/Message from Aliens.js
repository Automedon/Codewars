/*
Description:
Task
Aliens send messages to our planet. They use very strange language. Try to decode their messages.
*/
function decode(m) {
  const d = {
    "__":' ', "/\\":'a', "]3":'b',"(":'c',"|)":'d' ,"[-":'e',"/=":'f',"\(_,":'g' ,"|-|":'h' ,"|":'i',"_T":'j',
    "/<":'k', "|_":'l',"|\\/|":'m' ,"|\\|":'n' ,"()":'o' ,
    "|^":'p' ,"()_":'q' ,
    "/?":'r' ,"_\\~":'s' ,"~|~":'t' ,"|_|":'u',"\\/":'v' ,"\\/\\/":'w',"><":'x' ,"`/":'y',"~/_":'z'}
  return m.split(m[0]).map(v=>d[v]?d[v]:'').reverse().join``
}
