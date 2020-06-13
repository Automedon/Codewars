/*
Description:
Just another day in the world of Minecraft, Steve is getting ready to start his next exciting project -- building a railway system!

Alt text

But first, Steve needs to melt some iron ores in the furnace to get the main building blocks of rails -- iron ingots.Alt text

Each iron ingot takes 11 seconds* to produce. Steve needs a lot of them, and he has the following fuel options to add into the furnace:

Buckets of lava, each lasts 800 seconds*Alt text
Blaze rod, each lasts 120 secondsAlt text
Coals, each lasts 80 secondsAlt text
Blocks of Wood, each lasts 15 secondsAlt text
Sticks, each lasts 1 second*Alt text
In Ruby: Write a function calc_fuel that calculates the minimum amount of fuel needed to produce a certain number of iron ingots. This function should return a hash of the form {:lava => 2, :blaze_rod => 1, :coal => 1, :wood => 0, :stick => 0} In JavaScript: Write a function calcFuel that calculates the minimum amount of fuel needed to produce a certain number of iron ingots. This function should return an object of the form {lava: 2, blazeRod: 1, coal: 1, wood: 0, stick: 0} In Python: Write a function calc_fuel that calculates the minimum amount of fuel needed to produce a certain number of iron ingots. This function should return a dictionary of the form {"lava": 2, "blaze rod": 1, "coal": 1, "wood": 0, "stick": 0}

*fictional values

To all the Minecraft players out there: feel free to expand this series or let me know if you have any ideas related to Minecraft that can be turned into codewars puzzles. Some ideas I have that might potentially be turned into katas:

distance traveled in real world vs. in Nether
shortest path problems related to mining diamonds/gold/goodies that appears in different levels under ground
growth of animal population from breeding
redstone stuff?!
If you do end up expanding this series, please send me a link of your kata so I can check it out and include a link to your kata here :-)

Minecraft Series #1: Steve wants to build a beacon pyramid
Minecraft Series #3: Lava is amazing!
Minecraft Series #4: Lava is amazing, however...
*/
function calcFuel(n) {
  const stick = 1
  const wood = 15
  const coal = 80
  const blazeRod = 120
  const lava = 800
  let iron = n * 11
  const result = {
    lava: 0,
    blazeRod: 0,
    coal: 0,
    wood: 0,
    stick: 0,
  }

  switch (iron >= lava || iron >= blazeRod || iron >= coal || iron >= wood || iron >= stick) {
    case iron >= lava:
      result.lava = parseInt(iron / lava)
      iron -= result.lava * lava

    case iron >= blazeRod:
      result.blazeRod = parseInt(iron / blazeRod)
      iron -= result.blazeRod * blazeRod

    case iron >= coal:
      result.coal = parseInt(iron /coal)
      iron -= result.coal * coal

    case iron >= wood:
      result.wood = parseInt(iron / wood)
      iron -= result.wood * wood

    case iron >= stick:
      result.stick = parseInt(iron / stick)
      iron -= result.stick * stick
  }
  return result
};
