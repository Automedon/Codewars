/*
Description:
Your job is to return the volume of a cup when given the diameter of the top, the diameter of the bottom and the height.

You know that there is a steady gradient from the top to the bottom.

You want to return the volume rounded to 2 decimal places.

Exmples:

cup_volume(1, 1, 1)==0.79

cup_volume(10, 8, 10)==638.79

cup_volume(1000, 1000, 1000)==785398163.4

cup_volume(13.123, 123.12, 1)==4436.57

cup_volume(5, 12, 31)==1858.51
You will only be passed positive numbers.
*/
function cupVolume(d1, d2, height){
  return (Math.PI*height/12 * (d1**2 + d1*d2 + d2**2)).toFixed(2)*1
  }
