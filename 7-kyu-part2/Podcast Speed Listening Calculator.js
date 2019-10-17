/*
Description:
If you have ever listened to an audiobook or podcast, you may have had the option to change the play speed of the audio. This allows you to increase or decrease the speed that you listen to your content.

I want you to calculate the time it takes to listen to the audio when the play speed is varied. The time should be rounded down to whole seconds.

The inputs will be:

audioLength /* a string of the total time of the audio, "hh:mm:ss" */

playSpeed /* a float between 0.5 and 3.0, only to 1 decimal point */
Examples:

// The results of calculations on the time units are expected to be truncated/floored

speedListen("00:00:55", 2) => "00:00:27" // NOT "00:00:28"

speedListen("01:20:00", 1.5) => "00:53:20"
*/
function speedListen(audioLength, playSpeed) {
  let h=audioLength.split(':')[0]*1
  let m=audioLength.split(':')[1]*1
  let s=audioLength.split(':')[2]*1
  let time=(h*60*60+m*60+s)/playSpeed
  let newH=0,newM=0,newS=0;
  while (time>=3600){
    time-=3600
    newH++
  }
  while (time>=60){
    time-=60
    newM++
  }
  while (time>=1){
    time-=1
    newS++
  }
  newH.toString().length==1?newH='0'+newH:1
  return `${newH}:${('0'+newM).slice(-2)}:${('0'+newS).slice(-2)}`;
}
