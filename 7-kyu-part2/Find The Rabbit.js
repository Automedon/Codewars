/*
Description:
From the Zoo of Rabbitland, a rebelious rabbit has escaped.

Can you help the zoo keepers find him?

Write a function that recieves an Object - world, and searches for the rabbit.

world Object has just 1 key - pointing at the index where the rabit is at.

Example:

world = {
  "352": "Rabbit"
}
search(world) shoult return the number 352.

world = {
  "-12": "Rabbit"
}
world["-12"] === "Rabbit" // True
world["8"] // undefined
search(world) shoult return the number -12.

All indexes are whole numbers.

You can assume index is an integer between minus Infinity to Infinity

notice: world is a proxy, meaning Object.keys(world) returns [], but world[352] may return "Rabbit" - hence: don't try and solve this kata with recieving the single world key
*/
const search = world => {
  for (let i = 0, j = 0; ; ) {
    if (world[i++] === "Rabbit") return --i;
    if (world[j--] === "Rabbit") return ++j;
  }
};
