/*
Description:
Create a function that accepts two objects.

Each object has three properties, n, p and id where:

n = The name of the person

p = the id of this person's parent

id = this person's own id.

Your function must evaluate the relationship of these two persons, returning an evaluation string afterwards.

The relationship is based on the p property, and as written above, it presents the parentID. Two objects containing the same parent is evaluated as siblings. If an object 1 has a parent that is the id property of object 2, that object 1 is a child of object 2. Two objects will not be related if these two criterias aren't met.

Below are the templates for the three possible scenarios

Case 1:

Person1: {n: 'echo', p: 1, id: 2}

Person2: {n: 'rook', p: 4, id: 3}

Output: "echo and rook are not related!"

Case 2:

Person1: {n: 'ellie', p: 1, id: 2}

Person2: {n: 'joel', p: 0, id: 1}

Output: "joel is ellie's parent!"

Case 3:

Person1: {n: 'zofia', p: 1, id: 3}

Person2: {name: 'ela', p: 1, id: 4}

Output: "zofia and ela are siblings!"
*/
function checkRel(p1, p2) {
  if (p1.p === p2.p) return `${p1.n} and ${p2.n} are siblings!`;
  if (p1.p === p2.id) return `${p2.n} is ${p1.n}'s parent!`;
  if (p2.p === p1.id) return `${p1.n} is ${p2.n}'s parent!`;
  return `${p1.n} and ${p2.n} are not related!`;
}
