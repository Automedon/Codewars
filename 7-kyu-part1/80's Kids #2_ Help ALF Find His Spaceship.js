/*
Description:
Late last night in the Tanner household, ALF was repairing his spaceship so he might get back to Melmac. Unfortunately for him, he forgot to put on the parking brake, and the spaceship took off during repair. Now it's hovering in space.

ALF has the technology to bring the spaceship home if he can lock on to it's location.

Given a map:

..........
..........
..........
.......X..
..........
..........
The map will be given in the form of a string with \n separating new lines. The bottom left of the map is [0, 0]. X is ALF's spaceship.

In this expample:

findSpaceship(map) => [7, 2]
If you cannot find the spaceship, the result should be

"Spaceship lost forever."
*/

const findSpaceship = (map = "") => {
  map = map.split("\n").reverse();

  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      if (map[y][x] === "X") return [x, y];
    }
  }

  return "Spaceship lost forever.";
};
