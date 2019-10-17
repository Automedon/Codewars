/*
Description:
Inspired from real-world Brainf**k, we want to create an interpreter of that language which will support the following instructions (the machine memory or 'data' should behave like a potentially infinite array of bytes, initialized to 0):

> increment the data pointer (to point to the next cell to the right).
< decrement the data pointer (to point to the next cell to the left).
+ increment (increase by one, truncate overflow: 255 + 1 = 0) the byte at the data pointer.
- decrement (decrease by one, treat as unsigned byte: 0 - 1 = 255 ) the byte at the data pointer.
. output the byte at the data pointer.
, accept one byte of input, storing its value in the byte at the data pointer.
[ if the byte at the data pointer is zero, then instead of moving the instruction pointer forward to the next command, jump it forward to the command after the matching ] command.
] if the byte at the data pointer is nonzero, then instead of moving the instruction pointer forward to the next command, jump it back to the command after the matching [ command.
The function will take in input...

the program code, a string with the sequence of machine instructions,
the program input, a string, eventually empty, that will be interpreted as an array of bytes using each character's ASCII code and will be consumed by the , instruction
... and will return ...

the output of the interpreted code (always as a string), produced by the . instruction.
*/
  code = code.split('').filter(c => '><+-.,[]'.includes(c))
  let output = '',
    ptr = 0,
    brackets = 0,
    i
  const data = [0],
    map = {
      '>': () => {
        ptr++
        if (ptr >= data.length) data.push(0)
      },
      '<': () => ptr--,
      '+': () => (data[ptr] = (data[ptr] + 1) % 256),
      '-': () => (data[ptr] = (data[ptr] - 1) % 256),
      ',': () => {
        data[ptr] = input.charCodeAt(0)
        input = input.slice(1)
      },
      '.': () => (output += String.fromCharCode(data[ptr])),
      '[': () => {
        if (data[ptr]) return
        for (let j = i + 1; j < code.length; j++)
          if (code[j] === '[') brackets++
          else if (code[j] === ']')
            if (brackets) brackets--
            else {
              i = j
              break
            }
      },
      ']': () => {
        if (!data[ptr]) return
        for (let j = i - 1; j >= 0; j--)
          if (code[j] === ']') brackets++
          else if (code[j] === '[')
            if (brackets) brackets--
            else {
              i = j
              break
            }
      }
    }
  for (i = 0; i < code.length; i++) map[code[i]]()
  return output
