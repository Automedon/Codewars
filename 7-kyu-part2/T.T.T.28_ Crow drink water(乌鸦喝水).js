/*
Description:
They say that only the name is long enough to attract attention. They also said that only a simple Kata will have someone to solve it. This is a sadly story. series #28:
Crow drink water(乌鸦喝水)

Story（故事）
A crow is thirsty. He want to find water.
一 只 乌 鸦 口 渴 了，到 处 找 水 喝。

He found a bottle with only a little water in it.
它 发 现 了 一 只 瓶 子，里 面 只 有 一 点 水。

The water surface is very low, his mouth is short,
can not drink the water.
瓶口很小，水面很低，它的嘴巴又短，无法喝到水。

Smart crow in the next to find some small stones, 
put the small stones into the bottle.
聪明的乌鸦在旁边找到了一些小石子，把小石子投进瓶子里。

More and more stones in the bottle, the water rose, 
and the crow finally drank the water.
瓶子里的石头越来越多，水面升高了，乌鸦终于喝到了水。



(Picture for entertainment 图片仅供娱乐;-)

Task(任务)
Complete function drinkWater()/drink_water() that accepts five arguments:

bottleHeight/$bottle_height: The height of bottle.

bottleRadius/$bottle_radius: The radius of bottle.

waterHeight/$water_height: The height of water.

crowMouth/$crow_mouth: The length of crow's mouth

littleStones/$little_stones: An array. A volume list of some little stones.

You need to calculate how many stones can be used to make the crow drink water (using only mouth). You need to return a list of the stones to be used. (The stone can only be used from left to right).

If the crow can drink water (no need to put stone), return [].

If all the stones are used but the crow still can't drink the water. Please return "The crow is dead."

You can assume that the bottle is a standard cylinder. This will help you calculate the volume.

Examples(例子)
drinkWater(10,2,3,4,[5,6,7,8,9,10,11,12])
should return [5,6,7,8,9,10]

drinkWater(20,1,2,3,[4,5,6,7,8,9,10,11,12])
should return [4,5,6,7,8,9,10]

drinkWater(20,1,2,3,[4,5,6,7,8,9,10])
should return [4,5,6,7,8,9,10]

drinkWater(20,2,15,6,[4,5,6,7,8,9,10])
should return []

drinkWater(20,2,15,5,[4,5,6,7,8,9,10])
should return []

drinkWater(20,1,2,3,[4,5,6,7,8,9])
should return "The crow is dead."
*/
function drinkWater(
  bottleHeight,
  bottleRadius,
  waterHeight,
  crowMouth,
  littleStones
) {
  let remainingVolume =
    (bottleHeight - waterHeight - crowMouth) * Math.PI * bottleRadius ** 2;
  let result = [];
  for (let i = 0; i < littleStones.length; i++) {
    if (remainingVolume <= 0) break;
    result.push(littleStones[i]);
    remainingVolume -= littleStones[i];
  }
  return remainingVolume > 0 ? "The crow is dead." : result;
}
