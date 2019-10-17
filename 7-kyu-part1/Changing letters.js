/*
Description:
When provided with a String, capitalize all vowels

For example:

Input : "Hello World!"

Output : "HEllO WOrld!"
*/
function swap(st){
  return st.replace(/[aeuio]/gi,$1=>$1.toUpperCase())
}
