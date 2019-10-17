/*
Description:
This is your mission, if you choose to accept it.

Your goal is to return all the even indexed characters in a string.

For Example: " Trucker" --> " rce"

Example : " Truck" --> ' rc " Travis" --> ' rvs' " Nigel" --> ' ie'

"A Vampire Bit me" --> "AVmieBtm"
*/
function getEvenStrings(str){ 
   return [...str].filter((v,i)=>i%2===0).join(``);
}
