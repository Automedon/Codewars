/*
Description:
Factory Functions #2 - Inheritance and Object Composition
Overview
In the previous Kata of this series, we examined a few of the many benefits and advantages of using factory functions for object construction and instantiation instead of using classes and its related features (e.g. classical inheritance). We also (hopefully) covered the one major reason for using factory functions over using object constructors - since any ordinary function in Javascript can return an object literal, why bother using a constructor, especially seeing that object constructors give us way less freedom in object instantiation than a regular function?

So you may ask - how exactly is inheritance achieved by using factory functions? Actually, inheritance in factory functions is very straightforward - you just have to instantiate an object using another factory function and then modify it using the current function before returning the result. Below is a (pseudocode) example.

function a(v1) {
  // Our "parent" factory constructor
  return {
    p1: v1
  };
}

function b(v2, v3) {
  // Our "child" factory constructor
  var obj = a("constructorDefault");
  obj.p2 = v2;
  obj.p3 = v3;
  return obj;
}
Preloaded
Preloaded is a function person:

function person(firstName, lastName, age, gender, employed, occupation, married) {
  return {
    firstName: firstName,
    lastName: lastName,
    age: age,
    gender: gender,
    employed: employed,
    occupation: occupation,
    married: married,
    sayName: function () {
      return `${this.firstName} ${this.lastName}`;
    },
    introduce: function () {
      return `Hello, my name is ${this.sayName()}.  I am ${this.age} years old.  I am a ${this.gender}.`;
    }
  };
}
Task
Define a function constructionWorker which "inherits" from the person function as demonstrated in the Overview and accepts the following parameters in the following order: firstName, lastName, age, gender, married, boss. The keys of the object returned should be identical to the name of the parameters mentioned above. Apart from that, a construction worker is always employed so employed should be set to true. Their occupation is also naturally a "construction worker".

On top of all that, a constructionWorker should have a method sayBossName which returns a string of the following format: "My boss is called BOSS_NAME and is a very nice person!" where BOSS_NAME is the name of the boss of said construction worker.
*/
function constructionWorker(firstName, lastName, age, gender, married, boss) {
  let obj = new person(firstName, lastName, age, gender);
  obj.occupation = "construction worker";
  obj.employed = true;
  obj.married = married;
  obj.boss = boss;
  obj.sayBossName = () =>
    `My boss is called ${boss} and is a very nice person!`;
  return obj;
}
