/*
Description:
Our spaceship has crashed on an unknown planet many light years away from earth. Thankfully we were able to send out a distress signal right before the crash. Help will be here shortly but we need to gather as much information about this planet as we can before we're rescued.

Before our control panels were destroyed, we were able to gather the duration of this planet's orbit around it's planetary system's star.

Among other things, we need to determine if a given year is a leap year on this planet.

Your Task:

Given the duration of the planet's orbit (in days) and a specific year on this planet, determine if the given year is a leap year here.

For example:

On Earth, a single rotation around the sun takes 365.25 days. Therefore, each year takes 365 days but every forth year is a leap year and takes 366 days. The next leap year on Earth will occur in 2020.

Notes: To make things easier, the period of the leap years will always be a power of 2. Good luck!
*/
function isLeapYear(duration, year) {
  return duration*year%1===0;
}
