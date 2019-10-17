/*
Description:
I've got a crazy mental illness. I dislike numbers a lot. But it's a little complicated: The number I'm feared of depends on which day of week it is... This a concrete description of my mental illness:

Monday --> 12

Tuesday --> numbers greater than 95

Wednesday --> 34

Thursday --> 0

Friday --> numbers divisable by 2

Saturday --> 56

Sunday --> 666 or -666

Write a function which takes a string (day of week) and an integer (number to be tested) so it tells the doctor if I'm feared or not. (return a boolean)
*/

var AmIAfraid = function(day, num){
  if (day=='Monday'&&num===12)return true
  if (day=='Tuesday'&&num>95)return true
  if (day=='Wednesday'&&num===34)return true
  if (day=='Thursday'&&num===0)return true
  if (day=='Friday'&&num%2==0)return true
  if (day=='Saturday'&&num===56)return true
  if (day=='Sunday'&&(num==666||num===-666))return true
  return false
  
}
