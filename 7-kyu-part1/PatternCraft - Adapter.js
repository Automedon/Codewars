/*
Description:
The Adapter Design Pattern can be used, for example in the StarCraft game, to insert an external character in the game.

The pattern consists in having a wrapper class that will adapt the code from the external source.

Your Task
The adapter receives an instance of the object that it is going to adapt and handles it in a way that works with our application.

In this example we have the pre-loaded classes:

class Marine {
  attack(target) {
    target.health -= 6;
  }
}

class Zealot {
  attack(target) {
    target.health -= 8;
  }
}

class Zergling {
  attack(target) {
    target.health -= 5;
  }
}

class Mario {
  jumpAttack() {
    console.log('Mamamia!');
    return 3;
  }
}
Complete the code so that we can create a MarioAdapter that can attack as other units do.

Note to calculate how much damage mario is going to do you have to call the jumpAttack method.
*/
class MarioAdapter {
  constructor(mario) {
    this.mario = mario;
  }

  attack(target) {
    target.health -= this.mario.jumpAttack();
  }
}
