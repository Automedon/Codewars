/*
Description:
Convert Decimal Degrees to Degrees, Minutes, Seconds.

Remember: 1 degree = 60 minutes; 1 minute = 60 seconds.

Input: Positive number.

Output: Array [degrees, minutes, seconds]. E.g [30, 25, 25]

Trailing zeroes should be omitted in the output. E.g

convert (50) 
//correct output -> [50] 
//wrong output -> [50, 0, 0]

convert(80.5)
//correct output -> [ 80, 30 ]
//wrong output -> [80, 30, 0]

convert(0.0001388888888888889)
//correct output -> [ 0, 0, 1 ]
//wrong output -> [1]
Round the seconds to the nearest integer.
*/
function convert(degrees) {
  let deg = degrees*60*60
  let min = Math.trunc(deg/60%60)
  let sec = Math.trunc(Math.round(deg%60))
  degrees = Math.trunc(degrees)
  if (sec) return [degrees,min,sec]
  if (min) return [degrees,min]
  return [degrees]
}
