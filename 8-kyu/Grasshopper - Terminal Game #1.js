/*
Description:
Terminal Game - Create Hero Prototype
In this first kata in the series, you need to define a Hero prototype to be used in a terminal game. The hero should have the following attributes:

attribute	value
name	user argument or 'Hero'
position	'00'
health	100
damage	5
experience	0
*/

class Hero {
  constructor(
    name = 'Hero',
    position = '00',
    health = 100,
    damage = 5,
    experience = 0
  ) {
    this.name = name
    this.position = position
    this.health = health
    this.damage = damage
    this.experience = experience
  }
}
