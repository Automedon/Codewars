/*
Description:
Write function toInitials returs initials for a given person name. E.g: "Bill Gates" -> "B. G."

Note: initials should be separated with a space.
*/
function toInitials(name) {
  return name.split(' ').map(v=>v[0]+'.').join(' ');
}
