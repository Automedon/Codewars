/*
Description:
Ever since you started work at the grocer, you have been faithfully logging down each item and its category that passes through. One day, your boss walks in and asks, "Why are we just randomly placing the items everywhere? It's too difficult to find anything in this place!" Now's your chance to improve the system, impress your boss, and get that raise!

The input is a comma-separated list with category as the prefix in the form "fruit_banana". Your task is to group each item into the 4 categories Fruit, Meat, Other, Vegetable and output a string with a category on each line followed by a sorted comma-separated list of items.

For example, given:

"fruit_banana,vegetable_carrot,fruit_apple,canned_sardines,drink_juice,fruit_orange"
output:

"fruit:apple,banana,orange\nmeat:\nother:juice,sardines\nvegetable:carrot"
Assume that:

Only strings of the format category_item will be passed in
Strings will always be in lower case
Input will not be empty
Category and/or item will not be empty
There will be no duplicate items
All categories may not have items
*/
function solution(input) {
  let fruit = []
  let meat = []
  let other = []
  let vegetable = []
  input.split(',').map(v=>{
    v = v.split`_`
    if (v[0]==='fruit'){
     return fruit.push(v[1])
    }
    if (v[0]==='meat'){
     return meat.push(v[1])
    }
    
    if (v[0]==='vegetable'){
     return vegetable.push(v[1])
    }
    else {
     return other.push(v[1])
    }
  })
  return ['fruit:'+fruit.sort().join`,`,
          'meat:'+meat.sort().join`,`,
          'other:'+other.sort().join`,`,
          'vegetable:'+vegetable.sort().join`,`].join('\n')
}
