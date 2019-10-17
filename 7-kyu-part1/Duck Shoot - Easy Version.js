/*
Description:
You've arrived at a carnival and head straight for the duck shooting tent. Why wouldn't you?

You will be given a set amount of ammo, and an aim rating of between 1 and 0. No your aim is not always perfect - hey maybe someone fiddled with the sights on the gun...

Anyway your task is to calculate how many successful shots you will be able to make given the available ammo and your aim score, then return a string representing the pool of ducks, with those ducks shot marked with 'X' and those that survived left unchanged. You will always shoot left to right.

Example of start and end duck string with two successful shots:

Start ---> |222~|

Bang!! Bang!!

End ---> |XX2~|

All inputs will be correct type and never empty.
*/
function duckShoot(ammo, aim, ducks) {
  let shot = Math.floor(ammo * aim);
  return ducks.replace(/2/g, v => {
    if (shot > 0) {
      shot -= 1;
      return "X";
    } else {
      return v;
    }
  });
}
