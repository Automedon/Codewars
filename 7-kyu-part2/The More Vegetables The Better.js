/*
Description:
It's been a really long day. You're really hungry and the only thing you can think about is going home and making the tastiest vegetable lasagne.

You pull your vegetable lasagne recipe book out of your backpack and find that there are too many to choose from. Weirdly the author has decided to write all of the recipes in arrays...

You will be given an array of objects, each of which contains a key of veg and a value which is an array of vegetables. For example, [{veg: ["carrots","butternut squash"]},{veg: ["sweet potato","courgette"]}].

Your job is to find out which recipe has the most vegetables and is therefore the tastiest.

Return the statement "The recipe at index _ is the tastiest!!!"
*/
const tastiest = (recipes) => {
  let index=Math.max(...recipes.map(v=>v.veg.length))
  return `The recipe at index ${recipes.map(v=>v.veg.length).indexOf(index)} is the tastiest!!!`
}
