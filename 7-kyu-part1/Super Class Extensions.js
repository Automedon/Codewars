/*
Description:
Classy Extensions
Classy Extensions with Super, this kata is mainly aimed at the new JS ES6 Update introducing class extends
Task
Your task is to complete the Cat class which Extends Animal, we want to go to use the original speak method as well, so you must use the super method so the speak method for Cat now returns e.g.
'Mr Whiskers makes a noise, Mr Whiskers goes meow.'
Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
*/

class Animal { 
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    return this.name + ' makes a noise, ';
  }
}

class Cat extends Animal {
  speak(){
    return this.name + ' makes a noise, '+this.name+' goes meow.'
  }
}
