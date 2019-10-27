/*
Description:
Build Tower Advanced
Build Tower by the following given arguments:
number of floors (integer and always greater than 0)
block size (width, height) (integer pair and always greater than (0, 0))

Tower block unit is represented as *

Python: return a list;
JavaScript: returns an Array;
Have fun!

for example, a tower of 3 floors with block size = (2, 3) looks like below

[
  '    **    ',
  '    **    ',
  '    **    ',
  '  ******  ',
  '  ******  ',
  '  ******  ',
  '**********',
  '**********',
  '**********'
]
and a tower of 6 floors with block size = (2, 1) looks like below

[
  '          **          ', 
  '        ******        ', 
  '      **********      ', 
  '    **************    ', 
  '  ******************  ', 
  '**********************'
]
Go take a look at Build Tower which is a more basic version :)
*/
function towerBuilder(nFloors, nBlockSz) {
  const tower = [];
  for (let i = 0; i < nFloors; i++) {
    for (let j = 0; j < nBlockSz[1]; j++) {
      tower.push(
        " ".repeat((nFloors - i) * nBlockSz[0] - nBlockSz[0]) +
          "*".repeat(nBlockSz[0] + i * (nBlockSz[0] * 2)) +
          " ".repeat((nFloors - i) * nBlockSz[0] - nBlockSz[0])
      );
    }
  }
  return tower;
}
