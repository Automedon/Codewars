/*
Description:
The compound annual growth rate (CAGR) is the mean annual growth rate of an investment over a specified period of time longer than one year.

To calculate compound annual growth rate, divide the value of an investment at the end of the period by its value at the beginning of that period, raise the result to the power of one divided by the period length, and subtract one from the subsequent result

The formula can be written as:

((Future Value/Present Value)^(1/n)) – 1

Example:

calculateCAGR(20,10,2)```  =>   41.42

Where first parameter is the Future Value, second is Present Value and third is the period length in years.

Give your answer to 2 decimal points.
All tested parameters will integers and greater than ```0```.
*/
function calculateCAGR(fv, pv, n) {
  return ((Math.pow(fv / pv, 1 / n) - 1) * 100).toFixed(2) * 1;
}
