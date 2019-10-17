/*
Description:
On the Forex Market the currency symbols for exchange between two currencies are put together in regards to their strength and weakness. The order of the currency strength is as follows:

"EUR", "GBP", "AUD", "NZD", "USD", "CAD", "CHF", "JPY"

So for AUD the currency matrix would be as follows EURAUD, GBPAUD, AUDNZD, AUDUSD, AUDCAD, AUDCHF, AUDJPY

Your goal is to generate this currency matrix for a given currency. You can assume that the passed in currency is a valid one.
*/
function generateCurrencyMatrix(currency)
{
  let arr= ["EUR", "GBP", "AUD", "NZD", "USD", "CAD", "CHF", "JPY"]
  let index=arr.indexOf(currency)
  arr=arr.filter(v=>v!==currency)
  return arr.map(v=>{
  if (arr.indexOf(v)<index) return v+currency
  else return currency+v
  })
}
