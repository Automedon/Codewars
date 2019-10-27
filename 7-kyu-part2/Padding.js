/*
Description:
In not more than 24 characters, write a function named p that pads it input to both sides of itself and returns the result.

Example
p("e") //returns "eee"
p("e\n") //returns "e\ne\ne\n"
Instruction
Code should not the more than 24 characters
Character + and function repeat not allowed in the code.
Only a single . character allowed
Code must be on a single line
${ character not allowed
*/
p = s => s.concat(s, s);
