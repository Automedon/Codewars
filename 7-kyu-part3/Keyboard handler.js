/*
Overview
Have you ever wondered how a user interface handles key presses?

So today you have the opportunity to create it.

Task:
The keyboard handler is a function which receives three parameters as input:

Key - the entered character on the keyboard.

isCaps (or is_caps) - boolean variable responsible for the enabled 'Caps Lock'. (by default false)

isShift (or is_shift) - boolean variable which is responsible for whether 'Shift' is pressed. (by default false)

Your task to write a function that returns the entered character.

Requirements for obtaining the 'key' variable:
Alphabetical characters must be a lowercase (e.x. 'a', not 'A')
It must be a character (e.x '2', not 2 or not [1,2,3])
It must be of unit length (e.x. 'a', not 'abc')
If the value does not satisfy the condition, return 'KeyError'

For example:

handler('a', true) // should return 'A' (because Caps-Lock)
handler('1', true) // should return '1' (because Сaps-Lock doesn't work here)
handler('a', false, true) // should return 'A' (because Shift)
handler('1', false, true) // should return '!'

handler('')  // should return 'KeyError'
handler('A') // should return 'KeyError'
handler( 3 ) // should return 'KeyError'
handler('abc') // should return 'KeyError'
In this kata we use en-US QWERTY layout. (The characters we are working with are shown on a white background)
*/
const U = [..."~!@#$%^&*()_+{}|:\"<>? "]
const L = [..."`1234567890-=[]\\;',./ "]
  
const handler = (k,c,s) => /^[a-z]$/.test(k) ? s ^ c ? k.toUpperCase() : k : L.includes(k) ? s ? U[L.indexOf(k)] : k : "KeyError"
