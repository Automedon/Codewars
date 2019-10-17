/*
I guess this is a ?kyu kata. series #6:
Fruit Ninja I

Description
You are a Fruit Ninja, your skill is cutting fruit. All the fruit will be cut in half by your knife. For example:

[  "apple",     "pear",     "banana"  ]  -->
["app", "le", "pe", "ar", "ban", "ana"]
As you see, all fruits are cut in half. You should pay attention to "apple": if you cannot cut a fruit into equal parts, then the first part will has a extra character.

You should only cut the fruit, other things should not be cut, such as the "bomb":

[  "apple",     "pear",     "banana",   "bomb"]  -->
["app", "le", "pe", "ar", "ban", "ana", "bomb"]
The valid fruit names are preloded for you as:

fruitsName
Task
Complete function cutFruits that accepts argument fruits. Returns the result in accordance with the rules above.

OK, that's all. I guess this is a 7kyu kata. If you agree, please rank it as 7kyu and vote very;-) If you think this kata is too easy or too hard, please shame me by rank it as you want and vote somewhat or none :[

Click here for more more "I guess this is ...kyu" katas!
*/

function cutFruits(fruits){
  return  fruits.map(v=>fruitsName.includes(v)?v.slice(0,Math.round(v.length/2))+','+v.slice(Math.round(v.length/2)):v).join(',').split(',') 
}
