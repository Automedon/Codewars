/*
Description:
Step through my green glass door.

You can take the moon, but not the sun.

You can take your slippers, but not your sandals.

You can go through yelling, but not shouting.

You can't run through fast, but you can run with speed.

You can take a sheet, but not your blanket.

You can wear your glasses, but not your contacts.

Have you figured it out? Good! Then write a program that can figure it out as well.
*/

function stepThroughWith(s) {
  let last = s[0];
  for (let i = 1; i < s.length; i++) {
    if (last === s[i]) return true;
    last = s[i];
  }

  return false;
}
