/*
Description:
Debug a function called calculate that takes 3 values. The first and third values are numbers. The second value is a character. If the character is "+" , "-", "*", or "/", the function will return the result of the corresponding mathematical function on the two numbers. If the string is not one of the specified characters, the function should return null.

calculate(2,"+", 4); //Should return 6
calculate(6,"-", 1.5); //Should return 4.5
calculate(-4,"*", 8); //Should return -32
calculate(49,"/", -7); //Should return -7
calculate(8,"m", 2); //Should return null
calculate(4,"/",0) //should return null
Kind of a fork (not steal :)) of Basic Calculator kata by TheDoctor.
*/


const calculate = (a, o, b) => { 
    if(o === "+") return a + b;
    if(o === "-") return a-b;
    if(o === "/") return b !== 0 ? a/b : null;
    if(o === '*') return a*b;
    return null
};
