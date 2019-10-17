/*
Description:

Back-Story
Every day I travel on the freeway.

When I am more bored than usual I sometimes like to play the following counting game I made up:

As I join the freeway my count is 0
Add 1 for every car that I overtake
Subtract 1 for every car that overtakes me
Stop counting when I reach my exit
What an easy game! What fun!

Kata Task
You will be given

The distance to my exit (km)
How fast I am going (kph)
Information about a lot of other cars
Their time (relative to me) as I join the freeway. For example,
-1.5 means they already passed my starting point 1.5 minutes ago
2.2 means they will pass my starting point 2.2 minutes from now
How fast they are going (kph)
Find what is my "score" as I exit the freeway!

Notes
Assume all cars travel at a constant speeds
 Safety Warning 

If you plan to play this "game" remember that it is not really a game. You are in a real car.

There may be a temptation to try to beat your previous best score.

Please don't do that...
*/
var freewayGame = function(distKmToExit, mySpeedKmPH, otherCars) {
    let myTimeToExit = distKmToExit / mySpeedKmPH;
    return otherCars.reduce((a, [lead, speed]) => a
        + (lead < 0 && myTimeToExit * speed < distKmToExit + lead / 60 * speed)
        - (lead > 0 && myTimeToExit * speed > distKmToExit + lead / 60 * speed), 0);
}
