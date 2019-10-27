/*
Description:
A History Lesson
Tetris is a puzzle video game originally designed and programmed by Soviet Russian software engineer Alexey Pajitnov. The first playable version was completed on June 6, 1984. Pajitnov derived its name from combining the Greek numerical prefix tetra- (the falling pieces contain 4 segments) and tennis, Pajitnov's favorite sport.

About scoring system
The scoring formula is built on the idea that more difficult line clears should be awarded more points. For example, a single line clear is worth 40 points, clearing four lines at once (known as a Tetris) is worth 1200.

A level multiplier is also used. The game starts at level 0. The level increases every ten lines you clear. For our task you can use this table:

Level
Points for 1 line
Points for 2 lines	Points for 3 lines	Points for 4 lines
0	40	100
300	1200
1	80	200	600	2400
2	120	300	900	3600
3	160	400	1200	4800
...
7	320	800	2400	9600
...	For level n you must determine the formula by yourself using given examples from the table.
Task
Calculate the final score of the game using original Nintendo scoring system

Input
Array with cleaned lines.
Example: [4, 2, 2, 3, 3, 4, 2]
Input will always be valid: array of random length (from 0 to 5000) with numbers from 0 to 4.

Ouput
Calculated final score.
def get_score(arr) -> int: return 0

Example
>>> arr = [4, 2, 2, 3, 3, 4, 2]
>>> get_score(arr)
4700
Step 1: +1200 points for 4 lines (current level 0). Score: 1200;
Step 2: +100 for 2 lines. Score: 1300;
Step 3: +100;
Step 4: +300 for 3 lines (current level still 0).
Total number of cleaned lines 11 (4 + 2 + 2 + 3), so level goes up to 1 (level ups each 10 lines);
Step 5: +600 for 3 lines (current level 1);
Step 6: +2400;
Step 7: +200. Total score: 4700.

Other
If you like the idea: leave feedback, and there will be a series of katas with higher difficulty levels on the Tetris theme.
*/
function getScore(arr) {
  let mult = 1;
  let lines = 0;
  let score = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      if (arr[i] === 1) {
        score += 40 * mult;
      }
      if (arr[i] === 2) {
        score += 100 * mult;
      }
      if (arr[i] === 3) {
        score += 300 * mult;
      }
      if (arr[i] === 4) {
        score += 1200 * mult;
      }
      lines += arr[i];
      if (lines >= mult * 10) {
        mult += 1;
      }
    }
  }
  return score;
}
