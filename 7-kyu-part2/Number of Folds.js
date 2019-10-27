/*
Description:
Suppose I have a big paper and i want to draw n number of grids just by folding it (see example ). How many times do i have to fold it to get n number of grids. eg.

n=1 , 0 operation, the original paper is one grid.

n=2, 1 operations, i have to fold it 1 time to get 2 grids (A,B).

 _______
|   |   |
| A | B |
|   |   |
|   |   |
|___|___|
No edge cases, all inputs are valid, But some built-in Math functions will have NO power here.
*/
const numberOfFolds = n => n.toString(2).length - 1;
