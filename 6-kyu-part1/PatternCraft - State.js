/*
Description:
The State Design Pattern can be used, for example, to manage the state of a tank in the StarCraft game.

The pattern consists in isolating the state logic in different classes rather than having multiple ifs to determine what should happen.

Your Task
Complete the code so that when a Tank goes into SiegeMode it cannot move and its damage goes to 20. When it goes to TankMode it should be able to move and the damage should be set to 5.

You have 3 classes:

Tank: has a state, canMove and damage properties
SiegeState and TankState: has canMove and damage properties
Note: The tank initial state should be TankState.

Resources
PatternCraft > State
SourceMaking > State
Wikipedia > State
PatternCraft series
State Pattern
Strategy Pattern
Visitor Pattern
Decorator Pattern
Adapter Pattern
Command Pattern
The original PatternCraft series (by John Lindquist) is a collection of Youtube videos that explains some of the design patterns and how they are used (or could be) on StarCraft.
*/
class SiegeState {
  constructor() {
  this.move=false
  this.dmg=20
  }
}

class TankState {
  constructor() {
  this.move=true
  this.dmg=5
  }
}

class Tank {
  constructor() {
  this.state=new TankState()
  }
  get canMove() {return this.state.move  }
  get damage() {return this.state.dmg  }
}
