/*
Description:
Background
A spider web is defined by

"rings" numbered out from the centre as 0, 1, 2, 3, 4
"radials" labelled clock-wise from the top as A, B, C, D, E, F, G, H
Here is a picture to help explain:

source: imgur.com
Web Coordinates
As you can see, each point where the rings and the radials intersect can be described by a "web coordinate".

So in this example the spider is at H3 and the fly is at E2

Kata Task
Our friendly jumping spider is resting and minding his own spidery business at web-coordinate spider.

An inattentive fly bumbles into the web at web-coordinate fly and gets itself stuck.

Your task is to calculate and return the distance the spider must jump to get to the fly.

Example
The solution to the scenario described by the picture is 4.63522

Notes
The centre of the web will always be referred to as A0
The rings intersect the radials at evenly spaced distances of 1 unit
Good Luck!
DM
*/
var spiderToFly = function(spider, fly) {
  const a = spider.split``[1] * 1;
  const b = fly.split``[1] * 1;
  const angles = "CBAHGFED";
  const y =
    Math.abs(
      angles.indexOf(spider.split``[0]) - angles.indexOf(fly.split``[0])
    ) * 45;
  const side = Math.sqrt(
    a * a + b * b - 2 * a * b * Math.cos(Math.toRadians(y))
  );
  return side;
};
Math.toRadians = function(degrees) {
  return degrees / (180 / Math.PI);
};
