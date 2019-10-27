/*
Description:
In the venerable text editor Vim, you can position the cursor over a word and press the key combination Ctrl-A.

Discussion
If the word under the cursor is not a number, this will do nothing. If the word under the cursor is a number, it will be incremented by 1.

If the word also contains characters that are not numbers, you should look for the first number in the word and increment it.

Examples of using Ctrl-A:

"hello"           → Ctrl-A →   "hello"
"1"               → Ctrl-A →   "2"
"199"             → Ctrl-A →   "200"
".44!"            → Ctrl-A →   ".45!"
"TurboCleaner099" → Ctrl-A →   "TurboCleaner100"
"1become1"        → Ctrl-A →   "2become1"
"test009it"       → Ctrl-A →   "test10it"
A similar function can be used when placing the cursor over a word and pressing the key combination Ctrl-X. In this case the number will be decremented by 1.

Examples of using Ctrl-X:

"hello"           → Ctrl-X →   "hello"
"2"               → Ctrl-X →   "1"
"200"             → Ctrl-X →   "199"
".46!"            → Ctrl-X →   ".45!"
"TurboCleaner100" → Ctrl-X →   "TurboCleaner99"
"3become1"        → Ctrl-X →   "2become1"
"test00x"         → Ctrl-X →   "test-1x"
Have a look at sample test cases for more edge cases.

Assignment
Write the functions control_a and control_x: each function takes in a word and returns the result of the incrementation/decrementation.

TIP: Once your functions are working well, see if you can remove code duplication between the two.
*/
function control_a(word) {
  return word.replace(/[0-9]+/, v => v * 1 + 1);
}

function control_x(word) {
  return word.replace(/[0-9]+/, v => v * 1 - 1);
}
