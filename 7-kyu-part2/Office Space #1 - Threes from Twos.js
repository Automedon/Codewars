/*
Description:
You like listening to music at the office. You frequently have to change the volume in your headphones thanks to your talkative coworkers, and you find yourself using the + and - on your keyboard to do so.

The keys increase and decrease the volume by 2 with each keystroke. There's just one problem- you prefer numbers that are divisible by 3.

Your coworkers are being loud- increase the volume to drown them out!

Write a function that takes in current volume and outputs how many times you will have to press the + key on your keyboard to increase the volue and make it a number that is divisible by three.

The music should still be audible (0 and below are not going to work well at drowning out your coworkers.)

(ex: volume = 4 : output = 1, one key press would take you to 6 by adding 2 to volume- 6 is divisible by 3)
*/
function musicalOCD(volume) {
  let i = 0;
  while (volume % 3 !== 0) {
    i++;
    volume--;
  }
  return i;
}
