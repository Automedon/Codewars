/*
Description:
Write function describeList which tells if the list is empty or contains only one element or more.
*/
function describeList(x) {
  if (x.length === 0) return "empty";
  if (x.length === 1) return "singleton";
  return "longer";
}
