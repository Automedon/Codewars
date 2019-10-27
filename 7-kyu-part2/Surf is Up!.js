/*
Description:
alt text

Johnny is a pretty decent surfer and he just discovered a new break with beautiful waves rolling in.

There is always a set of 3 waves hitting the beach one after another. The wave sizes in each set vary: Johnny never knows which set wave will be the biggest or smallest.

Johnny likes bigger waves between 8 and 10 feet, although anything bigger than 10 feet he wouldn´t surf.

He surfs according to the following two rules:

“If the first wave has a decent size (8-10 feet), I´m gonna take it! Otherwise I´ll wait for the next one!”
“If I waited for the last wave of the set I´ll take it anyway - as long as it´s not bigger than 10 feet."
Johnny´s session is great but the waves are super fast and each time he takes off on a wave bigger than 8 feet he falls off his board. Damn.

TASK:

Write a function that takes in an array representing one set of 3 waves. According wave sizes will always be between 3 and 12 feet.

e.g. [5,10,6] could represent a set of waves.

Your function should return an array with the wave size Johnny decides to take and a corresponding statement.

If Johnny doesn´t take any wave (e.g. because each set wave is too big): Add "Johnny waits".

If Johnny surfs: Add either "Johnny falls" (if he takes off on a wave bigger than 8 feet) or "Johnny rides".

See test cases for further details.
*/
function surfsUp(waves) {
  for (let i = 0; i < 3; i++) {
    let w = waves[i];
    if (w > 7 && w < 11) return [w, `Johnny ${w == 8 ? "rides" : "falls"}`];
    if (i == 2 && w < 8) return [w, "Johnny rides"];
  }
  return ["Johnny waits"];
}
