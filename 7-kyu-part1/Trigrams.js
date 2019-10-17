/*
Description:
Trigrams are a special case of the n-gram, where n is 3. One trigram is a continious sequence of 3 chars in phrase. Wikipedia

return all trigrams for the given phrase
replace spaces with _
return an empty string for phrases shorter than 3
Example:

trigrams('the quick red') == the he_ e_q _qu qui uic ick ck_ k_r _re red
*/
function trigrams( phrase ) {
  const arr=[];
  for (let i=0; i<phrase.length-2;i++){
  arr.push(phrase.slice(i,i+3))
  }
  return arr.map(v=>v.replace(/\s/g,'_')).join(' ')
}
