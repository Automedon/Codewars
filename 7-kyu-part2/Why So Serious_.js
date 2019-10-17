/*
Description:
"Introduce a little anarchy. Upset the established order and everything becomes chaos…" – Joker

"The city needs you, Batman! The Kings and Queens are being held for ransom and our only lead is a package we just received from the Joker: half a pack of cards, a jumble of numbers and letters, and a smile emoji. We have an hour... can you find him?" – Gotham City PD

Task:

Help Gotham City PD decode the puzzle below. If all the letters of the Joker's name are encoded in the string of cards, return "true". If not, return "false". Note the input is a string of shuffled cards i.e. "6s5s4cAs4s2c7s..." and the name can be found in any order.

Example:

"10s8s9c2s5s7c2c9s7sJc5cAs" = True. “9s4s8c6s4c10c8sJs3s” = False.

Code:

Key: Clubs = White, Spades = Crimson

10	6	2	7	5	3	9	Ace	Jack	8	4	10	9	Jack	2	3	7	Ace	8	4	6	5
10s	6c	2c	7c	5s	3c	9c	As	Js	8c	4s	10c	9s	Jc	2s	3s	7s	Ac	8s	4c	6s	5c
Q	A	C	S	K	P	R	E	V	U	L	M	N	J	I	F	O	B	G	T	H	D
*/
function whySoSerious(str) {
   let J = str.includes('Jc')
   let O = str.includes('7s')
   let K = str.includes('5s')
   let E = str.includes('As')
   let R = str.includes('9c')
   return J&&O&&K&&E&&R
}
