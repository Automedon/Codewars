/*
Description:
Background
My TV remote control has arrow buttons and an OK button.

I can use these to move a "cursor" on a logical screen keyboard to type words...

The screen "keyboard" layout looks like this

a	b	c	d	e	1	2	3
f	g	h	i	j	4	5	6
k	l	m	n	o	7	8	9
p	q	r	s	t	.	@	0
u	v	w	x	y	z	_	/
Kata task
How many button presses on my remote are required to type a given word?

Notes
The cursor always starts on the letter a (top left)

Remember to also press OK to "accept" each letter.

Take a direct route from one letter to the next

The cursor does not wrap (e.g. you cannot leave one edge and reappear on the opposite edge)

Example
word = codewars

c => a-b-c-OK = 3
o => c-d-e-j-o-OK = 5
d => o-j-e-d-OK = 4
e => d-e-OK = 2
w => e-j-o-t-y-x-w-OK = 7
a => w-r-m-h-c-b-a-OK = 7
r => a-f-k-p-q-r-OK = 6
s => r-s-OK = 2
Answer = 3 + 5 + 4 + 2 + 7 + 7 + 6 + 2 = 36

*Good Luck!
DM.*
Series

TV Remote
TV Remote (shift and space)
TV Remote (wrap)
TV Remote (symbols)
*/
var tvRemote = function(word) {
  const keyboard = [
    ["a", "b", "c", "d", "e", "1", "2", "3"],
    ["f", "g", "h", "i", "j", "4", "5", "6"],
    ["k", "l", "m", "n", "o", "7", "8", "9"],
    ["p", "q", "r", "s", "t", ".", "@", "0"],
    ["u", "v", "w", "x", "y", "z", "_", "/"]
  ];

  const pos = { x: 0, y: 0 };

  const getPos = l => {
    const y = keyboard.findIndex(row => row.find(n => n === l));
    const x = keyboard[y].findIndex(n => n === l);

    return { x, y };
  };

  let dist = 0;

  for (let l of word) {
    const newPos = getPos(l);
    dist += Math.abs(pos.x - newPos.x) + Math.abs(pos.y - newPos.y) + 1;

    pos.x = newPos.x;
    pos.y = newPos.y;
  }

  return dist;
};
