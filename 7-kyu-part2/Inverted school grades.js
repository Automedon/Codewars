/*
Description:
I have a friend who is an school teacher and his wife made a mistake. He evaluated the students in a wrong way. Insted of given the studend a 5 / 5 she gave a 1 / 5, instead of a 4 / 5 she did a 2 / 5. So the grades are inverted. I want to help my friend to correct his grades.

Because this could happen again I will param de solution with correct grade scale.

Ex. invertGrades(5,1) ret 5 invertGrades(5,5) ret 1 invertGrades(7,1) ret 7 invertGrades(8,2) ret 7
*/
function invertGrades(scale, value) {
  return scale - value + 1;
}
