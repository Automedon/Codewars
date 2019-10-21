/*
Description:
Background
My TV remote control has arrow buttons and an OK button.

I can use these to move a "cursor" on a logical screen keyboard to type words...

Keyboard
The screen "keyboard" layout looks like this

a	b	c	d	e	1	2	3
f	g	h	i	j	4	5	6
k	l	m	n	o	7	8	9
p	q	r	s	t	.	@	0
u	v	w	x	y	z	_	/
aA	SP						

* `aA` is the SHIFT key. Pressing this key toggles alpha characters between UPPERCASE and lowercase * `SP` is the space character * The other blank keys in the bottom row have no function
Kata task
How many button presses on my remote are required to type the given words?

Notes
The cursor always starts on the letter a (top left)

The alpha characters are initially lowercase (as shown above)

Remember to also press OK to "accept" each letter

Take a direct route from one letter to the next

The cursor does not wrap (e.g. you cannot leave one edge and reappear on the opposite edge)

Although the blank keys have no function, you may navigate through them if you want to

Spaces may occur anywhere in the words string.

Do not press the SHIFT key until you need to. For example, with the word e.Z, the SHIFT change happens after the . is pressed (not before)

Example
words = Code Wars

C => a-f-k-p-u-aA-OK-U-P-K-F-A-B-C-OK = 14
o => C-H-M-R-W-V-U-aA-OK-SP-v-q-l-m-n-o-OK = 16
d => o-j-e-d-OK = 4
e => d-e-OK = 2
space => e-d-c-b-g-l-q-v-SP-OK = 9
W => SP-aA-OK-SP-V-W-OK = 6
a => W-V-U-aA-OK-u-p-k-f-a-OK = 10
r => a-f-k-p-q-r-OK = 6
s => r-s-OK = 2
Answer = 14 + 16 + 4 + 2 + 9 + 6 + 10 + 6 + 2 = 69

*Good Luck!
DM.*
*/
function tvRemote(words) {
  let keys = 'abcde123fghij456klmno789pqrst.@0uvwxyz_/# ';
  let pos = [ 0, 0 ];
  let presses = 0;
  words = words.replace(/([A-Z]+[^a-z]*)([a-z]?)/g, (_, a, b) =>
    '#' + a.toLowerCase() + (b ? '#' + b : '')
  );
  for (let char of words) {
    let index = keys.indexOf(char);
    let next = [ index / 8 | 0, index % 8 ];
    presses += Math.abs(pos[0] - next[0]) 
            +  Math.abs(pos[1] - next[1]) 
            +  1;
    pos = next;

  }
  return presses;
}
