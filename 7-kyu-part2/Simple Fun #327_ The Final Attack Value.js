/*
Description:
Task
John is playing a RPG game. The initial attack value of the player is x. The player will face a crowd of monsters. Each monster has different defense value.

If the monster's defense value is less than or equal to the player's attack value, the player can easily defeat the monster, and the player's attack value will increase. The amount increased is equal to the monster's defense value.

If the monster's defense value is greater than the player's attack value, the player can still defeat monsters, but the player's attack value can only be increased little, equal to the greatest common divisor of the monster's defense value and the player's current attack value.

The defense values for all monsters are provided by monsterList/monster_list. The player will fight with the monsters from left to right.

Please help John calculate the player's final attack value.

Example
For x = 50, monsterList=[50,105,200], the output should be 110.

The attack value increased: 50 --> 100 --> 105 --> 110

For x = 20, monsterList=[30,20,15,40,100], the output should be 205.

The attack value increased:

20 --> 30 --> 50 --> 65 --> 105 --> 205
*/
let gcd = (a, b) => b ? gcd(b, a  %b) : a;
let finalAttackValue = (x, mL) => mL.reduce((acc, v) => v < acc ? v + acc : acc + gcd(acc, v), x);
