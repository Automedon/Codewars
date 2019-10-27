/*
Description:
Story
Everyday on the way home Jacob finds himself in a trafic jam, which caps his speed on his way home.

Can you help Jacob calculate how long it will take for him to get home with all this traffic around?

Task
Your job is to write a function that accepts 3 arguments:

traffic speed (trafficSpeed in km/hr)
Jacob's max speed (jacobSpeed in km/hr)
distance (dist in km)
If the traffic speed is less then Jacob's speed then Jacob can only move at the traffic speed. Otherwise Jacob can move at his maximum potential speed.

The function should return amount of hours that it will take Jacob to make his way home.

All three arguments are integers greater than 0.
*/
function trafficJam(trafficSpeed, jacobSpeed, dist){
  return trafficSpeed<jacobSpeed?dist/trafficSpeed:dist/jacobSpeed
}
