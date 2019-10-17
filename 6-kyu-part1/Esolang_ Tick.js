/*
Description:
Task
Make a custom esolang interpreter for the language Tick. Tick is a descendant of Ticker but also very different data and command-wise.

Syntax/Info
Commands are given in character format. Non-command characters should be ignored. Tick has an potentially infinite memory as opposed to Ticker(which you have a special command to add a new cell) and only has 4 commands(as opposed to 7). Read about this esolang here.

Commands
>: Move data selector right

<: Move data selector left(infinite in both directions)

+: Increment memory cell by 1. 255+1=0

*: Add ascii value of memory cell to the output tape.

Examples
Hello world!

'++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*>+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*>++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++**>+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*>++++++++++++++++++++++++++++++++*>+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*<<*>>>++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*<<<<*>>>>>++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*>+++++++++++++++++++++++++++++++++*'

*/
function interpreter(tape) {
  let dict = {};
  let str = [];
  let num = 0;
  let selector = 0;
  for (let i = 0; i < tape.length; i++) {
    if (tape[i] === "+") dict[selector] = dict[selector] + 1 || 1;
    else if (tape[i] === ">") selector++;
    else if (tape[i] === "<") selector--;
    else if (tape[i] === "*") {
      str += String.fromCharCode(dict[selector] % 256);
    }
  }
  return str;
}
