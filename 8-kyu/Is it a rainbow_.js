/*
It is a sunny day and then a cloud appears from no where.... Now there are hundreds of rainbows everywhere.

You must check they are full and beautiful.

You will be given an array that represents the rainbow and you need to check if it is a full rainbow, or not and return true or false.

E.g. colours['1','2'] will return false
*/
function sortRainbow(colour){
  return ['red','orange','yellow','green','blue','indigo','violet'].every((v,i)=>v===colour[i])
}
