/*
Description:
You have an array or list of coordinates or points (e.g. [ [1, 1], [3, 4], ... , [5, 2] ]), and your task is to find the area under the graph defined by these points (limited by x of the first and last coordinates as left and right borders, y = 0 as the bottom border and the graph as top border).

Notes:

x can be negative;
x of the next pair of coordinates will always be greater then previous one;
y >= 0;
the array will contain more than 2 coordinates.
Example
x=1 (left border)               x=5 (right border)
|                      x,y      |
|                    /\         |
|                   /  \        |
|    x,y           /    \       |
|   /\            /      \      |
|  /  \    x,y   /        \     |
| /    \  /\    /          \    |
|/      \/  \  /            \   |
|x,y    x,y  \/              \  |
|            x,y              \ | 
|_____________________________ \x,y_____ y=0 (bottom border)
The required area:

|                               |
|                    /\         |
|                   /\\\        |
|                  /\\\\\       |
|   /\            /\\\\\\\      |
|  /\\\          /\\\\\\\\\     |
| /\\\\\  /\    /\\\\\\\\\\\    |
|/\\\\\\\/\\\  /\\\\\\\\\\\\\   |
|\\\\\\\\\\\\\/\\\\\\\\\\\\\\\  |
|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ | 
|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\|____
Definition of points
var Point = function (x,y) {
  this.X = x;
  this.Y = y;
}
*/
function findArea(points) {
  let result = 0;
    for (let i = 0; i < points.length-1; i++){
      result += (points[i].Y + points[i + 1].Y) / 2 * (points[i + 1].X - points[i].X);
    }
  return result;
}
