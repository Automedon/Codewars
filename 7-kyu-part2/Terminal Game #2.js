/*
Description:
Create the hero move method
Create a move method for your hero to move through the level.

Adjust the hero's position by changing the position attribute. The level is a grid with the following values.

00 | 01 | 02 | 03 | 04 ---|--- 10 | 11 | 12 | 13 | 14 20 | 21 | 22 | 23 | 24 30 | 31 | 32 | 33 | 34 40 | 41 | 42 | 43 | 44

The dir argument will be a string

up
down
left
right
If the position is not inside the level grid the method should throw an error and not move the hero
*/
Hero.prototype.move = function (dir) {
  let pos = this.position
  let newPos;
  switch(dir){
    case 'up':
       newPos= (pos*1-10)
      if (newPos<=-1||newPos>=45||newPos>=5&&newPos<=9||newPos>=15&&newPos<=19||newPos>=25&&newPos<=29||newPos>=35&&newPos<=39){
        throw new Error()
      } else {return this.position=newPos.toString().padStart(2,0)}
    case 'down':
       newPos= (pos*1+10)
      if (newPos<=-1||newPos>=45||newPos>=5&&newPos<=9||newPos>=15&&newPos<=19||newPos>=25&&newPos<=29||newPos>=35&&newPos<=39){
         throw new Error()
      }else {return this.position=newPos.toString().padStart(2,0)}
    case 'right':
      newPos= (pos*1+1)
      if (newPos<=-1||newPos>=45||newPos>=5&&newPos<=9||newPos>=15&&newPos<=19||newPos>=25&&newPos<=29||newPos>=35&&newPos<=39){
        throw new Error()
      }else {return this.position=newPos.toString().padStart(2,0)}
    case 'left':
      newPos= (pos*1-1)
      if (newPos<=-1||newPos>=45||newPos>=5&&newPos<=9||newPos>=15&&newPos<=19||newPos>=25&&newPos<=29||newPos>=35&&newPos<=39){
        throw new Error()
      }else { return this.position=newPos.toString().padStart(2,0)}
  }
}
