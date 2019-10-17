/*
Description:
Pac succesfully passed the first & second test.
He just received the last message from the Academy,

This is your last test, if you pass, your application will be accepted. You have 45 minutes.

Good Luck

Pac has to create a Football Player object with the following attributes :

name      -> (string)
position  -> (string)
age       -> (int)
dribbling -> (int)
pass      -> (int)
shoot     -> (int)
Example
myPlayer = new Player("Dumbo", "Kata Coder", 1,2,3,4);

myPlayer.name => "Dumbo"
myPlayer.position => "Kata Coder"
myPlayer.age => 1
myPlayer.dribbling => 2
myPlayer.pass => 3
myPlayer.shoot => 4
Feedbacks are appreciated!
*/
class Player {
  constructor(name, position, age, dribbling, pass, shoot) {
    this.name = name;
    this.position = position;
    this.age = age;
    this.dribbling = dribbling;
    this.pass = pass;
    this.shoot = shoot;
  }
}
