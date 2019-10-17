/*
Description:
Imagine you have a digital clock which paints the whole screen with a color instead of showing you what time it is. While it looks good on your wall and you get to impress your guests, you also want to be able to tell what time it is. Luckily, the clock also prints the hex code in the bottom right of the screen. Using that, you should be able to tell the time, which is another way to impress your guests :)

The hex code will come to you in this format: #0d242c

And you will return the time in this format: hh:mm:ss

Note: The hexCode you will be provided will always be in the correct format. However, it might not point to a correct time. So make sure to throw an error if the time you have calculated is invalid.
*/
function hexToTime(hexCode) {
  let h = parseInt(hexCode.slice(1, 3), 16);
  let m = parseInt(hexCode.slice(3, 5), 16);
  let s = parseInt(hexCode.slice(5, 7), 16);
  if (h > 23 || m > 59 || s > 59) throw new Error("Thats not a valid time!");
  return `${("0" + h).slice(-2)}:${("0" + m).slice(-2)}:${("0" + s).slice(-2)}`;
}
