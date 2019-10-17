/*
Description:
Peter can see a clock in the mirror from the place he sits in the office. When he saw the clock shows 12:22

alt text

He knows that the time is 11:38

alt text

in the same manner:

05:25 --> 06:35

01:50 --> 10:10

11:58 --> 12:02

12:01 --> 11:59

Please complete the function WhatIsTheTime(timeInMirror), where timeInMirror is the mirrored time (what Peter sees) as string.

Return the real time as a string.

Consider hours to be between 1 <= hour < 13.

So there is no 00:20, instead it is 12:20.

There is no 13:20, instead it is 01:20.
*/
function WhatIsTheTime(timeInMirror) {
  let time = timeInMirror.split(":");
  let time2 = 60 - parseInt(time[1]);
  let time1 =
    time2 == 60 ? 12 - parseInt(time[0]) : 12 - (parseInt(time[0]) + 1);
  let hour =
    time1 == 0 ? "12" : time1 == -1 ? "11" : time1 > 9 ? time1 : "0" + time1;
  let minute = time2 < 10 ? "0" + time2 : time2 == 60 ? "00" : time2;
  return `${hour}:${minute}`;
}
