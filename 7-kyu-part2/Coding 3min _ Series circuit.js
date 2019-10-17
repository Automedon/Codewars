/*
Coding 3min : Series circuit

#Task:
In theory, the voltage of each electrical appliance on a series circuit is different, depending on the size of the resistance value of the appliance, the voltage is usually proportional to the resistance value.

Give you two parameters:

1. array ```arr```, contains some numbers, thay are some resistance value of an electric appliance in a series circuit.

2. number ```total```, total voltage of series circuit.

Please calculate their voltage values and return a number array, number should round to two decimals.
#Examples:
``` example1: arr=[1,1] total=380 Two electrical appliances accounted for 50% of the voltage So, voltage([1,1],380)=[190,190]

example2:
arr=[1,2,3]   total=380
Three electrical appliances accounted for 1/6,1/3 and 1/2 
of the voltage
So, voltage([1,2,3],380)=[63.33,126.67,190]

```
*/
function voltage(arr,total){
  return arr.map(v=>(v/arr.reduce((a,b)=>a+b,0)*total).toFixed(2)*1)
}
