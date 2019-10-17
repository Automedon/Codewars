/*
Description:
Create a function that gives total resistance Rt(to 2 decimal places) in a parallel circuit when given all the individual resistances in the circuit R1, R2, R3....
*/
function calculateTotalResistance(...arr){
  return Math.round(1/arr.reduce((a,b)=>a+1/b,0)*100)/100
};
