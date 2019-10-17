/*
Description:
There is an easy Kata about plurals.

You aren't able to use any string/array/object methods, libs etc. You have to use only couple of math operators and conditionals. "+" and "-" operators also disabled.

There is a common task to use it with words. For example:

makePlural(['day', 'days'], 1) => 0 days
makePlural(['day', 'days'], 1) => 1 day
makePlural(['day', 'days'], 2) => 2 days
makePlural(['day', 'days'], 12) => 12 days
You need only 2 options and pretty easy logic in your function. Every number is plural except of 1.

Of course, it isn't work in Russian. We have 3 options and more interesting rule
For example:

makePlural(['день', 'дня', 'дней'], 0) => 0 дней // looks like plural English
makePlural(['день', 'дня', 'дней'], 1) => 1 день // singular, like in English too
makePlural(['день', 'дня', 'дней'], 2) => 2 дня // somehting new? It's genitive singular case
makePlural(['день', 'дня', 'дней'], 3) => 3 дня
makePlural(['день', 'дня', 'дней'], 4) => 4 дня
makePlural(['день', 'дня', 'дней'], 5) => 5 дней // again plural
...
makePlural(['день', 'дня', 'дней'], 11) => 11 дней // again plural
...
makePlural(['день', 'дня', 'дней'], 20) => 20 дней // ok, 20 is plural, it's ok
makePlural(['день', 'дня', 'дней'], 21) => 21 день // 21 is singular?
makePlural(['день', 'дня', 'дней'], 22) => 22 дня // genitive singular case again :-( 
...
* (The word 'день' is a "day" in Russian)

Ok, there were a couple of examples, which needs only to scare you. Russian rule is easy too:

Number endings: 1 (example: 1, 21, 41, 121) (but not 11, 111 etc.) — singular.
Number endings: 2,3,4 (example: 22, 42, 123) (but not 12, 13 & 14) — genitive singular.
Number endings: 5,6,7,8,9,0 (includes 11, 12, 13, 14) — genitive plural.
Write the function, which have the array of option and the number. It should return string with correct option.

_* There is an array ['день', 'дня', 'дней'] in test cases for easier debugging _
*/
const makePlural = (options, number) => {
  if (number >= 5 && number <= 20) return options[2];
  switch (number % 10) {
    case 1:
      return options[0];
    case 2:
    case 3:
    case 4:
      return options[1];
    default:
      return options[2];
  }
};
