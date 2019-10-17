/*
Description:
Help Suzuki count his vegetables....

Suzuki is the master monk of his monastery so it is up to him to ensure the kitchen is operating at full capacity to feed his students and the villagers that come for lunch on a daily basis.

This week there was a problem with his deliveries and all the vegetables became mixed up. There are two important aspects of cooking in his kitchen, it must be done in harmony and nothing can be wasted. Since the monks are a record keeping people the first order of business is to sort the mixed up vegetables and then count them to ensure there is enough to feed all the students and villagers.

You will be given a string with the following vegetables:

"cabbage", "carrot", "celery", "cucumber", "mushroom", "onion", "pepper", "potato", "tofu", "turnip"
Return a list of tuples with the count of each vegetable in descending order. If there are any non vegetables mixed in discard them. If the count of two vegetables is the same sort in reverse alphabetical order (Z->A).

(119, "pepper"),
(114, "carrot"),
(113, "turnip"),
(102, "onion"),
(101, "tofu"),
(100, "cabbage"),
(93, "mushroom"),
(90, "cucumber"),
(88, "potato"),
(80, "celery")
Please also try the other Kata in this series..

Help Suzuki purchase his Tofu!
Help Suzuki pack his coal basket!
Help Suzuki rake his garden!
Suzuki needs help lining up his students!
How many stairs will Suzuki climb in 20 years?
*/
function countVegetables(string) {
  const dict = [
    "cabbage",
    "carrot",
    "celery",
    "cucumber",
    "mushroom",
    "onion",
    "pepper",
    "potato",
    "tofu",
    "turnip"
  ];
  const arr = []
    .concat(string.split(" "))
    .map(v => v.replace(/\n$/g, ""))
    .filter(v => v.length && dict.includes(v));
  let obj = {};
  arr.map(v => (obj[v] = obj[v] ? obj[v] + 1 : 1));
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  const answ = [];
  keys.map((v, i) => answ.push([values[i], v]));
  return answ.sort((a, b) => {
    if (a[0] < b[0]) {
      return 1;
    }
    if (a[0] > b[0]) {
      return -1;
    }
    if (a[0] === b[0]) {
      return b[1].localeCompare(a[1]);
    }
  });
}
