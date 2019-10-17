/*
Description:
Write Number in Expanded Form - Part 2
This is version 2 of my 'Write Number in Exanded Form' Kata.

You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(1.24); // should return '1 + 2/10 + 4/100'
expandedForm(7.304); // should return '7 + 3/10 + 4/1000'
expandedForm(0.04); // should return '4/100'
*/
function expandedForm(num) {
   let str = num.toString().split`.`
   let f = str[0].split``.reverse().map((v,i)=>v*1===0?'':v+'0'.repeat(i)).filter(v=>v).reverse().join` + `
   let s = str[1].split``.map((v,i)=>v*1===0?'':v+'/'+'1'+'0'.repeat(i+1)).filter(v=>v).join` + `
   return ([f,s].join` + `).replace(/^[^0-9]+/g,'')
}
