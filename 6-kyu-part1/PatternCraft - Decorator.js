/*
Description:
The Decorator Design Pattern can be used, for example, in the StarCraft game to manage upgrades.

The pattern consists in "incrementing" your base class with extra functionality.

A decorator will receive an instance of the base class and use it to create a new instance with the new things you want "added on it".

Your Task
Complete the code so that when a Marine gets a WeaponUpgrade it increases the damage by 1, and if it is a ArmorUpgrade then increase the armor by 1.

You have 3 classes:

Marine: has a damage and an armor properties
MarineWeaponUpgrade and MarineArmorUpgrade: upgrades to apply on marine. Accepts a Marine in the constructor and has the same properties as the Marine
Resouces
PatternCraft > Decorator
SourceMaking > Decorator
Wikipedia > Decorator
PatternCraft series
State Pattern
Strategy Pattern
Visitor Pattern
Decorator Pattern
Adapter Pattern
Command Pattern
The original PatternCraft series (by John Lindquist) is a collection of Youtube videos that explains some of the design patterns and how they are used (or could be) on StarCraft.
*/
class Marine {
  constructor(_damage, _armor) {
    this.damage = _damage || 0;
    this.armor = _armor || 0;
  }
}

class MarineWeaponUpgrade {
  constructor(marine) {
    this.damage = marine.damage + 1;
    this.armor = marine.armor;
  }
}

class MarineArmorUpgrade {
  constructor(marine) {
    this.damage = marine.damage;
    this.armor = marine.armor + 1;
  }
}
