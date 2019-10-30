/*
Description:

Background Story:
In the Dune universe, a spice harvester is a large, heavy, mobile factory designed to harvest the spice Melange. It is dropped by carrier ships (known as Carryalls) onto spice fields. Harvesters harvest and process the spice off the top of the desert floor.

Because of the rhythmic sound they make, harvesters are regularly eaten by sandworms (on the planet Arrakis, sandworms were reported to range from 100 meters to up to 450 meters in length). That's why 2 or 3 ornithopters (called spotters) are deployed to scout from the skies to watch for wormsign. Upon detection of wormsign (ie. worm movement), the spotters then contact the nearest Carryall for pickup of the target harvester.

Goal:
As a spotter pilot, you are responsible for handling dispatch of Carryalls in your vicinity. Your goal is to determine whether a carryall should be sent for rescue, or if it must be forfeited because there is not enough time.

Each test input will consist of an object data, which has the following properties:

harvester: location of the spice harvester

worm: location and travel speed of the spotted sandworm in the form [location, movement speed])

carryall: location and travel speed of the nearest carryall in the form [location, movement speed])

Conditions / Restrictions:
All coordinates (location) are in the form: [x, y] and may be positive or negative. For example: [45,225]
Assume that the sandworm and Carryall each are moving toward the harvester in a straight line at a constant speed.
A Carryall takes 1 minute to lift the harvester to a safe altitude in order to avoid being devoured by the sandworm. Take this into account when formulating your solution.
Distance is measured in kilometers (in the 213th century, the metric system is the universal standard)
Movement speed is measured in km/minute.
Input argument is always valid.
Return value should be a String type value.
Do not mutate the input.
Output:
If the harvester can be saved (that is, lifted to a safe altitude before the sandworm reaches the target location), the function should return The spice must flow! Rescue the harvester! otherwise, it should return Damn the spice! I'll rescue the miners!

Test Example:
let data1 = {harvester: [345,600], worm: [[200,100],25], carryall: [[350,200],32]};

harvesterRescue(data1); // returns 'The spice must flow! Rescue the harvester!'
If you enjoyed this kata, be sure to check out my other katas.
*/
function harvesterRescue(data){
  let w = (Math.hypot((data.harvester[0]-(data.worm[0][0])),(data.harvester[1]-data.worm[0][1]))-(data.worm[1]))/data.worm[1]
  let c = Math.hypot((data.harvester[0]-data.carryall[0][0]),(data.harvester[1]-data.carryall[0][1]))/data.carryall[1]
  return w<=c?'Damn the spice! I\'ll rescue the miners!':'The spice must flow! Rescue the harvester!'
}
