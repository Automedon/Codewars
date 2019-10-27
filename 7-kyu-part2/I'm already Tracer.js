/*
Description:
I'm already Tracer
Note: this is an easy Kata, but requires a bit of knowledge about the game Overwatch. Feel free to skip the background section if you are familiar with the game!

Background
Overwatch is an team-based online First Person Shooter. Teams are made up of 6 unique heroes. No team can have 2 of the same hero. e.g. You can't play Tracer if I'm already Tracer.

Heroes belong to 1 of 3 categories:

Tank
Tank heroes soak up damage, create space for your team, and break apart fortified positions, like closely-grouped enemies and narrow choke-points. If you’re a tank, you lead the charge.
Damage
Damage heroes are responsible for seeking out, engaging, and defeating the enemy using their varied tools and abilities. Playing a damage hero means it is your duty to secure kills.
Support
Support heroes empower their allies by healing them, boosting their damage, and providing vital utility. As support, you’re the backbone of your team’s survival.
https://overwatch.gamepedia.com/Template:Heroes

Challenge:
teamComp() 
Your goal is to write a function that will tell you your team "comp" (composition, i.e. balance of hero categories).

Input:
Array of hero names. Example:

['Reinhardt', 'Torbjörn', 'Mei', 'Pharah', 'Ana', 'Brigitte']
Output:
Array showing # of counts for each hero category. (Team Composition) Example:

[1, 3, 2]  // [(tank), (damage), (support)]
Helpers
Feel free to use TANK, DAMAGE, and SUPPORT - preloaded arrays of hero names in alphabetical order. Examples:

TANK[0]     // D.Va
DAMAGE[1]   // Bastion
SUPPORT[2]  // Lúcio
Invalid Team Composition
In the case of an invalid team comp:

Fewer or greater than 6 heroes
A hero appears more than once on the team
...

throw new Error('GG');
*/
function teamComp(heroes) {
  if (heroes.length != 6 || new Set(heroes).size != heroes.length) throw "GG";
  return [TANK, DAMAGE, SUPPORT].map(
    arr => arr.filter(h => heroes.indexOf(h) >= 0).length
  );
}
