/*
Description:
They say that only the name is long enough to attract attention. They also said that only a simple Kata will have someone to solve it. This is a sadly story. series #52:
The Race Between Hare and Tortoise

Story
There are two animals, a hare and a tortoise. They want to run a race. The hare's speed is 100 meters per minute. The tortoise's speed is 10 meters per minute. They want to race to see who first ran to the top of the mountain, the distance is 1000 meters. The hare runs very fast. When he ran to 500 meters, the tortoise was far behind. The hare decided to have a sleep. Zzz...

When he opened his eyes, he was surprised to find that the tortoise was near the finish. Only the last 40 meters. The hare hurried to catch the turtle.

Question: Who is the winner? The tortoise or the hare? How many minutes does the hare sleep?

Task
Complete function race() that accepts 5 arguments:

speed1 The speed of hare.

speed2 The speed of tortoise.

distance Race distance.

sleep The distance from starting point to the location of the hare to sleep.

getup When the hare woke up, the distance between the tortoise and the ending point.

The result should be a string. like these:

 "The hare won the race. He is sleeping for XX minutes."
 or
 "The tortoise won the race. The hare is sleeping for XX minutes."
 or
 "The hare and the tortoise tied. The hare is sleeping for XX minutes."
XX is a number of minutes(round to integer).

Example
//The example in the story:
race(100,10,1000,500,40) should return:
"The tortoise won the race. The hare is sleeping for 91 minutes."

race(100,10,1500,500,100) should return:
"The hare and the tortoise tied. The hare is sleeping for 135 minutes."

race(100,10,1200,500,100) should return:
 "The hare won the race. He is sleeping for 105 minutes."
*/
function race(speed1, speed2, distance, sleep, getup) {
  let fallAsleepTime = sleep / speed1;
  let getUpTime = (distance - getup) / speed2;
  let totalSleepTime = getUpTime - fallAsleepTime;
  let tortoiseRanTime = distance / speed2;
  let hareRanTime = distance / speed1 + totalSleepTime;
  if (tortoiseRanTime > hareRanTime) {
    return (
      "The hare won the race. He is sleeping for " +
      Math.round(totalSleepTime) +
      " minutes."
    );
  }
  if (hareRanTime > tortoiseRanTime) {
    return (
      "The tortoise won the race. The hare is sleeping for " +
      Math.round(totalSleepTime) +
      " minutes."
    );
  }
  return (
    "The hare and the tortoise tied. The hare is sleeping for " +
    Math.round(totalSleepTime) +
    " minutes."
  );
}
