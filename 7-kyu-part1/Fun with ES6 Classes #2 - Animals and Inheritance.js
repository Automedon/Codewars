/*
Description:
Fun with ES6 Classes #2 - Animals and Inheritance
Overview
Preloaded for you in this Kata is a class Animal:

class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}
Task
Define the following classes that inherit from Animal.

I. Shark
The constructor function for Shark should accept 3 arguments in total in the following order: name, age, status. All sharks should have a leg count of 0 (since they obviously do not have any legs) and should have a species of "shark".

II. Cat
The constructor function for Cat should accept the same 3 arguments as with Shark: name, age, status. Cats should always have a leg count of 4 and a species of "cat".

Furthermore, the introduce/Introduce method for Cat should be identical to the original except there should be exactly 2 spaces and the words "Meow meow!" after the phrase. For example:

var example = new Cat("Example", 10, "Happy");
example.introduce() === "Hello, my name is Example and I am 10 years old.  Meow meow!"; // Notice the TWO spaces - very important
III. Dog
The Dog constructor should accept 4 arguments in the specified order: name, age, status, master. master is the name of the dog's master which will be a string. Furthermore, dogs should have 4 legs and a species of "dog".

Dogs have an identical introduce/Introduce method as any other animal, but they have their own method called greetMaster/GreetMaster which accepts no arguments and returns "Hello (insert_master_name_here)" (of course not the literal string but replace the (insert_master_name_here) with the name of the dog's master).
*/

class Shark extends Animal {
  constructor(name, age, status) {
    super();
    this.name = name;
    this.age = age;
    this.legs = 0;
    this.status = status;
    this.species = "shark";
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super();
    this.name = name;
    this.age = age;
    this.status = status;
    this.legs = 4;
    this.species = "cat";
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master = "") {
    super();
    this.master = master;
    this.name = name;
    this.age = age;
    this.status = status;
    this.legs = 4;
    this.species = "dog";
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}
