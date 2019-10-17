/*
Description:
Continuation of Office Space #1:

You like listening to music at the office.

You frequently have to change the volume in your headphones thanks to your talkative coworkers, and you find yourself using the + and - on your keyboard to do so.
The keys increase and decrease the volume by 2 with each keystroke. There's just one problem - you prefer numbers that are divisible by 3.

Sometimes your coworkers are loud, and other times they're at lunch or late to work - Adjust the volume accordingly!

Write a function that takes in current volume and outputs how many times you will have to press the - or + key on your keyboard to make the volume a number that is divisible by three.

The music can't go lower than 0 volume on this plane of existance.

ex: volume = 8 : output = 1 (one stroke of the - key would take you to 6, which is divisible by 3, rather than the two strokes of the + key to get to 12)
*/
function musicalOCD(volume) {
  let i=0;
  let j=0;
  let copyV=volume
  while(volume%3!==0){
    i++
    volume-=2
  }
  while(copyV%3!==0){
    j++
    copyV+=2
  }
  return Math.min(i,j)
}
