/*
Description:
Oh no! 
The new zookeeper has lost track of how many animals are in the zoo because the last person to do the count thought it would be funny to do it in binary. 

Write a function that can help the zookeper convert the binary count. 
Input will be an object where key:value-pairs will represent an animal and a binary number. 
Output should be an integer that equals the sum of all the animals in the zoo.
*/
function countTheAnimals(animals) {
  let sum=0;
  for (let i in animals){
   sum+=parseInt(animals[i],2)
  }
  return sum
}
