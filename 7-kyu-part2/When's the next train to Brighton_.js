/*
Description:
Write a function that tells you when is the next train to Brighton you can take, given the time of day and the minutes it takes you to get to the station.

There is one train every half an hour from 05:00 to 23:30.

The current time is represented by a string in the format "hh:mm". The minutes you need to arrive at the station are also represented by a string.

The result is a string that says "The next train is at hh:mm" (see examples below).

If it's too late for the last train of the day (e.g. it's 23:50 and you need 40 minutes to get to the station), the function returns "The next train is at 05:00.".

EXAMPLES

nextTrain("17:40", "30") => "The next train is at 18:30."
nextTrain("23:20", "25") => "The next train is at 05:00."
nextTrain("03:36", "95") => "The next train is at 05:30."
*/
function nextTrain(time, minutes){
  let m=time.split`:`[1]*60*1000
  let h=time.split`:`[0]*60*60*1000
  let t = new Date(h+m+(minutes*60*1000))
  h= t.getHours()
  m=t.getMinutes()
  if (m>30){
    h++
    m=0
  }else{
    m=30
  }
  if (h<5) return 'The next train is at 05:00.'
  if (h==23&&m==0) return 'The next train is at 23:00.'
  if (h>=23&&m>=0) return 'The next train is at 05:00.'
  return `The next train is at ${h.toString().padStart(2,0)}:${m.toString().padStart(2,0)}.`
}
