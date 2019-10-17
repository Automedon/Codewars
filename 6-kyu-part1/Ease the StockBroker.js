/*
Description:
Clients place orders to a stockbroker as strings. The order can be simple or multiple.

Type of a simple order: Quote/white-space/Quantity/white-space/Price/white-space/Status

where Quote is formed of non-whitespace character, Quantity is an int, Price a double (with mandatory decimal point "." ), Status is represented by the letter B (buy) or the letter S (sell).

Example:

"GOOG 300 542.0 B"

A multiple order is the concatenation of simple orders with a comma between each.

Example:

"ZNGA 1300 2.66 B, CLH15.NYM 50 56.32 B, OWW 1000 11.623 B, OGG 20 580.1 B"

or (C)

"ZNGA 1300 2.66 B,CLH15.NYM 50 56.32 B,OWW 1000 11.623 B,OGG 20 580.1 B"

To ease the stockbroker your task is to produce a string of type

"Buy: b Sell: s" where b and s are 'double' formatted with no decimal, b representing the total price of bought stocks and s the total price of sold stocks.

Example:

"Buy: 294990 Sell: 0"

Unfortunately sometimes clients make mistakes. When you find mistakes in orders, you must pinpoint these badly formed orders and produce a string of type:

"Buy: b Sell: s; Badly formed nb: badly-formed 1st simple order ;badly-formed nth simple order ;"

where nb is the number of badly formed simple orders, b representing the total price of bought stocks with correct simple order and s the total price of sold stocks with correct simple order.

Examples:

"Buy: 263 Sell: 11802; Badly formed 2: CLH16.NYM 50 56 S ;OWW 1000 11 S ;"

"Buy: 100 Sell: 56041; Badly formed 1: ZNGA 1300 2.66 ;"

Notes:

Due to Codewars whitespace differences will not always show up in test results.
With Golang use a format with "%.0f" for "Buy" and "Sell".
*/
function balanceStatements(list){
  let arr  = list.split`,`.filter(v=>/^.+ \d+ \d*\.\d+ \w$/.test(v.trim())).map(v=>v.trim())
  let filtred = list.split`,`.filter(v=>!/^.+ \d+ \d*\.\d+ \w$/.test(v))
  let b = Math.round(arr.filter(v=>/^.+ \d+ \d*\.\d+\ B$/.test(v)).reduce((a,b)=>{
    b=b.split` `;
    return a+(b[1]*b[2])
  },0))
  let s = Math.round(arr.filter(v=>/^.+ \d+ \d*\.\d+ S$/.test(v)).reduce((a,b)=>{
    b=b.split` `;
    return a+(b[1]*b[2])
  },0))
  filtred=filtred.filter(v=>v).map(v=>v.trim())
  return `Buy: ${b} Sell: ${s}${filtred.length>0?`; Badly formed ${filtred.length}: ${filtred.join` ;`} ;`:''}`
}
