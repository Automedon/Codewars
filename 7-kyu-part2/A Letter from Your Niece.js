/*
Description:
Your sweet 4 year old niece has sent you a letter, however she is a little bit of an odd ball, so it needs a bit of decoding. You see she seems to love dinosars and often throws "trex" and "raptor" in mid sentence when she gets excited, and is convinced all vowels should be replaced by numbers (a=0, e=1, i=2, o=3, u=4).

Your challenge is to figure out what she is trying to say and fix her grammar- HINT - All sentences begin with a capital letter, end in a full stop and "I" should be capitalised, no need for capitals for names, she's only 4 after all :)
*/
function nonsense(str) {
  str = str.toLowerCase().replace(/(trex|raptor)/g,'').replace(/(0|1|2|3|4)/g,v=>{
    if (v==0) return 'a'
    if (v==1) return 'e'
    if (v==2) return 'i'
    if (v==3) return 'o'
    if (v==4) return 'u'
    return v
  }).replace(/(^.|\si\s)/g,v=>v.toUpperCase())
  if (str[str.length-1]!=='.') str+='.'
  return str;
}
