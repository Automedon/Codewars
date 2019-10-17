/*
Description:
You are a skier (marked below by the 'X'). You have made it to the Olympics! Well done.

___X_
*****\ 
******\
*******\
********\
*********\.____/
Your job in this kata is to calculate the maximum speed you will achieve during your downhill run. The speed is dictated by the height of the mountain. Each element of the array is a layer of the mountain as indicated by the diagram above (and further below). So for this example the mountain has a value of 5 (5 rows of stars). Speed is mountain height * 1.5.

The jump length is calculated by (mountain height * speed * 9) / 10. Jump length should be to two dp.

You must return the length of the resulting jump as a string in the following format:

Jump < 10 = 'X metres: He's crap!'
Jump > 10 && < 25 = 'X metres: He's ok!'
Jump > 10 && < 50 = 'X metres: He's flying!'
Jump > 50 = 'X metres: Gold!!'

In this case the right answer would be '33.75 metres: He\'s flying!'

Sadly it takes a lot of time to make arrays look like mountains, so the tests wont all look so nice. To give an example, the above mountain would look as follows in most cases:

[*****, ******, *******, ********, *********]
Not as much fun, eh?
*/

function skiJump(mountain) {
  const height = mountain.length;
  const speed = height * 1.5;
  const length = ((height * speed * 9) / 10).toFixed(2);
  if (length < 10) return `${length} metres: He's crap!`;
  if (length < 25) return `${length} metres: He's ok!`;
  if (length < 50) return `${length} metres: He's flying!`;
  return `${length} metres: Gold!!`;
}
