/*
Description:
Biathlon is an amazing sport combining cross-country skiing and rifle shooting. If I asked you to give me a famous biathlete's name, you might give me Martin Fourcade (FRA), Johannes T. Boe (NOR), Laura Dahlmeier (GER), Dorothea Wierer (ITA) and plenty of others.

Individual race

The individual race is the most challenging event. Biathletes run a distance of 20 Km (men) or 15 Km (women) and shoot 4 x 5 bullets. Each missed shot gives a 60-second penalty. The lowest time wins.

What you're asked to code

We'd like to calculate real time according to skiing time and missed shots.

The function has 2 parameters:

Time in tenths of a second (e.g: 200 => 200 tenths of a second => 20 seconds) the biathlete needed to finish the race
Number of misses
The time will always be valid whereas the number of misses won't. If there's a negative number of misses or if it's greater than 20, return false.

In valid cases, return the time with the format MINUTES:SECONDS:TENTHS. Do not convert minutes to hours if they are greater than 60.

If the number of seconds is lower than 10, add a zero before it. (See example test cases #1 and #2: it should return 34:07:0 but not 34:7:0)

Example cases

individualResult(18670, 3) should return 34:07:0 (race time of 31:07:0 + 3 minutes of penalty)
individualResult(7364, 8) should return 20:16:4 (race time of 12:16:4 + 8 minutes of penalty)
individualResult(15000, 21) should return false since the number of penalties is greater than 20
individualResult(15000, -3) should return false too since the number of penalties cannot be negative
*/
const individualResult = (tenthsOfSecond, numberOfPenalties) => {
  if (numberOfPenalties > 20 || numberOfPenalties < 0) return false;
  let time = tenthsOfSecond / 10;
  let h = 0;
  while (time > 60) {
    time -= 60;
    h++;
  }
  let m = 0;
  while (time >= 1) {
    time -= 1;
    m++;
  }
  time = time.toFixed(1);
  let s = time.slice(-1);
  return `${h + numberOfPenalties}:${("0" + m.toString()).slice(-2)}:${s}`;
};
