/*
Description:
Create a simple vat calculator class for retrieving the net value and the vat amount from a gross price.

Within the class create the two methods getNet(grossPrice) and getVat(grossPrice).

What is passed to you: vatRate - number 0 - 100 (%) grossPrice - Gross price value

Rounding is achieved using :

toFixed(2)
but the return value has to be the rounded Number not String.

Background:

Vat = Net * vatRate

Net + Vat = grossPrice

Note : you have to re-arrange those two definitions to come up with the equations needed.

Ex :

var calc = new Calculator(20); // vat rate at 20%
calc.getNet(100) === 83.33  //gross price of 100 => net will be 83.33
calc.getVat(100) === 16.67  //gross price of 100 => var === 16.67
*/
function Calculator(vat) {
  this.getNet = a => +((100 * a) / (100 + vat)).toFixed(2);
  this.getVat = b => +((vat * b) / (100 + vat)).toFixed(2);
}
