/*
Description:
You're looking through different hex codes, and having trouble telling the difference between #000001 and #100000

We need a way to tell which is red, and which is blue!

That's where you create hex_color()!

It should read an RGB input, and return whichever value (red, blue, or green) is of greatest concentration!

But, if multiple colors are of equal concentration, you should return their mix!

red + blue = magenta

green + red = yellow

blue + green = cyan

red + blue + green = white
One last thing, if the string given is empty, or has all 0's, return black!

Examples:

hexColor('087 255 054') == 'green'
hexColor('181 181 170') == 'yellow'
hexColor('000 000 000') == 'black'
hexColor('001 001 001') == 'white'
*/
function hexColor(colors){
  let b=colors.split(' ')[2]*1
  let g=colors.split(' ')[1]*1
  let r=colors.split(' ')[0]*1
  if (b>g&&b>r) return 'blue'
  if (r>g&&r>b) return 'red'
  if (g>r&&g>b) return 'green'
  if (b===g&&g===b&&b===r&&r>0) return 'white'
  if (b===0&&g===0&&r===0) return 'black'
  if (r===b) return 'magenta'
  if (g===r) return 'yellow'
  if (g===b) return 'cyan'
  return 'black'
}
