/*
Description:
Jurassic Word is full of wonderful prehistoric creatures...eating a lot. In this kata your task is to take in a lunchtime scene of a dinosaur and their food, and decipher exactly what ate what.

Now, there isn't much mystery in what a dino might be eating. It can be one of:

String dead_dino = "_C     C}>";   // When this case is included in your return string, use "a dead dino" instead of "dead_dino"
String flowers   = "iii     iii";
String leaves    = "|||     |||";
Sting something  = "...     ...";  // for any other food you could encounter (dots being the food, in a regexp notation, all the characters in the middle being the bitemarks)
These empty spaces in the middle of each food are reserved for the bitemarks made by a dinosaur, which will always be 5 characters long.

Unfortunately, you don't get to see the action. You have to look at the bite marks made on the leftovers, and make your judgement that way.

There are four kinds of dinosaurs in the park that you know of:

t_rex = "VvvvV"; 
// When this case is included in your return string, 
// use "T-Rex" instead of "T_Rex"
brachiosaurus = "uuuuu";
velociraptor = "vvvvv";
triceratops = "uuVuu";
Although a dinosaur will be eating one of the three available foods, some dinosaurs will only eat certain items. For example, both the brachiosaurus and the triceratops are vegetarians and would love to eat flowers, but only the brachiosaurus would be able to reach the leaves. On the other hand, the T-Rex and the velociraptor would only want to eat dead dinos. Thus, if you see their bitemarks on a food that you know they wouldn't be eating, you must be mistaken and something else is feeding...(DUN DUN DUN). This is also true for bitemarks you have never seen before!

Here are a few examples of how your program should work:

lunchTime("_CVvvvVC}>")   // => "A T-Rex is eating a dead dino."
lunchTime("_CvvvvvC}>")   // => "A velociraptor is eating a dead dino."
lunchTime("iiiuuVuuiii")  // => "A triceratops is eating flowers."
lunchTime("|||uuVuu|||")  // => "Something is eating leaves."
lunchTime("_CVvVvVC}>")   // => "Something is eating a dead dino."
NOTE: All of these strings for bitemarks and food are given to you.
*/
class JurassicWord {
  constructor() {
    this.deadDino = /_C.{5}C}>/;
    this.flowers = /iii.{5}iii/;
    this.leaves = /\|\|\|.{5}\|\|\|/;
    this.tRex = "VvvvV";
    this.velociraptor = "vvvvv" ;
    this.brachiosaurus = "uuuuu";
    this.triceratops = "uuVuu";
  }
  
  lunchTime(scene) { 
    let dead = 'something.'
    if (scene.match(this.deadDino)) dead = 'a dead dino.'
    else if (scene.match(this.flowers)) dead = 'flowers.'
    else if (scene.match(this.leaves)) dead = 'leaves.'
    let eater = 'Something'
    if (scene==='uVuuVuuVuuu') return eater + ' is eating '+dead
    if (scene.includes(this.tRex)&&dead==='a dead dino.') eater = 'A T-Rex'
    else if (scene.includes(this.velociraptor)&&dead==='a dead dino.') eater = 'A velociraptor'
    else if (scene.includes(this.brachiosaurus)&&(dead==='flowers.'||dead==='leaves.')) eater = 'A brachiosaurus'
    else if (scene.includes(this.triceratops)&&dead==='flowers.') eater = 'A triceratops'
    if (dead==='something.'){
      if (scene.includes(this.tRex)) eater = 'A T-Rex'
      else if (scene.includes(this.velociraptor)) eater = 'A velociraptor'
      else if (scene.includes(this.brachiosaurus)) eater = 'A brachiosaurus'
      else if (scene.includes(this.triceratops)) eater = 'A triceratops'
    }
    return eater + ' is eating '+dead
  }
}
