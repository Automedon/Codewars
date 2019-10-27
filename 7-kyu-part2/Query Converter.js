/*
Description:
In web developement. Using query to grab data is very common.

Query starts with '?' after the link

Example:

Link: www.whatsup.com?name=huy&lastname=dang

Query: ?name=huy&lastname=dang

Write a function that return an object that contains all the datas in the query which are seperated by '&'

Example: www.whatsup.com?name=Huy&lastname=Dang

-> Query: ?name=Huy&lastname=Dang

-> Should return: {name: 'Huy', lastname: 'Dang'}

p/s: - No case sensitive, easy, keep it the way it is.
*/
var solution = str => {
  let part1 = str.split`?`[1];
  let part2 = part1.split`&`;
  let obj = {};
  part2.map(v => {
    v = v.split`=`;
    return (obj[v[0]] = v[1]);
  });
  return obj;
};
