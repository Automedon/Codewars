/*
Description:
Backstory
It is a little past midnight in your cool developer crib, and you have just received a shaky text from your most faithful client. Somewhere in your client's hushed emojis, you make out a plea for an emergency favor. Your client is adrift, stuck in the Caribbean on his "modestly-sized" yacht, and a swashbucklin' galleon full of monkeys trained by Keith Richards himself is fast approaching. Your client needs a function ASAP to calculate the likelihood of victory so that he/she may make an informed decision.

keef_for_president

Through the power of Tinder, your client will create two smoking object profiles that you can swipe right on and pass along to your function. These objects represent your client's ("modestly-sized," he could not emphasize that enough) yacht and the wild barrel of sea-faring monkeys.

Godspeed! The fate of the free world does not depend on this. However, your client may never be able to maintain a healthy relationship with local zoos or enjoy James Franco's dimples ever again...

Task
Your function will receive 2 objects in the following format (this is an example, the actual key names may be slightly different):

primates = {
  hit_points             -  int
  orangutans             -  int
  chimpanzees            -  int
  gorillas               -  int
  jane_reporting_4_duty  -  bool
}

humans = {
  hit_points  -  int
  crew        -  int
}
You should implement a function which determines whether the primates or humans will win, according to these specifications:

The two fighting powers are calculated by multiplying the power levels (provided in the initial solution) of each species by their headcount, summing up the results, and adding the appropriate object's hit points to that value
A third function parameter, terrain, determines which side has an advantage in the fight: "island" increases humans' total power by 20 points, and "sea" increases the primates' total power by 10 points ("total power" is the value calculated during the previous step)
The monkey object contains a jane_reporting_4_duty key - if it's value is true, the primates' total power should be multiplied by half of however many chimpanzees are present (this is applied after the terrain bonus)
The total power of each side determines the expected result: if the primates' power is greater than or equal to the humans' power, return "Abandon ship! Save your own skin and blame it on the 'modestly-sized' yacht!"; otherwise, return "Everything's good, I'll see you in the office on Monday."
*/
function biteMeMonkey(primates, humans, terrain) {
    let monkeyPower = (primates.orangutans * 5) + (primates.chimpanzees * 3) + (primates.gorillas * 9) + primates.hitPoints
    let humanPower = humans.hitPoints + humans.crew;

    if (terrain === 'island') humanPower += 20
    if (terrain === 'sea') monkeyPower += 10

    if (primates.janeReporting4Duty == true)
        monkeyPower *= (primates.chimpanzees / 2);
    if (monkeyPower >= humanPower)
        return "Abandon ship! Save your own skin and blame it on the 'modestly-sized' yacht!";
    return "Everything's good, I'll see you in the office on Monday.";
}
