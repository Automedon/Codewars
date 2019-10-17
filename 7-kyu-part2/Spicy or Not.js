/*
Description:
You're off to a picnic with two versions of your beloved hummus recipe: spicy and non-spicy.

Write a function that takes a name and preference type and returns an object with those properties. If someone forgets to put a name, default it to "friend of a friend." If someone forgets to put a preference, default it to "non-spicy" just to be safe!

To keep it simple, all preference types will be in lowercase letters and you won't have any friends named "spicy" or "non-spicy."
*/
function whichKind(name, type) {
  name=name||'friend of a friend'
  type=type||'non-spicy'
  if (name==='spicy'||name==='non-spicy'){ type=name; name = 'friend of a friend';}
  return {name,type}
}
