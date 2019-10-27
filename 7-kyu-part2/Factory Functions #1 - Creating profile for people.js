/*
Description:
Factory Functions #1 - Creating profile for people
Overview
In Javascript, there are basically two types of constructors - those in classes and factory functions/constructors. A factory function (otherwise known as a factory constructor) is a function that returns an object literal. This means that lots of similar objects can be easily created and instantiated without ever using the new keyword. According to this article, there are a number of benefits of using factory functions over using class syntax:

Instantiating and object from a class requires the new keyword to be used; in contrast, with factory functions, the new keyword is not required at all
If a class constructor is called without the new keyword (e.g. Animal() instead of new Animal()), the global namespace will be polluted. No such danger exists when using factory functions
One of the conventions when using class syntax is that the name of the class is always in UpperCamelCase regardless of the programming language you are using. By using factory functions in Javascript instead, the programmer no longer feels the obligation to follow the awkward conventions of class syntax (i.e. the programmer will feel free to use lowerCamelCase in Javascript to name his/her factory constructor)
Factory functions are much more flexible tha class constructors in general
Factory functions (and other Javascript OOP methods that do not include classes and classical inheritance) allow inheritance of an object from multiple ancestors while a class can only inherit from one superclass
There's also the argument that by overusing classical inheritance and creating multiple layers of inheritance (for example, class Dachshund extends Dog, where class Dog extends Animal), if a bug occurs, it has to be fixed everywhere because for example after you fixed the superclass you will probably also have to fix the subclass as the behaviour of super may have already changed after the bug fix.

However, that article aside, I do not agree with all of his viewpoints, at least not at this stage, because I personally find class syntax much more readable and easy to understand and at this stage (of creating only very small programs with Javascript) I have not yet run into any of the problems he has mentioned yet.

However, who knows which one is better (classes or factory functions) if he/she hasn't tried both implementations? Therefore, in this Kata, you will be asked to create a basic factory function.

Task
Define a factory function person (yes, all lowercase letters) which accepts the following parameters in the following order:

firstName
lastName
age
gender
employed
occupation
married
The names of the object's keys should be identical to the names of the parameters mentioned above.

The object should (then) also have the following methods:

sayName - this should return the full name of the person (e.g. {firstName: "John", lastName: "Doe"} => "John Doe" // when the sayName() method is called)
introduce - this should return a string of the following format: "Hello, my name is FULL_NAME. I am AGE years old. I am a GENDER."
IMPORTANT: For the
introduce()
method of the person, each sentence is separated from the next by exactly TWO whitespace characters.

In the next Kata of this series, we will be investigating how "inheritance" / object composition is done through factory functions.

Articles of Interest
The articles below may help you complete this Kata:

Factory Functions Tutorial
The Two Pillars of Javascript Part I - Why constructors and classes in Javascript are a mess (HIGHLY RECOMMENDED READ)
*/
function person(
  firstName,
  lastName,
  age,
  gender,
  employed,
  occupation,
  married
) {
  return {
    firstName,
    lastName,
    age,
    gender,
    employed,
    occupation,
    married,
    sayName: function() {
      return this.firstName + " " + this.lastName;
    },
    introduce: function() {
      return `Hello, my name is ${this.sayName()}.  I am ${
        this.age
      } years old.  I am a ${this.gender}.`;
    }
  };
}
