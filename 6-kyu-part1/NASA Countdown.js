/*
Description:
You have the job to implement a countdown function that will be used for the next NASA spatial mission. The function takes a duration in milliseconds and return a string in countdown format.

If it's counting down, the first character should be '-', if it's counting up it should be '+'. Then it should return the number of: hours (min 2 units), minutes (2 units) and seconds (2 units).

countdown(-154800000)  // return  '-43:00:00'
countdown(0)           // return  '+00:00:00'
countdown(61000)       // return  '+00:01:01'
countdown(360000000)   // return '+100:00:00'
*/
function countdown (ms) {
  let neg = ms<0
  ms = Math.abs(ms)
  let h = 0
  let m = 0
  let s = 0
  while (ms>=1000*60*60){
    ms-=1000*60*60
    h++
  }
  while (ms>=1000*60){
    ms-=1000*60
    m++
  }
  while (ms>=1000){
    ms-=1000
    s++
  }
  return `${neg?`-`:`+`}${h.toString().padStart(2,0)}:${m.toString().padStart(2,0)}:${s.toString().padStart(2,0)}`
}
