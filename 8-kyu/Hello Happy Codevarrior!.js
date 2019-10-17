/*
Description:
VVhat ?!?

None of zese codevarriors seemz to remember hiz ovvn name !

Kould you help ?

var albert = new Warrior("Al")
var boris  = new Warrior("Boris")

albert.toString() --> "Hi! my name's Boris" <-- ohoh..
*/

class Warrior {
  constructor(newName) {
    this.wName = newName
  }

  name(newName) {
    if (newName) {
      this.wName = newName
    }
    return this.wName
  }
}

Warrior.prototype.toString = function() {
  return `Hi! my name's ${this.wName}`
}
