/*
Your task in this Kata is to emulate text justify right in monospace font. You will be given a single-lined text and the expected justification width. The longest word will never be greater than this width.

Here are the rules:

Use spaces to fill in the gaps on the left side of the words.
Each line should contain as many words as possible.
Use '\n' to separate lines.
Gap between words can't differ by more than one space.
Lines should end with a word not a space.
'\n' is not included in the length of a line.
Last line should not contain '\n'
*/

function alignRight(text,width){
  const lines = []
  let string = [];
  const splittedText = text.split(' ')
  splittedText.map((word,i,arr)=>{
    string.push(word);
    const stringLength = string.join(` `).length;
    if(stringLength>width){
      string.pop();
      lines.push(string)
      string = [word]
    }
    if(i===arr.length-1){
      lines.push(string)
    }
  })
  return lines.map(words=>{
    let line = words.join(` `);
    let howMuchAddSpaces = width - line.length;
    while(howMuchAddSpaces){
      howMuchAddSpaces--;
      line = ' ' + line
    }
    return line
  }).join('\n')
}
