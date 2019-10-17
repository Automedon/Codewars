/*
Description:
Format a number as BRL money, i.e. R$ 10,00

More examples

currencyBRL(10) => 'R$ 10,00'
currencyBRL(10.5) => 'R$ 10,50'
currencyBRL(10.05) => 'R$ 10,05'
currencyBRL(.5) => 'R$ 0,50'
The values must be rounded to the nearest value, like:

currencyBRL(10.505) => 'R$ 10,51'
currencyBRL(10.504) => 'R$ 10,50'
currencyBRL(10.502) => 'R$ 10,50'
currencyBRL(10.509) => 'R$ 10,51'
*/
function currencyBRL(number) {
  if (!number) return "R$ 0,00";
  return `R$ ${number.toFixed(2).replace(/\./, ",")}`;
}
