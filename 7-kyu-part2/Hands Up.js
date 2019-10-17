/*
Description:
Imagine that you have an array of ints representing 3 people, each position represents a person, the value of each position can be only 0, 1, or 2 which represents the number of hands that the person has raised.

If we now have a sequence in which in the first step, the first person raises a hand, in the next step raises his other hand, to the third step low both hands, and in the four start again. The second person performs the same movements as the first, but whenever the first low both hands. That is, raises a hand in the third step, the other hand in the sixth step and down both hands on the ninth. The third person performs the same movements each time that the second person low both hands.

Your task is, given a number of steps (s >= 0) return an array with the final representation of each person.

Ej. Given 2 steps you should return {2,0,0} Given 6 steps you should return {0,2,0}
*/
const getPositions = s => {
  return [~~s%3,~~(s/3)%3,~~(s/9)%3];
}
