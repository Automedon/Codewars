/*
Description:
Normally we have firstname,middle and the last name but there may be more than one word in a name . Like a South indian one .

Similar to those kinda names we need to initiallize the names .

See the pattern Below

initials('code wars') => returns C.Wars 
initials('Barack Hussain obama') => returns B.H.Obama
Complete the function initials.
*/
function initials(n) {
  const arr = (
    n
      .split(" ")
      .map(v => v[0].toUpperCase())
      .slice(0, -1) +
    "." +
    n
      .split(" ")
      .slice(-1)
      .map(v => v.slice(0, 1).toUpperCase() + v.slice(1).toLowerCase())
  ).replace(/,/g, ".");
  return arr;
}
