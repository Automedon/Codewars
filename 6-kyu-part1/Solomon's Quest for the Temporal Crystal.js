/*
Description:
Background
In another dimension, there exist two immortal brothers: Solomon and Goromon. As sworn loyal subjects to the time elemental, Chronixus, both Solomon and Goromon were granted the power to create temporal folds. By sliding through these temporal folds, one can gain entry to parallel dimensions where time moves relatively faster or slower.

Goromon grew dissatisfied and one day betrayed Chronixus by stealing the Temporal Crystal, an artifact used to maintain the time continuum. Chronixus summoned Solomon and gave him the task of tracking down Goromon and retrieving the Temporal Crystal.

Using a map given to Solomon by Chronixus, you must find Goromon's precise location.

Mission Details
The map is represented as a 2D array. See the example below:

let mapExample = [[1,3,5],[2,0,10],[-3,1,4],[4,2,4],[1,1,5],[-3,0,12],[2,1,12],[-2,2,6]];
Here are what the values of each subarray represent:

Time Dilation: With each additional layer of time dilation entered, time slows by a factor of 2. At layer 0, time passes normally. At layer 1, time passes at half the rate of layer 0. At layer 2, time passes at half the rate of layer 1, and therefore one quarter the rate of layer 0.
Directions are as follow: 0 = North, 1 = East, 2 = South, 3 = West
Distance Traveled: This represents the distance traveled relative to the current time dilation layer. See below:
The following are equivalent distances (all equal a Standard Distance of 100):
Layer: 0, Distance: 100
Layer: 1, Distance: 50
Layer: 2, Distance: 25
For the mapExample above:

mapExample[0] -> [1,3,5]
1 represents the level shift of time dilation
3 represents the direction
5 represents the distance traveled relative to the current time dilation layer

Solomon's new location becomes [-10,0]

mapExample[1] -> [2,0,10]
At this point, Solomon has shifted 2 layers deeper.
He is now at time dilation layer 3.
Solomon moves North a Standard Distance of 80.
Solomon's new location becomes [-10,80]

mapExample[2] -> [-3,1,4]
At this point, Solomon has shifted out 3 layers.
He is now at time dilation layer 0.
Solomon moves East a Standard Distance of 4.
Solomon's new location becomes [-6,80]
Your function should return Goromon's [x,y] coordinates.

For mapExample, the correct output is [346,40].

Additional Technical Details
Inputs are always valid.
Solomon begins his quest at time dilation level 0, at [x,y] coordinates [0,0].
Time dilation level at any point will always be 0 or greater.
Standard Distance is the distance at time dilation level 0.
For given distance d for each value in the array: d >= 0.
Do not mutate the input
Note from the author: I made up this story for the purpose of this kata. Any similarities to any fictitious persons or events are purely coincidental.

If you enjoyed this kata, be sure to check out my other katas.
*/
function solomonsQuest(ar){
  const coordinates = [0, 0];
  let level = 0;
  ar.map(step => coordinates[1 - step[1] % 2] += Math.pow(2, level += step[0]) * step[2] * (step[1] < 2 ? 1 : -1));
  return coordinates;
}
