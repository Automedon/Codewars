/*
Description:
Can you find after how many years will a person's birthday fall on the same day of the week that he was born?

For example, Joy's birthday is on 16th October, 1990 which falls on Friday. After how many years will his birthday fall on Friday again? (That would be 11 years)

nextBirthdayOfTheWeek(new Date(1990, 10, 16)) //11
nextBirthdayOfTheWeek(new Date(2012, 5, 20))  //6
nextBirthdayOfTheWeek(new Date(1975, 2, 22))  //5
*/

let nextBirthdayOfTheWeek = function(birthday) {
  let weekday = birthday.getDay();
  let yr = birthday.getFullYear();
  yr += 1;
  let month = birthday.getMonth();
  let day = birthday.getDate();

  while (weekday !== new Date(yr, month, day).getDay()) {
    yr++;
  }
  return yr - birthday.getFullYear();
};
